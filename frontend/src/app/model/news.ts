export interface News {
    title: string
    content: string
    type: string
    audio: Blob | null
    video: Blob | null
    photos: Blob[]
}