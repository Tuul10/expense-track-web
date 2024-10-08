import { sql } from "../../database/index";

export const getRecord = async (request, response) => {
  try {
    const records = await sql`SELECT * FROM records
                              INNER JOIN categories ON records.categoryid = categories.categoryid
                             `;

    response.status(200).json({ records: records });
  } catch (error) {
    response.status(400).json({ error: error });
    console.log(error);
  }
};
