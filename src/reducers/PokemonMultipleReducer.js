//state default
const DefaultState = {
    
    loading: false,
    data: {},
    errorMsg: ''

};

const PokemonMultipleReducer = (state = DefaultState, action) => {
    switch (action.type) {
        //case para cuando esta cargando
        case 'POKEMON_MULTIPLE_LOADING':
            return {
                ...state,
                loading: true,
                errorMsg: ''
            };
        //case para cuando el pokemon buscado no exista o no se encuentre
        case 'POKEMON_MULTIPLE_FAIL':
            return {
                ...state,
                loading: false,
                errorMsg: 'No Pokemon found...'
            };
        // case para cuando el pokemon se encuentre 
        case 'POKEMON_MULTIPLE_SUCCESS':
            return {
                ...state,
                loading: false,
                errorMsg: '',
                data: {
                    ...state.data,
                    [action.pokemonName] : action.payload
                }
            };
        
        default:
            return state
    }
}
 
export default PokemonMultipleReducer;