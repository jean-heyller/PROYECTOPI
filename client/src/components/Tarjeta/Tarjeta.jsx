import style from "./Tarjeta.module.css";
import { Link } from 'react-router-dom';


export default function Tarjeta ({image,name,temperament,weigth,id}) {
    return(
        <div className= {style.tarjeta}>
            <Link to={`/detail/${id}`}>
            <h2 className= {style.name} >name1 = {name}</h2>
            </Link>
            <h2 className= {style.temperament}>temperament = {temperament}</h2>
            <h2 className= {style.weigth}>peso = {weigth}</h2>
            <img className= {style.image} src={image.url} alt="" />
        </div>
    );
};

