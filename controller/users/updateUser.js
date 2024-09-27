import { sql } from "../../database";

export const updateUser = async (request, response) => {
  try {
    const { id } = request.params;
    const { email, user_name, user_password, avatar_im } = request.body;

    const updatedUser = await sql`UPDATE users
              SET email=${email}, user_name=${user_name}, user_password= ${user_password}, avatar_im = ${avatar_im}
              WHERE userid= ${id}
              RETURNING *`;

    response.status(200).json({ users: updatedUser[0] });
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
