import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filter_dogs } from "../../Redux/actions";

export default function Nav() {
const dispatch = useDispatch();

return (
    <div>
    <SearchBar></SearchBar>
    <Link to="/form">FORM</Link>
    </div>
);
}