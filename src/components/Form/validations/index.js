import emailValidation from "./emailValidation";
import passwordValidation from "./passwordValidation";

const validations = (errors,name,value) => {
    switch(name){
        case "email":
            return emailValidation(errors, name, value);

        case "password":
            return passwordValidation(errors, name, value)
        default:
            return {password: "", email: ""}
    }
}

export default validations;