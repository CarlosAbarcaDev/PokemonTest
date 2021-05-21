import React, {useState, useCallback} from 'react';
import {getPokeCatch, catchPokemon} from './Catch'

export default () => {

    const pokemons = getPokeCatch()

    //state para eliminar un pokemon de la lista
    const [, upDateState] = useState();
    const releasePokemon = useCallback(() => upDateState({}, []))
    

    return(
        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}>
            {pokemons.map(poke => (
                
                <div className={'sm:flex sm:items-center py-auto px-20'} key={poke.id}>
                    <div className={"bg-blue-800 rounded shadow-md my-10 mx-10 px-10 py-10"}>


                    <h1 className={'text-4xl text-yellow-300'}>ID: <span className={'text-4xl text-gray-300'}>{poke.order}</span></h1>
                    <h1 className={'text-4xl text-yellow-300'}>Name: <span className={'text-4xl text-gray-300'}>{poke.name}</span></h1>
                    <div className={'flex flex-wrap  justify-'}>
                    <img src={poke.sprites.front_default} alt="front"/>
                    <img src={poke.sprites.back_default} alt="front"/>
                    </div>
                    <p className={'text-4xl text-yellow-300'}>Height: <span className={'text-4xl text-gray-300'}>{poke.height} inch</span> </p>
                    
                    <p className={'text-4xl text-yellow-300'}>Weight: <span className={'text-4xl text-gray-300'}>{poke.weight} .kg</span> </p>
                    
                    <div>
                    <button 
                        type="button" 
                        className={'text-white hover:text-blue-800 text-2xl hover:bg-yellow-300 border border-yellow-300 text-xs font-semibold rounded-full mt-5 px-4 py-1 mx-8 leading-normal'}
                        onClick={() => {
                            catchPokemon(poke, -1)
                            releasePokemon()
                        }}>Release</button>
                    </div>
                    

                    
                    </div>
                    
                </div>
            ))}
        </div>
    )

    
}