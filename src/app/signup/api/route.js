import { connectDb } from "@/lib/connectDb";
import bcrypt from "bcrypt";

export const POST = async (req) => {
    const newUser = await req.json();

    try{
        const db = await connectDb();
        const userCollection = db.collection("users");
        const exist = await userCollection.findOne({email: newUser.email});
        if(exist){
            return Response.json({message: 'user already exist'} , {status: 304});
        }
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const result = await userCollection.insertOne({...newUser, password: hashPassword});
        return Response.json({message: 'user Created'} , {status: 200});
    }catch(error){
        return Response.json({error: error.message} , {status: 500});
    }
}