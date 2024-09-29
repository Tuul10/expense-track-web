import { sql } from "../../database";

export const updateCategory = async (request, response) => {
  try {
    const { id } = request.params;
    const { category_name, description, category_image } = request.body;

    const updatedCategory = await sql`UPDATE categories 
                            SET category_name = ${category_name}, description = ${description}, category_image = ${category_image}
                            WHERE categoryid = ${id}
                            RETURNING *`;

    response.status(200).json({ users: updatedCategory[0] });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
