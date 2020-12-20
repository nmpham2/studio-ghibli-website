import React, { useState, useEffect } from "react";
import "./princessMononoke.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import moviePoster from './mononoke.jpg';

function PrincessMononoke({movie, setMovie}){
    const history = useHistory();

    useEffect(() => {
        console.log(movie);
    }, [movie]);

    function renderMovie(){
        const movieName = movie.title;
        return(
            <div>
               <h1 className="title-princess">{ movieName }</h1>
            </div>
        )
    }
    function DisplayDescription() {
        const movieDescription = movie.description;
        return (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 1],
            }}
            transition={{
                duration: 0.2,
                delay: 1 * 0.1
            }}
            className="display-card">
            <h2 className="description">
                { movieDescription }
            </h2>
            </motion.div>
        );
    }

    function DisplayPoster(){
        return (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 1],
            }}
            transition={{
                duration: 0.2,
                delay: 1 * 0.1
            }}
            className="display-card">
            <img src={moviePoster} alt="Movie Poster" className="mononoke-poster"/>
            </motion.div>
        );
    }

    function DisplayInformation() {
        const movieDirector = movie.director;
        const movieProducer = movie.producer;
        const movieDate = movie.release_date;
        const movieScore = movie.rt_score;
        return (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 1],
            }}
            transition={{
                duration: 0.2,
                delay: 1 * 0.1
            }}
            className="display-card">
            <h3 className="director">
                Director: { movieDirector }
            </h3>
            <h3 className="producer">
                Producer: { movieProducer }
            </h3>
            <h3 className="release_date">
                Release Date: { movieDate }
            </h3>
            <h3 className="rt_score">
                Rotten Tomato Score: { movieScore }
            </h3>
            </motion.div>
        );
    }

    function returnToVending(){
        history.push('/');
    }

    return (
        <div className="princess-mononoke">
            {renderMovie()}
            <div className="information">
                {DisplayDescription()}
                {DisplayPoster()}
                {DisplayInformation()}
            </div>
            <div className="bottom">
                <button className="return" style={{margin: "10px"}}onClick={returnToVending}>Try Another Drink!</button>
            </div>
        </div>
    );
}

export default PrincessMononoke;