import React from 'react'
import { Button } from './ui/button'
const Navbar = () => {
  return (
    <div className='flex justify-between  p-4 '>
      <h1 className='text-2xl font-bold '>Tripify</h1>
      <div className='flex gap-5'>
      
      <button className="text-xl font-semibold bg-transparent text-slate-700" >About</button>
      <button className="text-xl bg-transparent text-slate-700 font-semibold " >Contact</button>
      <button className="text-xl bg-transparent text-slate-700 hover:border-solid hover:border-black hover:border-2 rounded-sm p-2 font-semibold " >Tours</button>
     
      <Button>Login</Button>
      
      </div>
      
   
     
    </div>
  )
}

export default Navbar
