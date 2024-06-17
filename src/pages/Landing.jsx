import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async ({ request }) => {
  const url = new URL(request.url)

  const searchDrink = url.searchParams.get('search') || ''
  const response = await axios.get(`${cocktailUrl}${searchDrink}`)
  return { drinks: response.data.drinks, searchDrink }
}

function Landing() {
  const { searchDrink, drinks } = useLoaderData()

  return (
    <>
      <SearchForm searchDrink={searchDrink} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
