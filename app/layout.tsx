import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { Inter, Hedvig_Letters_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const hedvig = Hedvig_Letters_Serif({ subsets: ["latin"], variable: "--font-hedvig" });

export const metadata = {
    title: "Dazzle - Dashboard",
    description: "Premium architectural staging and design services for luxury properties",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" >
                <body className={`${inter.variable} ${hedvig.variable} font-sans bg-background text-foreground`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
