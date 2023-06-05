import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";import { useState } from "react";
import { mapFav } from "../../redux/actions";



function Nav(props){
    const dispatch = useDispatch();
    const {mapFavorites} = useSelector(state => state);

    const handleMapFavorites = () => {
        if (mapFavorites === false){
            dispatch(mapFav(true));
        } else{
            dispatch(mapFav(false))
        }
    }

    return(
        <header>
            <div className={style.Title}>
                <a href="http://localhost:3000/home">
                    <img alt="logo" src={"https://www.seekpng.com/png/full/112-1129023_no-account-no-worries-rick-and-morty-logo.png"}/>
                </a>
            </div>
            <SearchBar onSearch = {props.onSearch}/>
            <div className={style.ButtonsContainer}>

                <button onClick={handleMapFavorites} className={mapFavorites === true ? `${style.Button} ${style.Active}`: style.Button}>Favorites</button>

                <Link to={"/home"}>
                    <button className={style.Button}>Home</button>
                </Link>

                <Link to={"/About"}>
                    <button className={style.Button}>About</button>
                </Link>
            </div>
        </header>
    )
}

export default Nav;