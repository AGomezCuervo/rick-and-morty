import { useSelector, useDispatch } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addFav, removeFav } from "../../redux/actions";

function Card(props) {

    const [isFav, setIsFav] = useState(false)
    const { character, onDelete } = props;
    const { id, name, species, gender, image } = character;
    const dispatch = useDispatch();
    const {myFavorites} = useSelector(state => state);

    const handleFavorite = () => {
        if(isFav === false){
            setIsFav(true);
            dispatch(addFav(character));
            console.log(myFavorites)
        } else{
            setIsFav(false);
            dispatch(removeFav(character.id))
            console.log(myFavorites)
        }

    }



    return (
        <div className={style.Container}>
            <div className={style.ButtonContainer}>
                <button className={style.Button}
                    onClick={() => onDelete(id)}> X
                </button>
                {
                isFav ? (<button onClick={handleFavorite}>❤️</button>): 
                        (<button onClick={handleFavorite}>🤍</button>)
                        
                }
            </div>
            <Link to={`/detail/${id}`} className={style.Link}>
                <div className={style.Card}>
                    <div className={style.Id}>
                        {id}
                    </div>
                    <img className={style.Image} src={image} alt={image} />
                    <div className={style.Atributes}>
                        <h2>Name: {name}</h2>
                        <h2>Specie:  {species}</h2>
                        <h2>Gender: {gender}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;