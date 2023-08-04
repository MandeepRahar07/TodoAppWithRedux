import { GET_FAIL,GET_REQURST,GET_SUCCESS } from "./actiontype";

export const getrequest = ()=>{
    return { type: GET_REQURST}
}

export const getsuccess = (payload)=>{
    return{type : GET_SUCCESS, payload : payload}
}

export const getfail = ()=>{
    return { type : GET_FAIL}
}