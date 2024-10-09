import { sql } from "../../database/index";

export const getRecordById = async (request, response) => {
  try {
    const { id } = request.params;
    const records = await sql`SELECT * FROM records
                              INNER JOIN categories ON records.categoryid = categories.categoryid
                              WHERE records.categoryid = ${id}`;

    response.status(200).json({ records: records });
  } catch (error) {
    response.status(400).json({ error: error });
    console.log(error);
  }
};
