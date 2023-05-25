import { useEffect, useState } from "react";
import style from "./Form.module.css";
import validations from "./validations";

function Form (props){
    const [allowSubmit,setAllowSubmit] = useState(true)

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const [errors, setError] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput({...input, [name]: value});
        setError(validations(errors,name,value));
    }

    useEffect(() =>{
        setAllowSubmit( Object.values(input).every(item => item !== "") && Object.values(errors).every(error => error === ""))
    }, [errors, input]);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("handleOnSubmit");
        console.log(props.access);
        props.login(input);
    }



    return(
        <form className= {style.BGContainer}>
            <div className= {style.Container}>
                <h1>Inicia Sesión</h1>
                <h2 className={style.Description}>Para continuar con MuscleLab</h2>

                <div className={style.InputContainer}>
                    <input className={style.Input1} type="text" name="email" id="email" placeholder="Usuario o Correo" onChange={handleOnChange}/>
                    {errors.email && <p>{errors.email}</p>}

                    <input type="text" name="password" id="password" placeholder= "Contraseña" onChange={handleOnChange}/>
                    {errors.password && <p>{errors.password}</p>}

                    <h2 className={style.ForgotPassword}>¿Olvidaste tu contraseña?</h2>
                </div>

                <button disabled={!allowSubmit} onClick={handleOnSubmit} className={style.ButtonLogIn}>Iniciar sesión</button>

                <button className= {style.ButtonCreate}>Crea una cuenta</button>
            </div>
        </form>
    )
}

export default Form