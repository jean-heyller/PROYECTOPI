import style from "./ladingdPage.module.css"
import { Link } from 'react-router-dom';

export default function ladingPage (){
    return(
        <div>
            <h1>hola que fdas pues </h1>
            <Link to="/home">
                <button>ir ahome</button>
            </Link>
        </div>
    )
}