export interface MusicEntity {
    id: string
    bandName: string
    songTitle: string
    musicGenre: string
    youTubeLink: string
}

export interface UserEntity {
    id: string
    userName: string
    password: string
    confirmPassword?: string
    emailAddress: string
}

export interface LogEntity {
    userName: string
    password: string
}