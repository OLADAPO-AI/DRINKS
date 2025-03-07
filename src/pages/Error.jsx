import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  if (error.status === 400) {
    return (
      <div className=" container mx-auto flex  justify-center align-middle h-screen mt-36">
        <section className=" flex flex-col text-center gap-7">
          <h3 className=" text-5xl">OOPSS!!!!!!</h3>
          <p className=" text-2xl">
            We can't seems to fing the page you are looking for
          </p>
          <Link to="/" className=" text-emerald-700 underline">
            Back home
          </Link>
        </section>
      </div>
    )
  }
  return (
    <div className=" container mx-auto flex  justify-center align-middle h-screen mt-36">
      <section className=" flex flex-col text-center gap-7">
        <h3 className=" text-5xl">OOPSS!!!!!!</h3>
        <p className=" text-2xl">Something went wrong</p>
        <Link to="/" className=" text-emerald-700 underline">
          Back home
        </Link>
      </section>
    </div>
  )
}

export default Error
