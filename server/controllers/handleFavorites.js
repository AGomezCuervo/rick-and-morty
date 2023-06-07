let favorites = [];

function postFav (request, response) {
    const character = request.body;
    favorites.push(character)

    return response.status(200).json(favorites);
}

function deleteFav (request, response) {
    const {id} = request.params;
    favorites = favorites.filter(favorite => favorite.id !== +id);

    return response.status(200).json(favorites);
}


module.exports = {
    postFav,
    deleteFav
}