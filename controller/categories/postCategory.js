import { sql } from "../../database";

export const postCategory = async (request, response) => {
  try {
    const { category_name, description, category_image } = request.body;

    const createCategory =
      await sql`INSERT INTO categories (category_name, description, category_image)
                VALUES (${category_name}, ${description}, ${category_image})
                RETURNING *`;

    response.status(200).json({ categories: createCategory });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
