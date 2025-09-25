import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
    title: "Dazzle - Dashboard",
    description: "Premium architectural staging and design services for luxury properties",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
