import { connectDb } from "@/lib/connectDb";
import { NextResponse } from 'next/server';  // Import NextResponse

export const GET = async (req) => {
  const { searchParams} = new URL(req.url);
  const price = searchParams.get("price");
  const search = searchParams.get("search");
   
  try {
    const db = await connectDb();
    const servicesCollection = db.collection("services");
    const priceOrder = price === "asc" ? 1 : -1;
    
     const pipeline = [];

     pipeline.push({
      $sort: {price : priceOrder},
     })
     
     if(search){
      pipeline.push({
        $match: {name: {$regex: search, $options: "i"}}
      })
     }
      

    const result = await servicesCollection.aggregate(pipeline).toArray();
    
    return Response.json({ services: result }, { status: 200 });  // Return the result;  // Use NextResponse to return JSON data
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
