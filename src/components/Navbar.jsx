import React from 'react'
import { NavLink, useOutletContext } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <NavLink to={'./about'}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={'./newsletter'}>Newsletter</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
