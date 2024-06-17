import React from 'react'
import CocktailCard from './CocktailCard'

function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <div className=" flex flex-col text-center gap-7">
        <h3 className=" text-5xl">OOPSS!!!!!!</h3>
      </div>
    )
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 ">
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </section>
  )
}

export default CocktailList
