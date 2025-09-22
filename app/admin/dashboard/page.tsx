import { SignOutButton } from '@clerk/nextjs'
import React from 'react'


import { StatsCard } from "@/components/stats-card"
import { KanbanBoard } from "@/components/kanban-board"
import { ActivityFeed } from "@/components/activity-feed"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  Calendar,
  DollarSign,
  Package,
  TrendingUp,
  Plus,
  Users,
  ClipboardList,
  CalendarDays
} from "lucide-react"

const quickActions = [
  { icon: Users, label: '+ New Client', action: 'new-client' },
  { icon: Home, label: '+ New Project', action: 'new-project' },
  { icon: Package, label: '+ Add Inventory Item', action: 'add-inventory' },
  { icon: Calendar, label: 'Book Consultation', action: 'book-consultation' }
]

const page = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border">
        <CardContent>
          <h1 className="text-2xl font-semibold mb-2">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">
            You have 3 consultations this week and 5 active staging projects.
          </p>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatsCard
          title="Active Projects"
          value={12}
          change="+2 from last month"
          changeType="positive"
          icon={Home}
        />
        <StatsCard
          title="Homes Staged This Month"
          value={8}
          change="+15% from last month"
          changeType="positive"
          icon={TrendingUp}
        />
        <StatsCard
          title="Avg. Days on Market"
          value={18}
          change="-12% from last month"
          changeType="positive"
          icon={CalendarDays}
        />
        <StatsCard
          title="Inventory in Use"
          value="65%"
          change="15 items available"
          changeType="neutral"
          icon={Package}
        />
        <StatsCard
          title="Revenue This Month"
          value="$28,450"
          change="+22% from last month"
          changeType="positive"
          icon={DollarSign}
        />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Button
                  key={action.action}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-accent/50"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-sm">{action.label}</span>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Project Pipeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Project Pipeline</h2>
          <Button variant="outline" size="sm">
            <ClipboardList className="h-4 w-4 mr-2" />
            View All Projects
          </Button>
        </div>
        <KanbanBoard />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Tasks */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">Design consultation</p>
                  <p className="text-xs text-muted-foreground">Wilson residence</p>
                </div>
                <span className="text-xs text-muted-foreground">Today 2:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">Staging setup</p>
                  <p className="text-xs text-muted-foreground">45 Elm Street</p>
                </div>
                <span className="text-xs text-muted-foreground">Tomorrow 9:00 AM</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">De-staging</p>
                  <p className="text-xs text-muted-foreground">123 Oak Avenue</p>
                </div>
                <span className="text-xs text-muted-foreground">Friday 11:00 AM</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}

export default page