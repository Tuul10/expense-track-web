import { sql } from "../../database";

export const getUser = async (request, response) => {
  const users = sql`SELECT * FROM users`;

  response.status(200).json({ users: users });
};
