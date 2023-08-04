
import { GET_FAIL,GET_REQURST,GET_SUCCESS } from './actiontype';

const intialvalue = {
    data : [],
    isLoding: false
}

function reducer(state=intialvalue, {type, payload}) {

    switch (type) {
        case GET_REQURST:
            return{
                ...state,
                isLoding: true
            }
        
        case GET_SUCCESS:
            return{
                ...state,
                data: payload,
                isLoding:false
            }
            
        case GET_FAIL:
            return{
                ...state,
                isLoding:false
            }
         
    
        default:
            return state;
                
    }    
  
  
}

export default reducer