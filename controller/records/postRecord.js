import { sql } from "../../database";

export const postRecord = async (request, response) => {
  try {
    const {
      userid,
      record_name,
      amount,
      transaction_type,
      description,
      gategoryid,
    } = request.body;

    const createRecord =
      await sql`INSERT INTO records (userid, record_name, amount, transaction_type, description, categoryid)
                VALUES (${userid}, ${record_name}, ${amount}, ${transaction_type}, ${description},  ${gategoryid})`;

    response.status(200).json({ records: createRecord });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
