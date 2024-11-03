import { useEffect, useState } from 'react'
import './App.css'
import EventoClick from './component/Evento'
import Dbclick from './component/Dbclick'
import {Mousedown} from './component/Mousedown'
import MouseOut from './component/MouseOut'

const Eventos = [
  {name: "click",
    contenido: <EventoClick/>
  },
  { name: "dbclick",
    contenido: <Dbclick/> 
  },
  { name: "mousedown, mousemove, mouseup, mouseleave",
    contenido: <Mousedown/>
  },
  {name: " mouseover y mouseout",
   contenido: <MouseOut/>
  }
]
function App() {
  const [value, setValue] = useState('')
 const [events, setEvents] = useState(Eventos)

 useEffect(() => {
  if(value === ''){
    setEvents(Eventos)
    return
  }
   setEvents( Eventos.filter((events) => events.name.includes(value)))
 },[value])
  return (
    <div>     
      <h1 className='mb-7' >Events JS</h1>
      <div className='flex gap-3 justify-center items-center flex-col'>
        <label>Buscar Eventos de javascript</label>
        <input className='px-2 py-3 rounded-md w-full max-w-[500px]  mb-10'
          name='search' type='search' placeholder='click, dbclick, mousedown' 
         onChange={(e) =>{
         setValue(e.target.value)
        }}/>
      </div>
     <div className='ctn-events'>
      {events.map((event,key) => (
        
        <div key={key}>
          {event.contenido}
        </div>
      ))}
      </div> 
      
      
  
    </div>
  )
}

export default App
