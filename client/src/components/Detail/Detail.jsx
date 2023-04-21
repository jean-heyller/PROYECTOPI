import useDog from "../../Hooks/UseDogs";



const Detail = () =>{
   
    const dog = useDog();
 
    return(
        <div>
            {dog ? (
            <>
            <h2>{dog.name}</h2>
            <p>{dog.bred_for}</p>
            <p>{dog.breed_group}</p>
            <p>{dog.temperament}</p>
            <p>{dog.origin}</p>
            </>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );  
};
export default Detail;