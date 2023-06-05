import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(){

    const {idParam} = useParams()
    const [character, setCharacter] = useState({})
    const { id, name, species, gender, image, status} = character

    useEffect(() =>{
        fetch(`http://localhost:3001/rickandmorty/character/${idParam}`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            if(data.name){
                setCharacter(data)
            } else {
                window.alert("No existe este personaje")
            }
        });
    
    },[idParam])
    
    return(
        <div className={style.Container}>
                <div className={style.Card}>
                    <div className={style.Id}>
                        {id}
                    </div>
                    <div className={style.Heart}>   
                    </div>
                    <img className={style.Image} src={image} alt={name}/>
                    <div className={style.Atributes}>
                        <h2>Name: {name}</h2>
                        <h2>Specie: {species}</h2>
                        <h2>Gender: {gender}</h2>
                        <h2>Status: {status}</h2>
                        <h2>Origin: {character.origin?.name}</h2>
                    </div>
                </div>
        </div>
)
}

export default Detail