import React, { useState, useEffect} from 'react'
import Pokemon from '../components/pokemon'
import Search from '../components/search'
import { getPokemons } from '../services/pokemonService'
import { filterPokemons, setPokemons } from '../utils/pokemonUtils'

const Page = () => {
  const [pageData, setPageData] = useState({
    isFetched: false,
    error: null,
    pokemons: [],
    displayedPokemons: []
  })

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const { results } = await getPokemons()
      setPageData({
        ...pageData,
        isFetched: true,
        pokemons: setPokemons(results),
        displayedPokemons: filterPokemons('', results)
      })
    } catch (error) {
      setPageData({ ...pageData, error: error.message })
    }
  }

  const handleSearch = event => {
    const searchString = event.nativeEvent.target.value
    setPageData(({ pokemons }) => ({
      ...pageData,
      displayedPokemons: filterPokemons(searchString, pokemons)
    }))
  }
   
    const { displayedPokemons, isFetched, error } = pageData

    const pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="page__search">
          <Search onChange={handleSearch} />
        </div>
        {isFetched ? (
          <ul className="pokemons">{pokemons}</ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}

export default Page
