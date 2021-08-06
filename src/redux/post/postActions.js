import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from "./postTypes";

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        payload: post
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

export const addComment = (commentInfo) => {
    return {
        type: ADD_COMMENT,
        payload: commentInfo
    }
}