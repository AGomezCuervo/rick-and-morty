function getCharById(res, id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
        const {id, name, gender, species, origin, image, status} = data;

        const character = {
            id,
            name,
            gender,
            species,
            origin: origin.name,
            image,
            status
        }

        return res.writeHead(200, {"Content-type": "application/json"})
            .end(JSON.stringify(character))
    })
    .catch(error => {
        return res.writeHead(500, {"Content-type": "text/plain"})
        .end(error.message)
        }
    )
}

module.exports = {
    getCharById
};