import { useState } from "react"
import Eventogenerico from "./Eventogenerico"

export default function Dbclick() {
   const [count,setCount] = useState(0)
    return (
      <Eventogenerico evento={
        <>
        <h4 className="font-semibold mb-3">Evento dbclick</h4>
        <button onDoubleClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </>
      }>
      <p> El evento dbclick se ejecuta cuando se presiona dos veces el botón. </p>
      <p className="text-gray-700">En este ejemplo hicimos un contador que incrementa al presionar dos veces el botón.</p>
      </Eventogenerico>
       
  )
}
