const passwordValidation = (errors, name, value) => {
    if(value.length === 0){
        return {...errors, [name]: "No puede estar vacio"} 
    }

    if(value.length < 5){
        return {...errors, [name]: "la contraseña debe tener más de 5 caracteres"}
    }
    return {...errors, [name]: ""};
}

export default passwordValidation;