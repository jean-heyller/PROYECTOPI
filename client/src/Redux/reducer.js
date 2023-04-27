import { GET_DOGS,FILTER_DOGS_ORIGIN,
    GET_DOG_DETAIL,CLEAN_DETAIL,ORDER_DOGS,FILTER_TEMP,GET_DOG_NAME,CLEAN_FILTERS,GET_TEMPERAMENTS, POST_DOG  } from "./actions";

const initialState = {
    allDogs: [],
    dogsDb: [],
    dogsApi: [],
    dogsFilter:[],
    dogsDetail: {},
    temperaments: []
};

const rootReducer = (state = initialState,action)=>{
    const {allDogs} = state;
    const {dogsFilter,dogsDb} = state
    const {payload} = action;
    switch(action.type) {
            case GET_DOGS:
            return {
                ...state,
                dogsApi: payload.dogsApi,
                dogsDb: payload.dogsDb,
                allDogs: [...payload.dogsApi,...payload.dogsDb],
                dogsFilter:[...payload.dogsApi,...payload.dogsDb]
            };
            case GET_TEMPERAMENTS :
            return {
                ...state,
                temperaments: payload
            }
            case FILTER_DOGS_ORIGIN:
                if (action.payload==="Api"){
                    const dogsByname = allDogs.filter((dogs)=>{
                        return dogs.origin!=="Db"
                    })
                return {
                    ...state,
                    dogsFilter:dogsByname
                };
                };
                if (action.payload==="Db"){   
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
                if(action.payload==="alphabetically") {
                    const copy = [...dogsFilter]
                    const ordenados = copy.sort((a,b)=>{
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
                if(action.payload==="reverse alphabetical") {
                    const copy = [...dogsFilter]
                    const ordenados = copy.sort((a,b)=>{
                        const nombreA = a.name.toLowerCase();
                        const nombreB = b.name.toLowerCase();
                        if (nombreA < nombreB) {
                            return 1;
                        }
                        if (nombreA > nombreB) {
                            return -1;
                        }
                        return 0;
                        });
                return {
                    ...state,
                    dogsFilter:ordenados
                };
                }
                if(action.payload==="desordenado") {
                    const copy = [...dogsFilter]
                    const ordenados = copy.sort((a,b)=>{
                        const nombreA = a.name.toLowerCase();
                        const nombreB = b.name.toLowerCase();
                        if (nombreA < nombreB) {
                            return 1;
                        }
                        if (nombreA > nombreB) {
                            return -1;
                        }
                        return 0;
                        });
                return {
                    ...state,
                    dogsFilter:ordenados
                };
                }
                if(action.payload==="upward") {
                    const copy = [...dogsFilter]
                    const ordenados = copy.sort((a,b)=>{
                        const aWeight = parseInt(a.weight.imperial.split("-")[1]);
                        const bWeight = parseInt(b.weight.imperial.split("-")[1]);
                        return aWeight - bWeight;
                        });
                return {
                    ...state,
                    dogsFilter:ordenados
                };
                }
                if(action.payload==="falling") {
                    const copy = [...dogsFilter]
                    const ordenados = copy.sort((a,b)=>{
                        const aWeight = parseInt(a.weight.imperial.split("-")[1]);
                        const bWeight = parseInt(b.weight.imperial.split("-")[1]);
                        return bWeight - aWeight;
                        });
                return {
                    ...state,
                    dogsFilter:ordenados
                };
                }
            case FILTER_TEMP:
                const  filteredData = allDogs.filter((item) => {
                    if(item.temperament!==undefined) {
                        return item.temperament.includes(payload);
                    }
                    
                });
                if(filteredData.length>0){
                    return {
                        ...state,
                        dogsFilter:filteredData
                    }
                }
                else if(filteredData.length===0){
                    return {
                        ...state,
                        dogsFilter:dogsFilter
                    }
                }
            case GET_DOG_NAME:
                return {
                    ...state,
                    dogsFilter:[payload]
                };
            case  CLEAN_FILTERS:
                return {
                    ...state,
                    dogsFilter: allDogs
                };
            case POST_DOG:
                const copyfilter = [...dogsFilter,payload]
                const copyall = [...allDogs,payload]
                return {
                    ...state,
                    dogsDb:[...dogsDb,payload],
                    dogsFilter: copyfilter,
                    allDogs:copyall
                }           
            default:
                return {...state}    
    };
};

export default rootReducer;