export interface Festival {
    id: number
    name: string
    description: string
    startDate: Date
    endDate: Date
    coverPhoto: Blob | null
    comments: Comment[]
}