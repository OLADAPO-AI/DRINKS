import React from 'react'
import { Form, useNavigation } from 'react-router-dom'

const SearchForm = ({ seaechDrink }) => {
  return (
    <div className=" ">
      <Form className=" relative text-gray-600 w-full flex flex-row justify-center align-middle">
        <input
          type="search"
          name="search"
          placeholder="Search"
          defaultValue={seaechDrink}
          className="bg-white h-10 px-10  rounded-full text-sm focus:outline-none w-full md:w-3/6"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 md:right-60 sm:right-16 mt-3 mr-4"
        >
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="heroicon-ui"
              d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 13 6.5 6.5 0 0 0 13 19.5c3.54 0 6.43-2.72 6.5-6h-2a4.5 4.5 0 1 1-8.992-.117L5.293 9.293A1 1 0 1 1 6.707 7.88l2.549 2.548A4.5 4.5 0 0 1 13 11.5h2a6.5 6.5 0 0 0 0-13z"
            />
          </svg>
        </button>
      </Form>
    </div>
  )
}

export default SearchForm
