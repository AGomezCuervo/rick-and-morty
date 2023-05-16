import style from "./SearchBar.module.css"
import {useRef, useState} from "react";

function SearchBar(props){
    const inputRef = useRef(null) 
    const [id, setId] = useState("")
    
    const handleOnChange = (event) =>
        setId(event.target.value)

    const handleOnClick = () =>{
        props.onSearch(id);
        inputRef.current.value = ""
    }

    const handleOnKeyDown = (event) =>{
        if(event.key === "Enter"){
            handleOnClick();
        }
    }
    
    return(
            <div className={style.container}>
                <input
                    ref={inputRef}
                    type="text"
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                />

                <button onClick={handleOnClick}>Add</button>
        </div>
    )
}

export default SearchBar;