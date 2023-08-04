import { GET_FAIL,GET_REQURST,GET_SUCCESS, POST_FAIL,POST_REQURST,POST_SUCCESS,DELETE_FAIL,DELETE_REQURST,DELETE_SUCCESS } from "./actiontype";

export const getrequest = ()=>{
    return { type: GET_REQURST}
}

export const getsuccess = (payload)=>{
    return{type : GET_SUCCESS, payload : payload}
}

export const getfail = ()=>{
    return { type : GET_FAIL}
}

export const postrequest = ()=>{
    return { type: POST_REQURST}
}

export const postsuccess = (payload)=>{
    return{type : POST_SUCCESS, payload : payload}
}

export const postfail = ()=>{
    return { type : POST_FAIL}
}

export const deleterequest = ()=>{
    return { type : DELETE_REQURST}
}

export const deletesuccess = (payload)=>{
    return { type : DELETE_SUCCESS, payload: payload}
}

export const deletefail = ()=>{
    return { type : DELETE_FAIL}
}
