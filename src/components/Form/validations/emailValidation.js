const emailValidation = (errors, name, value) => {
    if(value.length === 0){
        return {...errors, [name]: "No puede estar vacio"} 
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
        return {...errors, [name]: "este no es un correo valido"}
    }
    return {...errors, [name]: ""}
}

export default emailValidation;