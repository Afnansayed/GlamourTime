import { connectDb } from "@/lib/connectDb";
import { ObjectId } from "mongodb";

export const GET = async (req) => {
    //console.log(req.url)
    const { searchParams } = new URL(req.url);
    const collection = searchParams.get("collection");
    const id = searchParams.get('id');
   // console.log(searchParams)
   // console.log(collection)

    try{
        const db = await connectDb();
        let result;
        switch(collection){
            case "services": 
            const servicesCollection = db.collection("services");
            if(id){
                const query = { _id: new ObjectId(id) };
                result = await servicesCollection.findOne(query);
                if(!result){
                    return Response.json({message: 'service not found'} , {status: 404});
                }
            }else{
                result = await servicesCollection.find().toArray();
             }
            break;

            case "stylists": 
            const usersCollection = db.collection("stylists");
            result = await usersCollection.find().toArray();
            break;

            case 'reviews' : 
            const reviewsCollection = db.collection("reviews");
            result = await reviewsCollection.find().toArray();
            break;

            default: 
            return Response.json({message: 'collection not found'} , {status: 404});
        }
        return Response.json(result);
    }catch(error){
        return Response.json({error: error.message} , {status: 500});
    }
}