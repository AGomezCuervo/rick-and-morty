import { ADD_FAV, GET_CHARACTER, MAP_FAV, REMOVE_CHARACTER, REMOVE_FAV } from "./action-types";

const initialState = {
    characters: [],
    myFavorites: [],
    mapFavorites: false
}

const reducer = (state = initialState, action ) => {
    switch(action.type){

        case GET_CHARACTER:
            return{
                ...state,
                characters: [action.payLoad, ...state.characters]
            }

        case REMOVE_CHARACTER:
            return{
                ...state,
                characters: state.characters.filter(character => character.id !== Number(action.payLoad))
            }

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
        
        case MAP_FAV:
            return {
                ...state,
                mapFavorites: action.payLoad
            }
        default:
            return {...state}
    }
}

export default reducer;