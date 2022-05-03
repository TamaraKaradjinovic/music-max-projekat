export interface Song {
    name: string
    year: number
    genre: string
    user: string
    authors: string[]
    singers : string[]
    audio: Blob
    video: Blob
    albumCover: Blob
}