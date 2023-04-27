import { useDispatch ,useSelector} from "react-redux";
import { clean_filters, filter_dogs_origin, filter_temp, order_dogs,get_dog_name } from "../../Redux/actions";

export const useFilters = () => {
  const dogs = useSelector((state) => state.dogsFilter);
  const dispatch = useDispatch();

    const filtrar = (e) => {
        const { value } = e.target;
        dispatch(filter_dogs_origin(value));
    };

    const order = (e)=>{
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

    const onSearch = (name) =>{
        const dogFind = dogs.filter((dog)=> {
        return dog.name.toLowerCase()===name.toLowerCase()
        })
        if(dogFind.length===0) {
        window.alert("no hay razas con ese nombre ")
        }
        else if(dogFind.length>=1){
        dispatch(get_dog_name(name))
        } 
    }  

    return { filtrar, order, filtrat_temp, clean,onSearch };
};
