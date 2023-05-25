import { ADD_FAV, REMOVE_FAV} from "./action-types";

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