import { sql } from "../../database";

export const deleteRecord = async (request, response) => {
  try {
    const { id } = request.params;
    const deleteUser = await sql`DELETE FROM records
                                 WHERE recordid = ${id}`;
    response.status(200).json({ users: deleteUser });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
