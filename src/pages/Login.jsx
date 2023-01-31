import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [isSignin , setSignin] = useState(true);
  console.log(isSignin);

  return (
    <div className=' bg-[#F1F5F4] px-12 py-16 h-[100vh]'>

      <div className= {`rounded-[20px] flex bg-white justify-center items-center relative transition duration-1000  ${ (isSignin) ? "flex-row" : "flex-row-reverse"} `}>

        {
          (isSignin) ?
          
          <div className=' left-sidebar basis-1/3 bg-gradient-to-l from-[#37AFA1] to-[#39B68C] px-4 py-32 h-full flex flex-col 
          text-white items-center gap-8 rounded-l-lg  '>
           <div className=' text-4xl font-semibold '>Welcome Back !</div>
           <div className='flex flex-col'>
             <span>To keep connected with us please</span>
             <span>login with your personal info</span>
           </div>
           <button className=' w-48 py-2 border-[1.5px] rounded-full uppercase ' onClick={()=>setSignin(false) } >Sign In</button>
         </div>

          : 

          <div className=' right-sidebar basis-1/3 bg-gradient-to-l from-[#37AFA1] to-[#39B68C] px-4 py-32 h-full flex flex-col 
          text-white items-center gap-8 rounded-l-lg ' >
            <div className=' text-4xl font-semibold '>Hello, Friend!</div>
            <div className='flex flex-col'>
              <span>Enter your personal details</span>
              <span>and start your journy with us</span>
            </div>
            <button className=' w-48 py-2 border-[1.5px] rounded-full uppercase ' onClick={()=>setSignin(true) } >Sign Up</button>
          </div>
        }


        {
          (isSignin) ?
          
          <div className='right-mainArea p-2 basis-2/3 flex flex-col items-center gap-8 '>
          <h2 className='text-4xl font-semibold text-[#37AFA1] '>Create Account</h2>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button className=' w-48 py-2 rounded-full uppercase 
           text-white bg-[#37AFA1] '  >Sign Up</button>
        </div>
          
          :

          <div className=' left-mainArea p-2 basis-2/3 flex flex-col items-center gap-8 '>
            <h2 className='text-4xl font-semibold text-[#37AFA1] '>Sign in to Diprella</h2>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button className=' w-48 py-2 rounded-full uppercase 
           text-white bg-[#37AFA1] '  >Sign In</button>
         </div>

        }


      </div>
    </div>
  )
}

export default Login