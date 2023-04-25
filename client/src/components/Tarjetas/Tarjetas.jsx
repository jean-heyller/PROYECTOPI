import Tarjeta from "../Tarjeta/Tarjeta";
import PaginacionTabla from "../showPages/pages";
import style from '../Tarjetas/Tarjetas.module.css';
import { useEffect,useState } from "react";
import {array} from "./array";
import { useDispatch, useSelector } from "react-redux";
import { get_dogs_api, order_dogs, filter_dogs_origin,filter_temp,get_dog_name, cleanDetail, clean_filters } from "../../Redux/actions";


export default function Tarjetas() {
  const [name, setName] = useState("");
  const dogs = useSelector((state) => state.dogsFilter);
    const probando = dogs.slice(0,10)
    const handleChange = (event) => {
    setName(event.target.value);
    };

  const onSearch = (name) =>{
    const dogFind = dogs.filter((dog)=> {
      return dog.name===name
    })
    if(dogFind.length===0) {
      window.alert("no hay razas con ese nombre ")
    }
    else if(dogFind.length>=1){
      dispatch(get_dog_name(name))
    } 
  }  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_dogs_api());
    console.log(probando)
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
  const clean = ()=> {
    dispatch(clean_filters())
  }
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
      <select name="filtrar" onChange={ordenar}>
      <option value="alfabeticamente" selected>alfabeticamente</option>
      <option value="desordenado">alreves</option>
      </select>
      <select name="filtrar" onChange={ordenar}>
      <option value="upward" selected>Ascendente</option>
      <option value="falling">Descendente</option>
      </select>
      <select name="filtrar" onChange={filtrat_temp}
      >{array.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
      </select>
      <PaginacionTabla datos={dogs} filasPorPagina={8}></PaginacionTabla>
    </div>
  );
}
