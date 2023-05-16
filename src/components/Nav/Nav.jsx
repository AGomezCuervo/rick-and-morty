import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";


function Nav(props){
    return(
        <header>
            <div className={style.Title}>
                <img src={"https://th.bing.com/th/id/R.75509f2ec9725b3cef07eefe651a4a8f?rik=sKs%2fCxpSqexcmA&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2frickandmorty%2fimages%2fc%2fc8%2fRick_and_Morty_logo.png%2frevision%2flatest%3fcb%3d20160907114210&ehk=wQ45WzI%2fcfGTUXcfzetmTym%2f84DwR8u%2fWTmJOPzBE2Y%3d&risl=&pid=ImgRaw&r=0"}/>
            </div>
            <SearchBar onSearch = {props.onSearch}/>
            <div className={style.Extra}></div>
        </header>
    )
}

export default Nav;