import style from "./Card.module.css"

function Card(props) {

    const { character, onDelete } = props
    const { id, name, species, gender, image } = character



    return (
        <div className={style.container}>
            <div className={style.buttonContainer}>
                <button className={style.button}
                    onClick={() => onDelete(id)}> X</button>
            </div>
            <div className={style.card}>
                <div className={style.id}>
                    {id}
                </div>
                <div className={style.heart}>
                    
                </div>
                <img className={style.image} src={image} alt={image} />
                <div className={style.atributes}>
                    <h2>Name: {name}</h2>
                    <h2>Specie:  {species}</h2>
                    <h2>Gender: {gender}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;