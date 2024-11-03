import PropTypes from "prop-types"

PropTypes
export default function Eventogenerico({children, evento}) {
  return (
    <div className="card rounded-md bg-amber-500/80 flex gap-3 items-center justify-center">
    <div className='w-[200px]'>
    {evento}
    </div>
    <div>
    {children}
    </div>
    
  </div>
  )
}

Eventogenerico.propTypes = {
    evento: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired
}