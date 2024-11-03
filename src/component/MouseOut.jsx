import { useState } from 'react'
import Eventogenerico from './Eventogenerico';

export default function MouseOut() {
  const [open,setOpen] = useState(false)
  return (
      <Eventogenerico evento={
        <>
        <h4 className='w-[200px] font-semibold mb-3'>Evento MouseOver y MouseOut</h4>
        <div className='relative flex items-center justify-center'>
        <p className='bg-gray-800/80 py-2 px-3 rounded-full text-gray-400 font-bold'
         onMouseOver={() => {
          setOpen(true);
         }}>Eventos de Js</p>
        <p className={` transition-all bg-white  px-3 rounded-full font-bold text-yellow-500 absolute
         overflow-hidden ${open ? " w-auto h-auto py-2" : "  h-[0px] p-0"} `}
          onMouseOut={()=>
            setOpen(false)
          }>Eventos de Js</p>
        </div>
        </>
      }>
        <>
        <p className='overflow-y-auto h-[100px] mb-3'> El evento MouseOver ocurre cuando el puntero de ratón pasa sobre un elemento, el evento MouseOut 
          ocurre cuando el puntero del ratón sale del elemento.</p>
        <p className='text-gray-700'>En este ejemplo hicimos un párrafo que cambiara cuando el puntero entre o salga del párrafo.</p></>
      </Eventogenerico>
  )
}
