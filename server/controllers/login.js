const user = require("../utils/users");

function login (request, response) {
    const {email, password} = request.query;

    const finder = user.find((user) => user.email === email && user.password === password);
    if(finder) return response.status(200).json({acces:true})
    
    return response.status(500).json({acces:false})
}

module.exports = {
    login
}