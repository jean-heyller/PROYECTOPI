import { GET_DOGS_API,FILTER_DOGS_ORIGIN,
    GET_DOG_DETAIL,CLEAN_DETAIL,ORDER_DOGS,FILTER_TEMP} from "./actions";

const initialState = {
    dogsApi: [],
    dogsFilter:[],
    dogsDetail: {}
};

const rootReducer = (state = initialState,action)=>{
    const {dogsApi} = state;
    const {payload} = action;
    switch(action.type) {
        case GET_DOGS_API:
            return {
                ...state,
                dogsFilter:action.payload,
                dogsApi: action.payload
            };
            case FILTER_DOGS_ORIGIN:
                if (action.payload==="Api"){
                    const dogsByname = dogsApi.filter((dogs)=>{
                        return dogs.origin!=="Db"
                    })
                return {
                    ...state,
                    dogsFilter:dogsByname
                };
                };
                if (action.payload==="Db"){
                    const dogsDb = dogsApi.filter((dogs)=>{
                        return dogs.origin==="Db"
                    })    
                return {
                    ...state,
                    dogsFilter:dogsDb
                };
                }; 
            case GET_DOG_DETAIL:
                return {
                    ...state,
                    dogDetail:action.payload
                };
            case CLEAN_DETAIL:
                return {
                    ...state,
                    dogsDetail: {}
                }
            case ORDER_DOGS:
                if(action.payload==="alfabeticamente") {
                    const ordenados = state.dogsFilter.sort((a,b)=>{
                        const nombreA = a.name.toLowerCase();
                        const nombreB = b.name.toLowerCase();
                        if (nombreA < nombreB) {
                            return -1;
                        }
                        if (nombreA > nombreB) {
                            return 1;
                        }
                        return 0;
                        });
                return {
                    ...state,
                    dogsFilter:ordenados
                };
                }
            case FILTER_TEMP:
                const  filteredData = dogsApi.filter((item) => {
                    return item.temperament.includes(payload);
                  });
                return {
                    ...state,
                    dogsFilter:filteredData
                }     
            default:
                return {...state}    
    };
};

export default rootReducer;