import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// fetch single blog by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blog = await prisma.blog.findUnique({
      where: {
        id,
      },
    });

    if (!blog) {
      return NextResponse.json(
        {
          message: "Blog not found",
          success: false,
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}