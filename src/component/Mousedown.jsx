import  { useRef, useState } from "react";
import Eventogenerico from "./Eventogenerico";


export const Mousedown = () => {

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const context = canvasRef.current.getContext("2d");
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    
  };

 /* const handleClearRectCanva = () => {
    setIsDrawing(false);
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0,0, 200,200)
  }*/
  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    e.currentTarget.style.cursor = "pointer";
    const context = canvasRef.current.getContext("2d");
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.lineCap= 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'red'
    context.lineWidth = 1;
    context.stroke();
  };

  const handleMouseUp = (e) => {
     e.currentTarget.style.cursor = 'default';
    setIsDrawing(false);
    
    
  };

  return (
     <Eventogenerico evento={
      <>
      <h4 className="font-semibold mb-3 w-[200px]">Eventos de MouseDown, MouseMove, MouseUp, MouseLeave</h4>
     <div className="relative w-[200px]">
     {/*<button onClick={handleClearRectCanva} className="absolute left-1 top-1 text-[10px]">Borrar</button>
     /*/}
     <canvas
      ref={canvasRef}
      width={100}
      height={100}
      
      style={{ border: "1px solid black",
        background:"black",
        margin: "auto"
       }}
      onMouseDown={ handleMouseDown }
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={ 
    
        handleMouseUp} // Para detener al salir del canvas
    ></canvas>
     </div>
      </>
     }>
     <>
     <p className="overflow-y-auto h-[100px] mb-3">El <strong>MouseDown</strong> se activa al presionar un botón del ratón. Usualmente inicia una acción, como el comienzo de un arrastre. 
      <strong>MouseMove</strong> se activa al mover el ratón sobre un elemento. Es útil para rastrear la posición del ratón en tiempo real. 
      <strong>MouseUp</strong> se activa al soltar un botón del ratón después de presionarlo. Marca el final de una acción de arrastre o dibujo.
      <strong>MouseLeave</strong> se activa cuando el ratón sale del área del elemento. Puede usarse para cancelar acciones si el ratón sale de un área específica.
      </p>
      <p className="overflow-y-auto h-[100px] text-gray-700">En este ejemplo utilizaremos un canva, cuando se presione el botón 
        del mouse se iniciara el pincel, cuando se mueva el mouse se dibujara con el pincel y cuando 
        el botón del mouse ya no se presione se detendrá el trazo, cuando el puntero salga del canva se detendrá el trazo.  </p></>
     </Eventogenerico>
  );
};

