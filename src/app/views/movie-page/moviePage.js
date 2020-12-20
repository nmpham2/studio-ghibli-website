// TEMPLATE FOR MOVIE PAGES

import React, { useState, useEffect } from "react";
// import "./moviePage.css";
import { useHistory } from "react-router-dom";
//import { DisplayCard } from "./app/components";

function MoviePage({movie, setMovie}){
    const history = useHistory();

    useEffect(() => {
        console.log(movie);
    }, [movie]);

    function renderMovie(){
        const movieName = movie.title;
        return(
            <div>
               
            </div>
        )
    }

    function returnToVending(){
        history.push('/');
    }

    return (
        <div className="castle-in-sky">
            {renderMovie()}
            <div className="bottom">
                <button className="return" style={{margin: "10px"}}onClick={returnToVending}>Try Another Drink!</button>
            </div>
        </div>
    );
}

export default MoviePage;