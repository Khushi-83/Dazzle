import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, MessageSquare, Plus, TrendingUp } from "lucide-react"

interface ActivityItem {
    id: string
    type: 'consultation' | 'staging' | 'client' | 'project' | 'task'
    title: string
    description: string
    timestamp: string
    status?: string
}

const mockActivities: ActivityItem[] = [
    {
        id: '1',
        type: 'consultation',
        title: 'Consultation booked with John D.',
        description: '456 Oak Street consultation scheduled for tomorrow',
        timestamp: '2 hours ago',
        status: 'scheduled'
    },
    {
        id: '2',
        type: 'staging',
        title: 'Staging completed at 45 Elm Street',
        description: 'Full staging setup completed by Sarah and team',
        timestamp: '4 hours ago',
        status: 'completed'
    },
    {
        id: '3',
        type: 'client',
        title: 'New client inquiry received',
        description: 'Maria Rodriguez interested in luxury staging package',
        timestamp: '6 hours ago',
        status: 'new'
    },
    {
        id: '4',
        type: 'project',
        title: 'Design proposal approved',
        description: 'Thompson residence - $8,500 staging proposal approved',
        timestamp: '1 day ago',
        status: 'approved'
    },
    {
        id: '5',
        type: 'task',
        title: 'Inventory pickup scheduled',
        description: 'Furniture pickup from 123 Pine Road on Friday',
        timestamp: '1 day ago',
        status: 'scheduled'
    }
]

const typeIcons = {
    consultation: Calendar,
    staging: CheckCircle,
    client: Plus,
    project: TrendingUp,
    task: MessageSquare
}

const typeColors = {
    consultation: 'bg-blue-100 text-blue-800',
    staging: 'bg-green-100 text-green-800',
    client: 'bg-purple-100 text-purple-800',
    project: 'bg-orange-100 text-orange-800',
    task: 'bg-gray-100 text-gray-800'
}

export function ActivityFeed() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {mockActivities.map((activity) => {
                        const Icon = typeIcons[activity.type]
                        return (
                            <div
                                key={activity.id}
                                className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                            >
                                <div className="flex-shrink-0">
                                    <div className={`p-2 rounded-full ${typeColors[activity.type]}`}>
                                        <Icon className="h-4 w-4" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium text-sm">{activity.title}</h4>
                                        <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                                    {activity.status && (
                                        <Badge variant="outline" className="text-xs">
                                            {activity.status}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}
