const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(request, response){
    const {id} = request.params
    fetch(URL + id)
    .then(res => res.json())
    .then(data => {
        const {id, name, gender, species, origin, image, status} = data;
        if(name){
            const character = {
                id,
                name,
                gender,
                species,
                origin: origin.name,
                image,
                status
            }
            return response.status(200).json(character)
        }
        
        return response.status(404).send("Not Found")


    })
    .catch(error => {
        return response.status(500).send(error.message)}
    )
}

module.exports = {
    getCharById
};