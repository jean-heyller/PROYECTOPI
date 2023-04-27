import { useFilters } from "./functions";
import Pagination from "../showPages/pages";
import style from './Cards.module.css';
import { useEffect,useState } from "react";
import {array} from "./array";
import { useDispatch, useSelector } from "react-redux";
import { get_dogs,} from "../../Redux/actions";


export default function Cards() {
  const { filtrar, order, filtrat_temp, clean ,onSearch } = useFilters();

  const [name, setName] = useState("");

  const dogs = useSelector((state) => state.dogsFilter);

  const handleChange = (event) => {
  setName(event.target.value);
  };
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(dogs.length===0){
      dispatch(get_dogs());
      console.log("se hizo dispath")
    }
  },[]);

  return (
    <div className={style.selects}>
      <input
      type="search"
      className={style.searchInput}
      onChange={handleChange}
      />
      <button className={style.clean} onClick={() => clean()}>Limpiar todos los filtros</button>
      <button className={style.searchButton} onClick={() => onSearch(name)}> Buscar
      </button>
      <select className={style.select}   name="filtrar" onChange={filtrar}>
      <option className={style.option}  value="Api">Api</option>
      <option value="Db">Database</option>
      </select>
      <select name="order" onChange={order}>
      <option value="alphabetically" selected>alphabetically</option>
      <option value="reverse alphabetical">reverse alphabetical</option>
      </select>
      <select name="filtrar" onChange={order}>
      <option value="upward" selected>upward</option>
      <option value="falling">falling</option>
      </select>
      <select name="filtrat_temp" onChange={filtrat_temp}
      >{array.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
      </select>
      <Pagination datos={dogs} filasPorPagina={8}></Pagination>
    </div>
  );
};
