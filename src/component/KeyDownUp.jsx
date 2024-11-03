import  { useState } from 'react'
import Eventogenerico from './Eventogenerico'

export default function KeyDownUp() {
const [valueKey, setKey] = useState(0)
const [valueKey_Y, setKeyY] = useState(0)
let x = 0, y = 0;
    return (
    <Eventogenerico
    evento={<>
     <label>prueba keydown</label>
     <div className='w-[100px] h-[100px] bg-black' 
     tabIndex={0}
      onKeyDown={(e) => {
        console.log(e.code)

        e.preventDefault()
        if(e.code === 'ArrowRight'){
            x = valueKey
            if(x >= 93) return
            setKey(value => value +2)
        }
        if(e.code === 'ArrowLeft'){
            x= valueKey
            if(x <= -1) return
            setKey(value => value -2)
        }
        
        if(e.code === 'ArrowUp'){
            y= valueKey_Y
            if(y <= -1) return
            setKeyY(value => value -2)
        }
        if(e.code === 'ArrowDown'){
            y = valueKey_Y
            if(y >= 93) return
            setKeyY(value => value +2)
        }
      }}>
        <div className={`w-2 h-2 bg-red-500 rounded-full `}
        style={{
            transform: `translate(${valueKey}px, ${valueKey_Y}px)`
        }}
        ></div>
     </div>
    </>}>
       <>
       <p></p>
       <p></p>
       </>
    </Eventogenerico>
  )
}
