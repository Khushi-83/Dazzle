import { NextResponse,NextRequest } from "next/server";



// fetch all the blogs
export async function GET(){
      return NextResponse.json({name:"hello"})
} 


// add new blog
export async function POST(){
      return NextResponse.json({name:"hello"})
} 


// update blog
export async function PATCH(){
      return NextResponse.json({name:"hello"})
} 

// Delete blog
export async function DELETE(){
      return NextResponse.json({name:"hello"})
} 