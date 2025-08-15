import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const token = jwt.sign({ user: "admin" }, "secret", { expiresIn: "2m" }); // expires in 2 minutes
    console.log("Token generated:", token);

    await setUserSession(event, {
      user: { name: "admin" },
      secure: { apiToken: token },
    });
    console.log("Session set successfully");
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: "Error to create token",
      data: error,
    });
  }

  return {};
});
