import React from "react";
import {Text,View,StyleSheet } from "react-native";
import Gasto from "./Gasto";
const ListadoGastos =({gastos})=>{
  console.log(gastos);
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Listado Gastos</Text>
      {gastos.length===0? <Text style={styles.subtitulo}>No hay gastos</Text>:gastos.map((gasto)=><Gasto gasto={gasto} key={gasto.id}></Gasto>)}
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    marginBottom:25
  },
  titulo:{
    color:'#64748B',
    fontSize:25,
    textAlign:'center',
    marginTop:20,
    fontWeight:'bold',
    marginBottom:25
  },
  subtitulo:{
    textAlign:'center',
    fontSize:20,
    marginTop:40,
  },
})
export default ListadoGastos;
