import { sql } from "../../database/index";

export const getRecord = async (_request, response) => {
  try {
    const records = await sql`SELECT * FROM records`;

    response.status(200).json({ categories: records });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
