export type Task = {
    collaborators: string[]
    created_at: string
    description: string
    due_date: string | null
    id: number
    name: string
    project_id: number | null
    status: "Closed" | "In Progress"
}
