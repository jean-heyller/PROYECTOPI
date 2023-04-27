import style from "./Card.module.css";
import { Link } from 'react-router-dom';


export default function Card ({image,name,temperament,weight,id}) {
    return(
        <div className= {style.tarjeta}>
            <Link to={`/detail/${id}`}>
            <h2 className= {style.text} >name</h2>
            <span className={style.span}>{name}</span>
            </Link>
            <h2 className= {style.text}>temperament</h2>
            <p className={style.span}>{temperament}</p>
            <h2 className= {style.text}>peso {weight.imperial} Kg</h2>
            {image?<img className= {style.image} src={image.url} alt="" />:<h1>No tiene imagen</h1>}          
        </div>
    );
};

