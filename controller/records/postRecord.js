import { sql } from "../../database";

export const postCategory = async (request, response) => {
  try {
    const { category_name, description, category_image } = request.body;

    const createCategory =
      await sql`SELECT userid, category_name, amount, transaction_type, description, currency_type, categoryid
FROM records
INNER JOIN categories ON records.categoryid = categories.categoryid;
INNER JOIN users on records.userid = useres.userid`;

    response.status(200).json({ categories: createCategory });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
