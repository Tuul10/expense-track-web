import { sql } from "../../database";

export const signIn = async(request, response)=>{
    try{const {email, user_password} = request.body
   const user = await sql`SELECT * FROM users
              WHERE email = ${email} and user_password = ${user_password}`

response.status(200).json(user)
}catch(error){
response.status(400).json({message:error})
}
    



}