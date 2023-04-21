import Tarjeta from "../Tarjeta/Tarjeta";
import style from '../Tarjetas/Tarjetas.module.css';
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { get_dogs_api, order_dogs, filter_dogs_origin,filter_temp } from "../../Redux/actions";


export default function Tarjetas() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogsFilter);

  useEffect(() => {
    dispatch(get_dogs_api());
  }, []);
  
  const filtrar = (e) => {
    const { value } = e.target;
    dispatch(filter_dogs_origin(value));
  };
  const ordenar = (e)=>{
    const {value} = e.target
    dispatch(order_dogs(value))
  }
  const filtrat_temp = (e)=>{
    const {value} = e.target
    dispatch(filter_temp(value))
  }
  return (
    <div>
      <div className={style.Tarjetas}>
        <div>
        <button></button>
        <select name="filtrar" onChange={filtrar}>
        <option value="Api">Api</option>
        <option value="Db">Database</option>
        </select>
        <div>
        <select name="filtrar" onChange={ordenar}>
        <option value="alfabeticamente">alfabeticamente</option>
        <option value="Peso">Peso</option>
        </select>
        <select name="filtrar" onChange={filtrat_temp}>
        <option value="tempermanetos"></option>
        <option value="Loving">Loving</option>
        <option value="Trainable">Trainable</option>
        <option value="Dutiful">Dutiful</option>
        </select>
        </div>
        </div>
        {dogs.map(({ image, name, temperament, weigth, id }) => {
          return (
            <Tarjeta
              id={id}
              name={name}
              temperament={temperament}
              weigth={weigth}
              image={image}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}
