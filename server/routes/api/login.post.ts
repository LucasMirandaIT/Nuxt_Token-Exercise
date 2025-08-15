import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const token = jwt.sign({ user: "admin" }, "secret", { expiresIn: "2m" }); // expires in 2 minutes

    await setUserSession(event, {
      user: { name: "admin" },
      secure: { apiToken: token },
    });
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: "Error to create token",
      data: error,
    });
  }

  return {};
});
