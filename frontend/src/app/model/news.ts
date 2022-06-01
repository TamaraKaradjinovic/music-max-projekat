import { Festival } from "./festival"

export interface News {
    title: string
    content: string
    type: string
    festival: Festival | null
    audio: Blob | null
    video: Blob | null
    photos: Blob[]
}