import { ADD_FAV, MAP_FAV, REMOVE_FAV, GET_CHARACTER, REMOVE_CHARACTER} from "./action-types";

export const addFav = (character) => {
    const endPoint = "http://localhost:3001/rickandmorty/fav"
    return async function(dispatch){
        try {
            const response = await fetch(endPoint,{
                method: 'POST',
                body:JSON.stringify(character),
                
            });
            const data = await response.json()

            return dispatch({type: ADD_FAV , payLoad: data})
            
        } catch (error) {
            console.log(error.message);
            return false
        }
    }
}

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async function (dispatch) {
        try {
        const response = await fetch(endpoint, {
            method: 'DELETE'
        });

         const data = await response.json();

         dispatch({
            type: REMOVE_FAV,
            payload: data
         });
        } catch (error) {
            console.log("no existe este personaje")
        }
   };
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
            const response = await fetch(`http://localhost:3001/rickandmorty/character/${input}`);
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