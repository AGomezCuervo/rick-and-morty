import { useSelector, useDispatch } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeCharacter, removeFav } from "../../redux/actions";

function Card(props) {
    const [isFav, setIsFav] = useState(false)
    const { character} = props;
    const { id, name, species, gender, image } = character;
    const dispatch = useDispatch();
    const {myFavorites, mapFavorites} = useSelector(state => state);

    const handleFavorite = () => {
        if(isFav === false){
            setIsFav(true);
            dispatch(addFav(character));
        } else{
            setIsFav(false);
            dispatch(removeFav(character.id))
        }

    }

    const handleOnDelete = (id) => {
        if(mapFavorites === true){
          dispatch(removeFav(id))
        } else{
          dispatch(removeCharacter(id))
        }
      };

    useEffect(() => {
        myFavorites.forEach(element => {
            if(element.id === character.id){
                setIsFav(true);
            }
        });
     }, [myFavorites]);



    return (
        <div className={style.Container}>
            <div className={style.Id}>
                {id}
            </div>

        {
            isFav ? (<button className={style.Favorite} onClick={handleFavorite}>❤️</button>): 
            (<button className={style.Favorite} onClick={handleFavorite}>🤍</button>)
                                
        }
            
            <div className={style.ButtonContainer}>
                <button className={style.Button}
                    onClick={() => handleOnDelete(id)}> X
                </button>
            </div>
            <Link to={`/detail/${id}`} className={style.Link}>
                <div className={style.Card}>
                    <div className={style.Extra}></div>
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