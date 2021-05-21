import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {catchPokemon} from './Catch';
import { useDispatch, useSelector } from 'react-redux';
import {GetPokemon} from '../actions/pokemonAction'
import _ from 'lodash';


const Pokemon = (props) => {
    
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon);


 

    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, []);

    


    const ShowData = () => {
        if(!_.isEmpty(pokemonState.data[pokemonName])) {
            
            const pokeData = pokemonState.data[pokemonName];
            return (
                <div className={'mx-20 shadow-lg rounded-lg overflow-hidden bg-blue-900'}>
                <div className={'my-5 py-5 flex flex-wrap justify-around'}>
                    
                    <div>
                        
                        <h1 className={'text-6xl text-yellow-300'}>Sprites</h1>
                        
                            <img src={pokeData.sprites.front_default} alt="front"/>
                            <img src={pokeData.sprites.back_default} alt="back"/>
                            <img src={pokeData.sprites.front_shiny} alt="back"/>
                            <img src={pokeData.sprites.back_shiny} alt="back"/>
                        
                    </div>

                    <div>
                        <h1 className={'text-6xl text-yellow-300'}>Stats</h1>
                        {pokeData.stats.map(el => {
                            return <p className={'text-4xl text-gray-300'} key={el.id}> {el.stat.name} - {el.base_stat}</p>
                        })}
                    </div>

                    <div>
                        <h1 className={'text-6xl text-yellow-300'}>Abilities</h1>
                        {pokeData.abilities.map(el => {
                            return <p className={'text-4xl text-gray-300'} key={el.id}> {el.ability.name}</p>
                        })}
                    </div>
                    <div className={'my-5'}>
                    <Link
                        to={'/PokeTeam'}
                        type='button'
                        className={'text-white hover:text-blue-800 text-2xl hover:bg-yellow-300 border border-yellow-300 text-xs font-semibold rounded-full px-4 py-1 mx-8 leading-normal'}
                        onClick={() => catchPokemon(pokeData)}
                    >Catch 'Em All</Link>
                    </div>
                </div>
                </div>
            )
        }
        
        if (pokemonState.loading){
            return <p className={'text-6xl'}>Loading...</p>
        }

        if (pokemonState.errorMsg !== '') {
            return <p className={'text-6xl'}>{pokemonState.errorMsg}</p>
        }

        return <p className={'text-6xl'}> unexpected error try again!!!</p>
    }
    
    return ( 
        <div className={'my-8'}>
            <h1 className={'text-center font-extrabold text-yellow-400 text-6xl'}>{pokemonName}</h1>
            {ShowData()}
        </div>
     );
}
 
export default Pokemon;