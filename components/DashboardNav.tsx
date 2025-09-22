"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BellIcon, PlusIcon, MenuIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "./ui/sidebar";

export function DashboardNav() {
    return (
        <header className="border-b border-border mb-4">
            <div className="max-w-full mx-auto flex items-center justify-between p-4">
                {/* Left section: Sidebar toggle + Search */}
                <div className="flex items-center gap-2">
                   
                        <SidebarTrigger/>
                   

                    <Input
                        type="text"
                        placeholder="Search..."
                        className="w-full md:w-64 border-0 focus:ring-0 focus:border-0 bg-transparent"
                    />
                </div>

                {/* Right section: Quick add, notifications, avatar */}
                <div className="flex items-center gap-2">
                    <Button variant="default" size="sm" className="flex items-center gap-1">
                        <PlusIcon className="h-4 w-4" />
                        Quick Add
                    </Button>

                    <Button variant="ghost" size="icon">
                        <BellIcon className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>

                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-foreground">
                        <UserButton />
                    </div>
                </div>
            </div>
        </header>
    );
}
