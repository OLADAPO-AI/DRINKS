import axios from 'axios'
import { useLoaderData, Link } from 'react-router-dom'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  return { id, data }
}

function Cocktail() {
  const { id, data } = useLoaderData()
  const singleDrink = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])
  console.log(validIngredients)

  return (
    <div className="flex flex-col justify-center align-middle">
      <header className=" text-center mb-14">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          back home
        </Link>
      </header>
      <section className=" flex lg:flex-row flex-col w-auto h-auto justify-center gap-6 align-middle ">
        <div className=" lg:w-3/6 lg:mr-16">
          <img src={image} alt="drink-img" className=" rounded-2xl" />
        </div>
        <div className=" lg:w-3/6 flex flex-col justify-center align-middle gap-6">
          <p
            className=" text-center flex flex-row gap-3 
          "
          >
            <span className="bg-blue-500 text-white text-xs font-normal py-1 px-2 rounded  ">
              name :
            </span>
            {name}
          </p>
          <p className=" text-center flex flex-row gap-3">
            <span className="bg-blue-500 text-white font-normal text-xs py-1 px-2 rounded ">
              category :
            </span>
            {category}
          </p>
          <p className=" text-center flex flex-row gap-3">
            <span className="bg-blue-500 text-white font-normal text-xs py-1 px-2 rounded ">
              info :
            </span>
            {info}
          </p>
          <p className=" text-center flex flex-row gap-3">
            <span className="bg-blue-500 text-white text-xs font-normal py-1 px-2 rounded ">
              glass :
            </span>
            {glass}
          </p>

          <p>
            <span className="bg-blue-500 text-white text-xs font-normal py-1 px-2 rounded mr-3">
              ingredients :
            </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="" key={item}>
                  {item} {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </p>

          <p className=" ">
            <span className="bg-blue-500 text-white text-xs font-normal py-1 px-2 rounded mr-3">
              instructions :
            </span>
            {instructions}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Cocktail
