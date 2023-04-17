import style from "./Tarjeta.module.css";



export default function Tarjeta ({image,name,temperament,weigth}) {
    return(
        <div className= {style.tarjeta}>
            <h2 className= {style.name} >name1 = {name}</h2>
            <h2 className= {style.temperament}>temperament = {temperament}</h2>
            <h2 className= {style.weigth}>peso = {weigth}</h2>
            <img className= {style.image} src={image} alt="" />
        </div>
    );
};

