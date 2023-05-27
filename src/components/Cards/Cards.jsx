import style from "./Cards.module.css"
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Filters from "../Filters/Filters";

function Cards(props){

    const {myFavorites, mapFavorites} = useSelector(state => state);

    const {characters} = props
    return(
        <>
        <Filters/>
        <div className={style.container}>
            {
                mapFavorites === true ? (
                    myFavorites.map((character) => {
                        return <Card character = {character}/>
                    })
                ):
                characters.map((character) => {
                    return <Card character = {character}/>
                })
            }
        </div>
        </>
    )
}


export default Cards;