import { sql } from "../../database";

export const getCategory = async (_request, response) => {
  try {
    const categories = await sql`SELECT * FROM categories`;

    response.status(200).json({ categories: categories });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
