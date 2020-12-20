import React, { useState, useEffect } from "react";
import "./vendingPage.css";
import { useHistory } from "react-router-dom";
import vendingMachine from './vending-machine.png';
import castle from './1x/castle-in-sky.png';
import spiritedaway from './1x/spirited-away.png';
import princessmononoke from './1x/mononoke.png';
import arriettyPic from './1x/arrietty.png';
import howls from './1x/howls.png';
import kikis from './1x/kikis.png';
import ponYo from './1x/ponyo.png';
import totoro from './1x/totoro.png';

function VendingPage({movie, setMovie}){
    const history = useHistory();

    useEffect(() => {
        console.log(movie);
    }, [movie]);

    function castleInSky(){
        const api_url = 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe'
        async function getCastle(){
            const response = await fetch(api_url);
            const data = await response.json();
            setMovie(data);
            console.log(data);
            history.push('/castle-in-the-sky');
        }
        getCastle();
    }

    function spiritedAway(){
        const api_url = 'https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c'
        async function getSpirited(){
            const response = await fetch(api_url);
            const data = await response.json();
            setMovie(data);
            console.log(data);
            history.push('/spirited-away');
        }
        getSpirited();
    }

    function myNeighborTotoro(){
        const api_url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
        async function getTotoro(){
            const response = await fetch(api_url);
            const data = await response.json();
            setMovie(data);
            console.log(data);
            history.push('/my-neighbor-totoro');
        }
        getTotoro();
    }

    function ponyo(){
        const api_url = 'https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786'
        async function getPonyo(){
            const response = await fetch(api_url);
            const data = await response.json();
            setMovie(data);
            console.log(data);
            history.push('/ponyo');
        }
        getPonyo();
    }

    function princessMononoke(){
        const api_url = 'https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6'
        async function getMononoke(){
            const response = await fetch(api_url);
            const data = await response.json();
            setMovie(data);
            console.log(data);
            history.push('/princess-mononoke');
        }
        getMononoke();
    }

    function arrietty(){
        const api_url = 'https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6'
        async function getArrietty(){
            const response = await fetch(api_url);
            const data = await response.json();
            setMovie(data);
            console.log(data);
            history.push('/arrietty');
        }
        getArrietty();
    }

    function howlsMovingCastle(){
        const api_url = 'https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa'
        async function getHowl(){
            const response = await fetch(api_url);
            const data = await response.json();
            setMovie(data);
            console.log(data);
            history.push('/howls-moving-castle');
        }
        getHowl();
    }

    function kikisDeliveryService(){
        const api_url = 'https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e'
        async function getKiki(){
            const response = await fetch(api_url);
            const data = await response.json();
            setMovie(data);
            console.log(data);
            history.push('/kikis-delivery-service');
        }
        getKiki();
    }

    return (
        <div className="vending-page">
            <div className="animated-text">
            <h1>// find your next ghibli obsession</h1>
            </div>
            <div class="vending-machine">
                <img src={vendingMachine} alt="Vending Machine"/>
                <h2 className="machine-name">株式会社スタジオジブリ</h2>
                <img src={castle} alt="Castle In the Sky" className="castle-pic"/>
                <img src={spiritedaway} alt="Spirited Away" className="spirited-pic"/>
                <img src={princessmononoke} alt="Princess Mononoke" className="princess-pic"/>
                <img src={arriettyPic} alt="Arrietty" className="arrietty-pic"/>
                <img src={howls} alt="Howls' Moving Castle" className="howls-pic"/>
                <img src={kikis} alt="Kiki's Delivery Service" className="kikis-pic"/>
                <img src={ponYo} alt="Ponyo" className="ponyo-pic"/>
                <img src={totoro} alt="My Neighbor Totoro" className="totoro-pic"/>

                <button class="btn1" onClick={castleInSky}>  </button>
                <button class="btn2" onClick={spiritedAway}>  </button>
                <button class="btn3" onClick={myNeighborTotoro}>  </button>
                <button class="btn4" onClick={ponyo}>  </button>
                <button class="btn5" onClick={princessMononoke}>  </button>
                <button class="btn6" onClick={arrietty}>  </button>
                <button class="btn7" onClick={howlsMovingCastle}>  </button>
                <button class="btn8" onClick={kikisDeliveryService}>  </button>
            </div>
        </div>
    );
}

export default VendingPage;