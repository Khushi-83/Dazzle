import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Allowed roles mapping
const CLERK_TO_PRISMA_ROLE: Record<string, "CUSTOMER" | "STAFF" | "ADMIN"> = {
    CUSTOMER: "CUSTOMER",
    STAFF: "STAFF",
    ADMIN: "ADMIN",
};

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error("Missing CLERK_WEBHOOK_SECRET");
    }

    // Read headers synchronously
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return NextResponse.json({ error: "Missing svix headers" }, { status: 400 });
    }

    // Grab request body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    } catch (err) {
        console.error("❌ Webhook verification failed:", err);
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const eventType = evt.type;
    const data = evt.data;

    try {
        // Determine role from Clerk public metadata
        const roleFromClerk =
            (data.public_metadata?.role as "CUSTOMER" | "STAFF" | "ADMIN") || "CUSTOMER";

        const prismaRole = CLERK_TO_PRISMA_ROLE[roleFromClerk] || "CUSTOMER";

        if (eventType === "user.created") {
            await prisma.user.create({
                data: {
                    email: data.email_addresses[0]?.email_address,
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                    clerkId: data.id,
                    role: prismaRole,
                },
            });
            console.log("✅ User created in DB:", data.id, "Role:", prismaRole);
        }

        if (eventType === "user.updated") {
            await prisma.user.upsert({
                where: { clerkId: data.id },
                update: {
                    email: data.email_addresses[0]?.email_address,
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                    role: prismaRole,
                },
                create: {
                    clerkId: data.id,
                    email: data.email_addresses[0]?.email_address,
                    name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
                    role: prismaRole,
                },
            });
            console.log("🔄 User upserted in DB:", data.id, "Role:", prismaRole);
        }

        if (eventType === "user.deleted") {
            await prisma.user.delete({
                where: { clerkId: data.id },
            });
            console.log("🗑️ User deleted from DB:", data.id);
        }
    } catch (err) {
        console.error("⚠️ Error syncing user:", err);
        return NextResponse.json({ error: "Error processing webhook" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
