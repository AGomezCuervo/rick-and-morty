import { ADD_FAV, MAP_FAV, REMOVE_FAV, GET_CHARACTER, REMOVE_CHARACTER} from "./action-types";

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payLoad: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payLoad: id
    }
}

export const mapFav = (value) => {
    return {
        type: MAP_FAV,
        payLoad: value
    }
}

export const getCharacter = (input) => {
    return async function(dispatch){
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${input}`);
            const data = await response.json()
            return dispatch({type: GET_CHARACTER , payLoad: data})
            
        } catch (error) {
            console.log(error.message);
            return false
        }
    }
}

export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payLoad: id
    }
}