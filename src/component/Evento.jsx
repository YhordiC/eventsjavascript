import  { useState } from 'react'
import Eventogenerico from './Eventogenerico'

export default function EventoClick() {
  const [count,setCount] = useState(0)
    return (
        <Eventogenerico evento={
        <>
        <h4 className='font-semibold mb-3'>Evento click</h4>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </>  
        }>
          <>
          <p> El evento click se ejecuta cuando se presiona el botón. </p>
          <p className='text-gray-700'>En este ejemplo hicimos un contador que incrementa al presionar el botón.</p>
          </>
        
        </Eventogenerico>
  )
}
