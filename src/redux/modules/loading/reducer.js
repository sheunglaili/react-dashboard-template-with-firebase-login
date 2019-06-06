import {actionTypes } from './action'

const initialState = {
    isLoading : true
}

export default (state = initialState , action ) => {
    switch(action.type) {
        case actionTypes.LOADING_START:
            return Object.assign({},state,{
                isLoading:true
            });
        case actionTypes.LOADING_END:
           return Object.assign({},state,{
               isLoading:false
           });
        default:
           return state;   
    }
}