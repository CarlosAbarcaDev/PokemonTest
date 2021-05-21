export const setPokeCatch = (pokeData) =>{
    localStorage.setItem('pokemon', JSON.stringify(pokeData))
}

export const getPokeCatch = () =>{
    try {
        const poke = JSON.parse(localStorage.getItem('pokemon'))
        if(poke){
            return poke ? poke : []
        }
        
    } catch (error) {
        
    }

    return []
}

export const catchPokemon = (pokeData, qty = 1 ) => {
    
    const catchPoke = getPokeCatch()

    //if para el pokemon si ya existe
    const pokeIndex = catchPoke.findIndex((alredyCatch) => {
        return alredyCatch.id === pokeData.id
    })

    if (pokeIndex !== -1){
        catchPoke[pokeIndex].qty += qty

        if(catchPoke[pokeIndex].qty === 0){
            catchPoke.splice(pokeIndex, 1)
        }
    }else{
        pokeData.qty = qty

        catchPoke.push(pokeData)
    }

    

    setPokeCatch(catchPoke)

}

