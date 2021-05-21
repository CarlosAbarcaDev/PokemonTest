import React from 'react';
import {NavLink} from 'react-router-dom'



const Navbar = () => {
    return ( 
        <nav className='bg-blue-900 py-10 flex justify-center '>
        <NavLink
          className={'text-4xl text-gray-300 pr-8'} 
          to={"/"}>Home</NavLink>
        <NavLink
          className={'text-4xl text-gray-300 pr-8'} 
          to={"/PokeTeam"}>PokeTeam</NavLink>
      </nav>
     );
}
 
export default Navbar;