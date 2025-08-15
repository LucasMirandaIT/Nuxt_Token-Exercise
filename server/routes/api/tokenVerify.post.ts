import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const data = await requireUserSession(event);
  console.log('data ::: ', data.secure?.apiToken);

  try {
    const token = jwt.verify(data.secure?.apiToken, "secret");

    return { valid: true, token };
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: "Expired Token",
      data: error,
    });
  }

  return {};
});
