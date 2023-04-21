import { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { filter_dogs_origin } from "../../Redux/actions";

export default function SearchBar() {
    const [name, setName] = useState("");
    const handleChange = (event) => {
    setName(event.target.value);
    };
    const dispatch = useDispatch();
    const onSearch = (name) =>{
        dispatch(filter_dogs_origin(name))
    }
    return (
    <div className={style.bar}>
        <input
        type="search"
        className={style.searchInput}
        onChange={handleChange}
        />
        <button className={style.searchButton} onClick={() => onSearch(name)}>
        </button>
    </div>
    );
};
