// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './Card'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1 className=' mb-4 border rounded-xl bg-sky-50 text-black text-centerc'>Let's learn tailwind</h1>
//      <Card username="chaiOrcode"/>
//     </>
//   )
// }

// export default App



import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [color,setColor] = useState("pink")
  return (
    
      <div className=' w-full h-screen duration-200' style={{backgroundColor:color}}> 
         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2'>
             <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
             <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
             <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
             <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
             <button onClick={()=>setColor(" rgb(255, 87, 51)")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:" rgb(255, 87, 51)"}}>Unknown</button>
             <button onClick={()=>setColor("skyblue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"skyblue"}}>sky</button>
             <button onClick={()=>setColor("olive")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>
             <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
           </div>
         </div>
      </div>
       
  )
}

export default App

