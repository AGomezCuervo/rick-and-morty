import style from "./Cards.module.css"
import Card from "../Card/Card";

function Cards(props){
    const {characters, onDelete} = props
    return(
        <div className={style.container}>
            {
              characters.map((character) =>{
                  return <Card character = {character}
                  onDelete = {onDelete}/>
              })
            }
        </div>
    )
}


export default Cards;