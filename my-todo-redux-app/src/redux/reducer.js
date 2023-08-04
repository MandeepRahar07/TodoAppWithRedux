
import { GET_FAIL, GET_REQURST, GET_SUCCESS, POST_FAIL, POST_REQURST, POST_SUCCESS,DELETE_FAIL,DELETE_REQURST,DELETE_SUCCESS } from './actiontype';

const intialvalue = {
    data: [],
    isLoding: false
}

function reducer(state = intialvalue, { type, payload }) {

    switch (type) {
        case GET_REQURST:
            return {
                ...state,
                isLoding: true
            }

        case GET_SUCCESS:
            return {
                ...state,
                data: payload,
                isLoding: false
            }

        case GET_FAIL:
            return {
                ...state,
                isLoding: false
            }
        case POST_REQURST:
            return {
                ...state,
                isLoding: true
            }

        case POST_SUCCESS:
            return {
                ...state,
                data: [...state.data, payload],
                isLoding: false
            }
        case POST_FAIL:
            return {
                ...state,
                isLoding: false
            }
            case DELETE_FAIL:
                return {
                    ...state,
                    isLoding: false
                }

                case DELETE_REQURST:
                    return {
                        ...state,
                        isLoding: true
                    }   
              
                    case DELETE_SUCCESS:
                        return {
                            ...state,
                            data: state.data.filter((data)=> data.id !== payload ),
                            isLoding: false
                        }  

        default:
            return state;

    }


}

export default reducer