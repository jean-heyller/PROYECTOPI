import React from "react";
import { useState,useEffect } from "react";
import validation from "./validation";
import style from "./Form.module.css";

import { useSelector, useDispatch} from "react-redux";

import { get_temperaments,post_dog,get_dogs_api } from "../../Redux/actions";


export default function Form(){
    
    const temperaments = useSelector((state) => state.temperaments);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(temperaments.length===0){
            dispatch(get_temperaments())
        }
    },[])

    
    const [dog, setDog] = useState({ 
        name: '',
        height_max: '',
        height_min: '',
        weight_max:"",
        weight_min:"",
        life_span:"",
        image: "",
        temperament:[]
        
    });
    const [errors,setErrors] = useState({
        name: '',
        height_max: '',
        height_min: '',
        weight_max:"",
        weight_min:"",
        life_span:"",
        image:"",
        temperament:""
    });
    const errors1 = validation(dog)
    useEffect(()=>{
        setErrors(errors1)
    },[dog])
    const sendog = (dog) =>{
        dispatch(post_dog(dog))
    }

    function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === "temperament") {
        const selectedTemperaments = Array.from(
        event.target.selectedOptions,
        (option) => option.value
        );
        setDog({ ...dog, temperament: selectedTemperaments });
    } else {
        setDog({ ...dog, [name]: value });
    };
    };
    function handleSubmit(event) {
        event.preventDefault();
        if(Object.keys(errors).length === 0){
            sendog(dog)
            window.alert("bredd add ")
        }
    };
    return(
        <div className={style.div}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Create  breed</h1>
                <div>
                    <label className={style.label} htmlFor="name">name</label>
                    <input  className={style.input}onChange={handleInputChange} value={dog.name} type="text" name="name"></input>
                    {errors.name? <span className={style.errors}>{errors.name}</span>:null}
                </div>
                <div>
                    <label className={style.label} htmlFor="height_max">height_max</label>
                    <input className={style.input} onChange={handleInputChange} value={dog.height_max} type="number" name="height_max"></input>
                    {errors.height_max? <span className={style.errors}>{errors.height_max}</span>:null}
                </div>
                <div>
                    <label className={style.label} htmlFor="height_min">height_min</label>
                    <input className={style.input}onChange={handleInputChange} value={dog.height_min} type="number" name="height_min"></input>
                    {errors.height_min? <span className={style.errors}>{errors.height_min}</span>:null}
                </div>
                <div>
                    <label className={style.label} htmlFor="weight_max">weight_max</label>
                    <input className={style.input}onChange={handleInputChange} value={dog.weight_max} type="number" name="weight_max"></input>
                    {errors.weight_max? <span className={style.errors}>{errors.weight_max}</span>:null}
                </div>
                <div>
                    <label className={style.label} htmlFor="weight_min">weight_min</label>
                    <input className={style.input} onChange={handleInputChange} value={dog.weight_min} type="number" name="weight_min"></input>
                    {errors.weight_min? <span className={style.errors}>{errors.weight_min}</span>:null}
                </div>
                <div>
                    <label className={style.label} htmlFor="life_span">life_span</label>
                    <input  className={style.input}onChange={handleInputChange} value={dog.life_span} type="text" name="life_span"></input>
                    {errors.life_span? <span className={style.errors}>{errors.life_span}</span>:null}
                </div>
                <div>
                    <label className={style.label} htmlFor="image">image</label>
                    <input  className={style.input}onChange={handleInputChange} value={dog.image} type="text" name="image"></input>
                    {errors.image? <span className={style.errors}>{errors.image}</span>:null}
                </div>
                <div>
                <label className={style.temperament} htmlFor="temperament">
                    temperament
                </label>
                </div>
                <button className ={style.btn}type="submit">ENVIAR</button>
                {errors.temperament? <span className={style.errors}>{errors.temperament}fsf</span>:null}
                <div>
                <select
                className={style.temperaments}
                    multiple
                    onChange={handleInputChange}
                    value={dog.temperament} // Agregar el valor de "dog.temperament" para que la selección sea controlada
                    name="temperament" // Agregar el nombre del campo "temperament"
                > {temperaments.map(option => (
                    <option key={option.name} value={option.name}>
                        {option.name}
                    </option>
                ))}
                </select>
                </div>    
            </form>
        </div>
    );
};
