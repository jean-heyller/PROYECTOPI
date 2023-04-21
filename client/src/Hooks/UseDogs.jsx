import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail,get_dog_detail } from "../Redux/actions";


const useDog = () => {
    const dispatch = useDispatch();
    const character = useSelector((state) => state.dogDetail);
    const {detailId} = useParams()
    useEffect(()=>{
        dispatch(get_dog_detail(detailId));

        return ()=>{
            dispatch(cleanDetail)
        }
    },[detailId]);
    console.log(character)
    return character;
};

export default useDog;