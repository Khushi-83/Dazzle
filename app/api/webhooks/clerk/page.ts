// app/api/webhooks/clerk/route.ts
import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    

    if (!WEBHOOK_SECRET) {
        throw new Error("Missing CLERK_WEBHOOK_SECRET");
    }

    // headers() is synchronous, don’t await
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new NextResponse("Missing svix headers", { status: 400 });
    }

    // Verify webhook payload
    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: any;
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    } catch (err) {
        console.error("❌ Webhook verification failed:", err);
        return new NextResponse("Invalid signature", { status: 400 });
    }

    const eventType = evt.type;
    const data = evt.data;

    try {
        if (eventType === "user.created") {
            await prisma.user.create({
                data: {
                    email: data.email_addresses[0]?.email_address,
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                    clerkId: data.id,
                    role: "CUSTOMER",
                },
            });
            console.log("✅ User created in DB:", data.id);
        }

        if (eventType === "user.updated") {
            await prisma.user.update({
                where: { clerkId: data.id },
                data: {
                    email: data.email_addresses[0]?.email_address,
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                },
            });
            console.log("🔄 User updated in DB:", data.id);
        }

        if (eventType === "user.deleted") {
            await prisma.user.delete({
                where: { clerkId: data.id },
            });
            console.log("🗑️ User deleted from DB:", data.id);
        }
    } catch (err) {
        console.error("⚠️ Error syncing user:", err);
        return new NextResponse("Error processing webhook", { status: 500 });
    }

    return new NextResponse("Webhook received", { status: 200 });
}
