import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useNavigation } from 'react-router-dom'

function Homelayout() {
  const navigation = useNavigation()
  const fruit = 'orange'
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <section className=" mx-auto container h-screen mt-10 p-10">
        <Outlet context={{ fruit }} />
      </section>
    </div>
  )
}

export default Homelayout
