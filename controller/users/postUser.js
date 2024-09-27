import { sql } from "../../database";

export const postUser = async (request, response) => {
  try {
    const { email, user_name, user_password, avatar_im } = request.body;

    await sql`INSERT INTO users (email, user_name, user_password, avatar_im )
              VALUES (${email}, ${user_name},${user_password}, ${avatar_im})`;

    response.status(200).json({ users: request.body });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
