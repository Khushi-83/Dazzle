import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    LayoutDashboard,
    Users,
    FolderOpen,
    Package,
    CheckSquare,
    BarChart3,
    Users2,
    FileText,
    Settings
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

const items = [
    {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "CRM",
        url: "#",
        icon: Users,
    },
    {
        title: "Projects",
        url: "#",
        icon: FolderOpen,
    },
    {
        title: "Inventory",
        url: "#",
        icon: Package,
    },
    {
        title: "Tasks",
        url: "#",
        icon: CheckSquare,
    },
    {
        title: "Reports",
        url: "#",
        icon: BarChart3,
    },
    {
        title: "Team",
        url: "#",
        icon: Users2,
    },
    {
        title: "Blogs",
        url: "/admin/dashboard/blogs",
        icon: FileText,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="bg-neutral-800 border-neutral-700">
            <SidebarHeader className="p-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-md flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">D</span>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold">Dazzle Staging</h2>
                        <p className="text-neutral-400 text-sm">& Design</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-4">
                <SidebarGroup>
                    <div className="mb-2">
                        <h3 className="text-neutral-400 text-sm font-medium">Navigation</h3>
                    </div>
                    <SidebarMenu>
                        {items.map((item, index) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    className={`text-neutral-300 hover:bg-neutral-700 hover:text-white ${index === 0 ? 'bg-neutral-700 text-white' : ''
                                        }`}
                                >
                                    <Link href={item.url} className="flex items-center gap-3 px-3 py-2">
                                        <item.icon className="w-5 h-5" />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4">
                <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-neutral-600 text-white text-sm">
                            ER
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-white text-sm font-medium">Emily Rodriguez</p>
                        <p className="text-neutral-400 text-xs">Admin</p>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}