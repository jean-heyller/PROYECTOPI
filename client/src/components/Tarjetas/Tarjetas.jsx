import Tarjeta from "../Tarjeta/Tarjeta";
import style from '../Tarjetas/Tarjetas.module.css';
import { useEffect,useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { get_dogs_api, order_dogs, filter_dogs_origin,filter_temp,get_dog_name } from "../../Redux/actions";


export default function Tarjetas() {
  const [name, setName] = useState("");
    const handleChange = (event) => {
    setName(event.target.value);
    };

  const onSearch = (name) =>{
    console.log(name)
      dispatch(get_dog_name(name))
  }  
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
        <input
        type="search"
        className={style.searchInput}
        onChange={handleChange}
        />
        <button className={style.searchButton} onClick={() => onSearch(name)}>
        </button>
      <select className={style.select}  name="filtrar" onChange={filtrar}>
      <option className={style.option}  value="Api">Api</option>
      <option value="Db">Database</option>
      </select>
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
      <div className={style.Tarjetas}>
        {dogs.map(({ image, name, temperament, weight, id }) => {
          return (
            <Tarjeta
              id={id}
              name={name}
              temperament={temperament}
              weight={weight}
              image={image}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}
