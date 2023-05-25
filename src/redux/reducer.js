import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action ) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[action.payLoad, ...state.myFavorites]
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== Number(action.payLoad))

            }
        default:
            return {...state}
    }
}

export default reducer;