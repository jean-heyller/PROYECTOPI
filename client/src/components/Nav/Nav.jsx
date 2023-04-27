import style from "./Nav.module.css";

import { Link } from "react-router-dom";


export default function Nav() {


return (
    <div className={style.nav}>
    <Link to="/"><a className={style.titule}>Home</a></Link>
    <Link to="/form"><a className={style.titule}>Form</a></Link>
    <Link to="/home"><a className={style.titule}>Tarjetas</a></Link>
    </div>
);
}