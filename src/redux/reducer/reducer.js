import { STORE_DATA } from "../actionTypes";

const initState = {
    data : []
}

const reducer = (state= initState, action) => {
    switch(action.type){
        case STORE_DATA : 
            return {
                ...state,
                data: action.payload
            }
        
        default :
            return state;    
    }
}

export {reducer}