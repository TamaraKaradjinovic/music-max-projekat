export interface SongPost {
    name: string
    year: number
    genre: number
    authors: number[]
    singers : number[]
    audio: Blob | null
    video: Blob | null
    albumCover: Blob | null
}