import { sql } from "../../database";

export const postRecord = async (request, response) => {
  try {
    const {
      userid,
      record_name,
      amount,
      transaction_type,
      description,
      categoryid,
      transferat,
    } = request.body;
    console.log(request.body);

    const createRecord =
      await sql`INSERT INTO records (userid, record_name, amount, transaction_type, description, categoryid, transferat)
                VALUES (${userid}, ${record_name}, ${amount}, ${transaction_type}, ${description},  ${categoryid} ,${transferat})
                RETURNING *`;

    response.status(200).json({ records: createRecord });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
