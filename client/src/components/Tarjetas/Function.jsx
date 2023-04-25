import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get_dog_name } from "../../Redux/actions";


 const onSearch = (name) =>{
     const dispatch = useDispatch();
     const dogs = useSelector((state) => state.dogsFilter);
    
     const dogFind = dogs.filter((dog)=> {
      return dog.name===name
    })
    if(dogFind.length===0) {
      window.alert("no hay razas con ese nombre ")
    }
      dispatch(get_dog_name(name))
  } 
 
