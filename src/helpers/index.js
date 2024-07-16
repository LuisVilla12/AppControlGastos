export const formatearCantidad=(cantidad)=>{
  return Number(cantidad).toLocaleString("en-US",{style:"currency",currency:"USD"});
}
export const generarID=()=>{
  const numeroRandom=Math.random().toString(36).substr(2);
  const fechaRandom=Date.now();
  return numeroRandom+fechaRandom;
}
