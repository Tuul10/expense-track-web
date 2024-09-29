import { sql } from "../../database";

export const deleteCategory = async (request, response) => {
  try {
    const { id } = request.params;

    const deleteCategory = await sql`DELETE FROM categories
                                     WHERE categoryid = ${id}`;
    response.status(200).json({ users: deleteCategory });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
