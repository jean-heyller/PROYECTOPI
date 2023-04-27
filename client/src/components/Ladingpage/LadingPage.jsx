import style from "./ladingdPage.module.css"
import { Link } from 'react-router-dom';
import React from 'react';
import ReactPlayer from 'react-player';

export default function ladingPage (){
    return(
        <div>
            <h1 className={style.titule}>the dog</h1>
            <Link to="/home">
                <button className={style.button}>ir ahome</button>
            </Link>
            <div className={style.video}>
            </div> 
        </div>
    )
}