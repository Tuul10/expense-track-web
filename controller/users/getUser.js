import { sql } from "../../database/index";

export const getUser = async (request, response) => {
  try {
    const users = await sql`SELECT * FROM users`;

    response.status(200).json({ users: users });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
