import { sql } from "../../database";

export const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    const deleteUser = await sql`DELETE FROM users
                                 WHERE userid = ${id}`;
    response.status(200).json({ users: deleteUser });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
