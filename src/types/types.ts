export type BoardContentsPropsType = {
    boardName: string
}

export type PostType = {
    title: string,
    content: string,
    category: string
}

export type PostItemType = {
    id:number,
    title:string,
    content:string,
    category:string,
}

export type pageDataType = {
    selected:number
}

export type CommentItemType = {
    id:number,
    user:string,
    comment:string,
}

export type signupInputType = {
    email:string,
    password: string,
    nickname: string
}