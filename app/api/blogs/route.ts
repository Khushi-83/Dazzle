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
            return NextResponse.json({
                  message: "something went wrong",
                  success: false
            }, {
                  status: 500
            })
      }
}


// add new blog
export async function POST(req: NextRequest) {

      try {
            const data = await req.json()
            if (!data) {
                  return NextResponse.json({
                        message: "Please insert data",
                        success: false
                  }, {
                        status: 401
                  })
            }
            
            await prisma.blog.create({
                  data: data
            })

            return NextResponse.json({ message: "blog has been added" }, { status: 200 })
      } catch (error) {
            console.log(error)
            return NextResponse.json({
                  message: "something went wrong",
                  success: false
            }, {
                  status: 500
            })
      }
}


// update blog
export async function PATCH() {
      return NextResponse.json({ name: "hello" })
}

// Delete blog
export async function DELETE() {
      return NextResponse.json({ name: "hello" })
} 