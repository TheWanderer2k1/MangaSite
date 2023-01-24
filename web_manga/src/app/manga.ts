export interface IManga{
    ID_manga: number,
    name: string,
    author: string,
    genre: string,
    numberOfRead: number,
    thumbnail: string,
    description: string,
    listChapter: IChapter[]
}

export interface IChapter{
    ID_chapter: number,
    name: string
    images: IImg[]
}

export interface IImg{
    ID_img: number,
    path: string
}

export interface IUser{
    ID_reader: number,
    username: string,
    expiry: number
}

export interface IComment{
    username: string,
    cmt: string,
    date: string
}