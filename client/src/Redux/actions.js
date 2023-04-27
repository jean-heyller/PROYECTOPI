import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const FILTER_DOGS_ORIGIN = "FILTER_DOGS_ORIGIN";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const ORDER_DOGS = "ORDER_DOGS";
export const FILTER_TEMP = "FILTER_TEMP";
export const GET_DOG_NAME = "GET_DOG_NAME";
export const POST_DOG = "POST_DOG";
export const CLEAN_FILTERS = "CLEAN_FILTERS"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";



export const get_dogs = () =>{
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001/dogs";
        const response = await axios.get(`${URL_BASE}`);
        dispatch({type:GET_DOGS, payload:response.data});
    };
};

export const get_dog_detail = (id)=> {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/dogs/${id}`);
        dispatch ({type : GET_DOG_DETAIL, payload:response.data});
    };
};

export const get_dog_name = (name)=>{
    return async function (dispatch){
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/dogs/name?name=${name}`);
        dispatch({type:GET_DOG_NAME, payload:response.data})
    }
};
export const get_temperaments = ()=>{
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response  = await axios.get(`${URL_BASE}/dogs/temperament`)
        dispatch({type:GET_TEMPERAMENTS, payload:response.data})
    }
}

export const post_dog = (dog) =>{
    return async function (dispatch){
        const URL_BASE = "http://localhost:3001";
        const response = await axios.post(`${URL_BASE}/dogs`,dog)
        dispatch({type:POST_DOG, payload:response.data})
    };
};


export const cleanDetail = ()=> {
    return {type:CLEAN_DETAIL};
};

export const filter_dogs_origin = (action) =>{
    return {type:FILTER_DOGS_ORIGIN,payload:action};
}
export const order_dogs = (action) => {
    return {type:ORDER_DOGS, payload:action};
};

export const filter_temp = (action) =>{
    return {type:FILTER_TEMP,payload:action}
}

export const clean_filters = () =>{
    return {type:CLEAN_FILTERS}
}