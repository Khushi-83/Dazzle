-- CreateTable
CREATE TABLE "public"."Blog" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "featuredImage" VARCHAR(150) NOT NULL,
    "content" JSONB NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'Dazzle',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
