import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, User } from "lucide-react"

interface ProjectCard {
    id: string
    clientName: string
    propertyAddress: string
    stageType: string
    dueDate: string
    status: 'on-track' | 'urgent' | 'delayed'
}

interface KanbanStage {
    id: string
    title: string
    projects: ProjectCard[]
    color: string
}

const mockStages: KanbanStage[] = [
    {
        id: 'consult',
        title: 'Consult',
        color: 'bg-blue-50 border-blue-200',
        projects: [
            {
                id: '1',
                clientName: 'Sarah Johnson',
                propertyAddress: '123 Maple Street',
                stageType: 'Initial Consultation',
                dueDate: '2024-01-15',
                status: 'on-track'
            },
            {
                id: '2',
                clientName: 'Mike Chen',
                propertyAddress: '456 Oak Avenue',
                stageType: 'Virtual Consultation',
                dueDate: '2024-01-16',
                status: 'urgent'
            }
        ]
    },
    {
        id: 'quote',
        title: 'Quote',
        color: 'bg-yellow-50 border-yellow-200',
        projects: [
            {
                id: '3',
                clientName: 'Emily Davis',
                propertyAddress: '789 Pine Road',
                stageType: 'Staging Quote',
                dueDate: '2024-01-18',
                status: 'on-track'
            }
        ]
    },
    {
        id: 'design',
        title: 'Design',
        color: 'bg-purple-50 border-purple-200',
        projects: [
            {
                id: '4',
                clientName: 'Robert Wilson',
                propertyAddress: '321 Cedar Lane',
                stageType: 'Design Planning',
                dueDate: '2024-01-20',
                status: 'on-track'
            }
        ]
    },
    {
        id: 'staged',
        title: 'Staged',
        color: 'bg-green-50 border-green-200',
        projects: [
            {
                id: '5',
                clientName: 'Lisa Anderson',
                propertyAddress: '654 Birch Street',
                stageType: 'Full Staging',
                dueDate: '2024-01-25',
                status: 'on-track'
            },
            {
                id: '6',
                clientName: 'David Thompson',
                propertyAddress: '987 Elm Drive',
                stageType: 'Partial Staging',
                dueDate: '2024-01-22',
                status: 'delayed'
            }
        ]
    }
]

function ProjectCardComponent({ project }: { project: ProjectCard }) {
    const statusColors = {
        'on-track': 'bg-green-100 text-green-800 border-green-300',
        'urgent': 'bg-red-100 text-red-800 border-red-300',
        'delayed': 'bg-orange-100 text-orange-800 border-orange-300'
    }

    return (
        <Card className="mb-3 hover:shadow-sm transition-shadow">
            <CardContent className="p-4">
                <div className="space-y-3">
                    <div className="flex items-start justify-between">
                        <h4 className="font-medium">{project.clientName}</h4>
                        <Badge className={`text-xs ${statusColors[project.status]}`}>
                            {project.status.replace('-', ' ')}
                        </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            <span>{project.propertyAddress}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="h-3 w-3" />
                            <span>{project.stageType}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function KanbanBoard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockStages.map((stage) => (
                <div key={stage.id} className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-medium">{stage.title}</h3>
                        <Badge variant="secondary">{stage.projects.length}</Badge>
                    </div>

                    <div className={`rounded-lg border-2 border-dashed p-4 min-h-[400px] ${stage.color}`}>
                        <div className="space-y-3">
                            {stage.projects.map((project) => (
                                <ProjectCardComponent key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
