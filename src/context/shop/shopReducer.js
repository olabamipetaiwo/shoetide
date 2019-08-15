import {
    SEARCH_USER,
} from '../types';

export default (state,action) => {
    switch(action,type) {
        case SEARCH_USER:
            return {
                ...state,
                users: action.payload,
                loading:false
            }
        
        default:
            return state;
    }
}