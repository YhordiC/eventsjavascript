
export default function Mouseup() {
  return (
    <div className="card">
    <h4>Evento Mouseup</h4>
    <p onMouseUp={(e) => {
        console.log('Evento Mouseup')
        e.currentTarget.textContent = 'Gracias por pulsare'
    }}>Presionare aquí!</p>
    <p> El evento mouseup se ejecuta cuando se presiona con el mouse un. </p>
    <p className="text-gray-800">En este ejemplo hicimos un contador que incrementa al presionar el botón.</p>
  </div>
  )
}
