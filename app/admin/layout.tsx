import type { Metadata } from "next";

import "../globals.css";

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
        <main>{children}</main>
    );
}
