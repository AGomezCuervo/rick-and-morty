import style from "./Filters.module.css";

const Filters = () => {
    
    const handleOnChange = () => {

    }

    return(
        <div className={style.FiltersContainer}>
            <select name="ById" id="">
                <option value="normal"> No order</option>
                <option value="ascending"> Ascending</option>
                <option value="descending"> Descending</option>
            </select>

            <select name="ById" id="">
                <option value="normal"> No order</option>
                <option value="male"> Male</option>
                <option value="female"> Female</option>
                <option value="genderless"> Genderless</option>
                <option value="unknow"> Unknow</option>
            </select>

        </div>
    )
}

export default Filters