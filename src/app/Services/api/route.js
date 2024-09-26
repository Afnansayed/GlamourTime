import { connectDb } from "@/lib/connectDb";
import { NextResponse } from 'next/server';  // Import NextResponse

export const GET = async () => {
  try {
    const db = await connectDb();
    const servicesCollection = db.collection("services");
    const result = await servicesCollection.find().toArray();
    
    return Response.json({ services: result }, { status: 200 });  // Return the result;  // Use NextResponse to return JSON data
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
