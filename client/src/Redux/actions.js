import axios from "axios";

export const GET_DOGS_API = "GET_DOGS_API";
export const GET_DOGS_DB = "GET_DOGS_DB";
export const FILTER_DOGS_ORIGIN = "FILTER_DOGS_ORIGIN";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const ORDER_DOGS = "ORDER_DOGS";
export const FILTER_TEMP = "FILTER_TEMP"



export const get_dogs_api = () =>{
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001/dogs";
        const response = await axios.get(`${URL_BASE}`);
        dispatch({type:GET_DOGS_API, payload:response.data});
    };
};

export const get_dog_detail = (id)=> {
    return async function (dispatch) {
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/dogs/${id}`);
        dispatch ({type : GET_DOG_DETAIL, payload:response.data});
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