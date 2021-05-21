import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';
import PokeTeam from './containers/PokeTeam'
import Navbar from './containers/Navbar';


function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Switch>
        <Route exact path={"/"} component={PokemonList} />
        <Route exact path={"/pokemon/:pokemon"} component={Pokemon} />
        <Route exact path={"/PokeTeam"} component={PokeTeam} />
        <Redirect to={"/"} />
      </Switch>

    </div>
      
  );
}

export default App;
