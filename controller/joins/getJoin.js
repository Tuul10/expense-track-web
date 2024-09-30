import { sql } from "../../database/index";

export const getJoin = async (request, response) => {
  try {
    const joins = await sql`SELECT *
                              FROM records
                              INNER JOIN users on records.userid = users.userid
                              INNER JOIN categories on records.categoryid = categories.categoryid`;

    response.status(200).json({ records: joins });
  } catch (error) {
    response.status(400).json({ error: error });
    console.log(error);
  }
};
