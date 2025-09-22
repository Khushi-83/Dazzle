import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isUserRoute = createRouteMatcher([
    "/storefront(.*)",
    "/api/orders(.*)",
    "/api/buy(.*)",
    "/api/cart(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    // Ensure the user is signed in for protected routes
    if (isAdminRoute(req) || isUserRoute(req)) {
        await auth.protect();
    }

    // Fetch session claims (includes metadata like roles)
    const { sessionClaims } = auth();
    const role = sessionClaims?.metadata?.role as "admin" | "user" | undefined;

    // ✅ Admin routes check
    if (isAdminRoute(req)) {
        if (role !== "admin") {
            return new Response("Unauthorized - Admins only", { status: 403 });
        }
    }

    // ✅ User routes check
    if (isUserRoute(req)) {
        if (role !== "user" && role !== "admin") {
            return new Response("Unauthorized - Users only", { status: 403 });
        }
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
