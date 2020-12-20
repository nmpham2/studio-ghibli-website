import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';

import { Route, Switch, HashRouter } from "react-router-dom";

import { VendingPage } from "./app/views/";
import { MoviePage } from "./app/views/";
import { CastleInTheSky } from "./app/views/";
import { SpiritedAway } from "./app/views/";
import { PrincessMononoke } from "./app/views/";
import { Ponyo } from "./app/views/";
import { MyNeighborTotoro } from "./app/views/";
import { HowlsMovingCastle } from "./app/views/";
import { Arrietty } from "./app/views/";
import { KikisDeliveryService } from "./app/views/";

function App() {
    const [movie, setMovie] = useState([]);
    return (
        <div className='app fill-view'>
            <HashRouter basename='/'>
                <Switch>
                    <Route exact path={"/"}>
                        <VendingPage movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/movie-page"}>
                        <MoviePage movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/castle-in-the-sky"}>
                        <CastleInTheSky movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/spirited-away"}>
                        <SpiritedAway movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/princess-mononoke"}>
                        <PrincessMononoke movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/ponyo"}>
                        <Ponyo movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/my-neighbor-totoro"}>
                        <MyNeighborTotoro movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/howls-moving-castle"}>
                        <HowlsMovingCastle movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/arrietty"}>
                        <Arrietty movie={movie} setMovie={setMovie}/>
                    </Route>
                    <Route exact path={"/kikis-delivery-service"}>
                        <KikisDeliveryService movie={movie} setMovie={setMovie}/>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;