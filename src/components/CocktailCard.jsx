import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function CocktailCard({ image, name, id, info, glass }) {
  return (
    <article className=" bg-white rounded-xl overflow-hidden shadow-lg m-8 h-auto">
      <div className="">
        <img
          className=" h-30 w-full object-cover "
          src={image}
          alt="Card image"
        />
        <div className="p-8 flex flex-col justify-between">
          <div>
            <header>
              <h1 className="text-xl font-semibold">{name}</h1>
            </header>
            <div className="mt-2">
              <h2 className="text-lg font-medium leading-tight text-black hover:underline">
                {glass}
              </h2>
              <p className="mt-2 text-gray-500">{info}</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to={`/cocktail/${id}`}>details</Link>
            </button>
          </div>
        </div>
      </div>
    </article>

    // <article className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg md:max-w-xl lg:max-w-full md:mx-0 lg:mx-auto md:mb-8 lg:mb-0 md:mr-4 lg:mr-2 mb-4 w-full">
    //   <div className="md:flex">
    //     <img
    //       className="h-48 w-full object-cover md:h-full md:w-48"
    //       src={image}
    //       alt="Card image"
    //     />
    //     <div className="p-8">
    //       <header>
    //         <h1 className="text-xl font-semibold">{name}</h1>
    //       </header>
    //       <div className="mt-2">
    //         <h2 className="text-lg font-medium leading-tight text-black hover:underline">
    //           {glass}
    //         </h2>
    //         <p className="mt-2 text-gray-500">{info}</p>
    //       </div>
    //     </div>
    //     <div className=" mx-auto pl-8 mb-3 ">
    //       <Link
    //         to={`/cocktail/${id}`}
    //         className=" h-3 w-6 p-2 rounded-lg shadow-lg border text-zinc-950 border-teal-800 bg-blue-900 "
    //       >
    //         details
    //       </Link>
    //     </div>
    //   </div>
    // </article>
  )
}

export default CocktailCard
