import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
    title: "Dazzle - Dashboard",
    description: "Premium architectural staging and design services for luxury properties",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider
            afterSignInUrl={undefined}
            afterSignUpUrl={undefined}
        >
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}