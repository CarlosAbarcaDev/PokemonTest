import React from 'react';
import {NavLink} from 'react-router-dom'



const Navbar = () => {
    return ( 
        <nav className='bg-blue-900 py-8 flex justify-between '>
          <div className='w-1/2 mx-10'>
      <h1 className='text-yellow-400 text-2xl'>PokeTest</h1>
          </div>
          <div className='w-1/2 flex flew-row justify-end'>

        <NavLink
          className='text-2xl text-gray-300 pr-8' 
          to={"/"}>Home</NavLink>
        <NavLink
          className='text-2xl text-gray-300 pr-8' 
          to={"/PokeTeam"}>PokeTeam</NavLink>
          </div>
      </nav>
     );
}
 
export default Navbar;