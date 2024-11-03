import PropTypes from "prop-types"

PropTypes
export default function Eventogenerico({children, evento}) {
  return (
    <div className="card rounded-md bg-gradient-to-tr from-fuchsia-500 to-purple-800  flex max-[1197px]:flex-wrap gap-3 items-center justify-center">
    <div className='w-[200px]'>
    {evento}
    </div>
    <div className="text-start">
    {children}
    </div>
    
  </div>
  )
}

