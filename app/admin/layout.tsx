import type { Metadata } from "next";

import "./admin.css";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardNav } from "@/components/DashboardNav";

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
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full min-h-screen transition-all p-4">
                <DashboardNav
                />
                {children}
            </main>
        </SidebarProvider>
    );
}
