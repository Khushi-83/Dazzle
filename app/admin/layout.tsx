import type { Metadata } from "next";

import "./admin.css";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar.tsx";
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
                    items={[
                        { label: "Home", link: "/" },
                        { label: "Projects", subItems: [{ label: "Active", link: "/projects/active" }, { label: "Archived", link: "/projects/archived" }] },
                        { label: "Reports", badge: "3" },
                    ]}
                />
                {children}
            </main>
        </SidebarProvider>
    );
}
