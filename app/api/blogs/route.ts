import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

// fetch all the blogs
export async function GET() {
      try {
            const blogs = await prisma.blog.findMany({})

            if (!blogs) {
                  return NextResponse.json({})
            }
           
            return NextResponse.json(blogs)

      } catch (error) {
            console.log(error)
      }
}


// add new blog
export async function POST() {
      return NextResponse.json({ name: "hello" })
}


// update blog
export async function PATCH() {
      return NextResponse.json({ name: "hello" })
}

// Delete blog
export async function DELETE() {
      return NextResponse.json({ name: "hello" })
} 