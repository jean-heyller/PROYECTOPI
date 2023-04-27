import useDog from "../../Hooks/UseDogs";
import style from "./Detail.module.css"


const Detail = () =>{
    const dog = useDog();
    return(
        <div  className={style.container}>
            {dog ? (
            <>
            <h2>{dog.name}</h2>
            <p>Id: {dog.id}</p>
            <p>Height-imperial:{dog.height.imperial}</p>
            <p>Life span :{dog.life_span}</p>
            <p>Temperaments :{dog.temperament}</p>
            <p>Origin:{dog.origin}</p>
            <p>weight-imperial: {dog.weight.imperial}</p>
            <img className={style.image} src={dog.image.url}></img>
            </>
            ) : (
                <h3>Loading...</h3>
            )};
        </div>
    );  
};
export default Detail;