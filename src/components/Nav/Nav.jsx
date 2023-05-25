import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


function Nav(props){
    return(
        <header>
            <div className={style.Title}>
                <img alt="logo" src={"https://www.seekpng.com/png/full/112-1129023_no-account-no-worries-rick-and-morty-logo.png"}/>
            </div>
            <SearchBar onSearch = {props.onSearch}/>
            <div className={style.ButtonsContainer}>
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