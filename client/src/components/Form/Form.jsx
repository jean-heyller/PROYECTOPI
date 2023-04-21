import React from "react";
import { useState } from "react";
import validate from "./validation";
import style from "./Form.module.css";

import axios from "axios";
export default function Form(){

    const [dog, setDog] = useState({ 
        name: '',
        height: '',
        weight:"",
        life_span:"",
        temperament:[]

    });
    const [errors,setErrors] = useState({
        name: '',
        height: '',
        weight:"",
        life_span:"",
        temperament:""
     });
     const sendog = async (dog) =>{
        await axios.post("http://localhost:3001/dogs",dog)
        console.log(dog)
     } 

        function handleInputChange(event) {
        const { name, value } = event.target;
        if (name === "temperament") {
            const selectedTemperaments = Array.from(
            event.target.selectedOptions,
            (option) => option.value
            );
            setDog({ ...dog, temperament: 1 });
        } else {
            setDog({ ...dog, [name]: value });
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        /* const errors = validate(dog);
        setErrors(errors); */
        /* if (Object.keys(errors).length === 0) {
          onSubmit(userData);
        }; */
        sendog(dog)
        console.log(dog)
      };
    return(
        <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>crear formulario</h1>
                <div>
                    <label className={style.name} htmlFor="name">name</label>
                    <input onChange={handleInputChange} value={dog.name} type="text" name="name"></input>
                </div>
                <div>
                    <label className={style.height} htmlFor="height">height</label>
                    <input onChange={handleInputChange} value={dog.height} type="text" name="height"></input>
                </div>
                <div>
                    <label className={style.weight} htmlFor="weight">weight</label>
                    <input onChange={handleInputChange} value={dog.weight} type="text" name="weight"></input>
                </div>
                <div>
                    <label className={style.life_span} htmlFor="life_span">life_span</label>
                    <input onChange={handleInputChange} value={dog.life_span} type="number" name="life_span"></input>
                </div>
                <div>
                <label className={style.temperament} htmlFor="temperament">
                    temperament
                </label>
                <select
                    multiple={true}
                    onChange={handleInputChange}
                    value={dog.temperament} // Agregar el valor de "dog.temperament" para que la selección sea controlada
                    name="temperament" // Agregar el nombre del campo "temperament"
                >
                    <option value="calmado">Calmado</option>
                    <option value="jovial">Jovial</option>
                    <option value="amigable">Amigable</option>
                    <option value="valiente">Valiente</option>
                    <option value="confiado">Confiado</option>
                </select>
                </div>
                <button className ={style.btn}type="submit">ENVIAR</button>    
            </form>
        </div>
    );
};
