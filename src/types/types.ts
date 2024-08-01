export type BoardContentsPropsType = {
    boardName: string
}

export type PostType = {
    title: string,
    content: string,
    userUid: string,
}

export type PostItemType = {
    id:string,
    title:string,
    content:string,
    category:string,
    userUid:string
}

export type pageDataType = {
    selected:number
}

export type CommentItemType = {
    board_id:string | undefined,
    userUid:string,
    nickname:string,
    comment:string,
}

export type signupInputType = {
    email:string,
    password: string,
    nickname: string
}

export type userType = {
    userEmail:string|undefined,
    userId:string|undefined,
    userNickname:string|undefined
  }