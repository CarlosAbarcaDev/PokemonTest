import axios from 'axios';


// Listado de pokemons en el home
export const GetPokemonList = (page) => async dispatch =>{

    try {

        dispatch({
            type: 'POKEMON_LIST_LOADING'
        });

        const perPage = 20;
        const offset = (page * perPage) - perPage; 
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

        dispatch({
            type: 'POKEMON_LIST_SUCCESS',
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: 'POKEMON_LIST_FAIL',
        });
    }

};

// pokemons individuales para mostrar los datos individuales
export const GetPokemon = (pokemon) => async dispatch => {

    try {

        dispatch({
            type: 'POKEMON_MULTIPLE_LOADING'
        });

        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        dispatch({
            type: 'POKEMON_MULTIPLE_SUCCESS',
            payload: res.data,
            pokemonName: pokemon
        });

    } catch (error) {
    //error en caso de no encontrar el pokemon buscado
        dispatch({
            type: 'POKEMON_MULTIPLE_FAIL',
        });
    }
};