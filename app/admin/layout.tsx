import type { Metadata } from "next";

import "../globals.css";
import { Clerk } from "@clerk/clerk-sdk-node";
import { ClerkProvider } from "@clerk/nextjs";




export const metadata: Metadata = {
    title: "Dazzle - Dashboard",
    description:
        "Premium architectural staging and design services for luxury properties",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
     
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
      
    );
}
