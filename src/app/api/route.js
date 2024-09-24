import { connectDb } from "@/lib/connectDb";

export const GET = async (req) => {
    //console.log(req.url)
    const { searchParams } = new URL(req.url);
    const collection = searchParams.get("collection");
   // console.log(searchParams)
   // console.log(collection)

    try{
        const db = await connectDb();
        let result;
        switch(collection){
            case "services": 
            const servicesCollection = db.collection("services");
            result = await servicesCollection.find().toArray();
            break;

            case "users": 
            const usersCollection = db.collection("users");
            result = await usersCollection.find().toArray();
            break;

            default: 
            return Response.json({message: 'collection not found'} , {status: 404});
        }
        return Response.json(result);
    }catch(error){
        return Response.json({error: error.message} , {status: 500});
    }
}