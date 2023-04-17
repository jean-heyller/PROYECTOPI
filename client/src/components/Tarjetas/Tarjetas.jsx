import Tarjeta from "../Tarjeta/Tarjeta";
import style from '../Tarjetas/Tarjetas.module.css';
export default function Tarjetas ({dogs}) {

    return(
        <div >
            <div>
                <select name="Temperamet" className={style.filter}>
                <option value="api">api</option>
                <option value="Database">Database</option>
                </select>
                <button className={style.button}>Buscar</button>
            </div>
            <div className= {style.Tarjetas}>
            {dogs.map(({image,name,temperament,weigth})=>{
                return(
                    <Tarjeta
                    name = {name}
                    temperament = {temperament}
                    weigth = {weigth}
                    image = {image}
                    />
                );
            })};
            </div>
        </div>
    )
}