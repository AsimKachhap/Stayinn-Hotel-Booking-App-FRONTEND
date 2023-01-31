import React from 'react'
import FormPage1 from './formPage1';
import FormPage2 from './formPage2';
import FormPage3 from './formPage3';
import { useState } from 'react'

const AddingRoomForm = () => {

    const [step, setStep] = useState(1);

    function formSelector(){
      if (step === 1){
        return <FormPage1 />
     } else if (step === 2){
       return <FormPage2 />
     }else if (step === 3){
      return <FormPage3 />
     }
    }

  return (
    <>
    <h2 className='text-4xl'>You can add or remove room from here.</h2>
    <h3 className='text-2xl mt-4'>Step {step}</h3>

    <div>
      <div className='flex flex-row justify-center items-center'>
        <div className={`w-[40px] h-[40px] flex items-center justify-center rounded-full  bg-teal-500 text-white`}>1</div>
        <div className={`w-[150px] h-[5px] ${(step>=2)? 'bg-blue-500' : 'bg-gray-500'}`}></div>
        <div className={`w-[40px] h-[40px] flex items-center justify-center rounded-full  ${(step >=2)?
           'bg-teal-500 text-white': 'border-2 border-teal-500'}`}>2</div>
        <div className={`w-[150px] h-[5px] ${(step>=3)? 'bg-blue-500' : 'bg-gray-500'}`}></div>
        <div className={`w-[40px] h-[40px] flex items-center justify-center rounded-full  ${(step >=3)?
           'bg-teal-500 text-white': 'border-2 border-teal-500'}`}>3</div>
      </div>
    </div>


  <div className='flex justify-center p-2'>{formSelector()}</div>

   

    <div className='flex flex-row gap-16 px-8 justify-center' >
        {
          (step >1) ?  <button onClick={()=>setStep(prevStep=>(--prevStep))} className='text-teal-500 py-2 px-4 border-2
          border-teal-500 
          hover:cursor-pointer hover:bg-teal-500 hover:text-white rounded-md ' >Back</button>
          :
          <button className='text-white bg-slate-500 py-2 px-4 border-2 border-black rounded-md'>Back</button>
        }

        {
          (step <= 2) ? <button  onClick={()=>setStep(prevStep=>(++prevStep))} className='text-teal-500 py-2 px-4 border-2 
          border-teal-500
          hover:cursor-pointer hover:bg-teal-500 hover:text-white rounded-md '>Next</button>
          : 
          <button className='text-white bg-teal-700 py-2 px-4 border-2 border-teal-700 rounded-md'>Submit</button>
        }
       
        
    </div>
    {console.log(step)}
    
    </>
  )
}

export default AddingRoomForm