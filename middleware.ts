// app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const session = req.cookies.get("session")?.value;

    if (!session) {
        // No session, redirect to sign-in
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
    }

    // Parse session JSON
    let clerkId: string | null = null;
    try {
        const sessionData = JSON.parse(session);
        clerkId = sessionData.clerkId ?? null;
    } catch (err) {
        console.error("Invalid session:", err);
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
    }

    // If clerkId is null, redirect
    if (!clerkId) {
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
    }

    // Fetch user role
    const user = await prisma.user.findUnique({ where: { clerkId } });
    if (!user) {
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
    }
    if (req.nextUrl.pathname.startsWith("/storefront") && user.role === "ADMIN") {
        // Admins may access storefront too (optional)
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/storefront/:path*"],
};
