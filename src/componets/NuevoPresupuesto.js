import React, {useState} from "react";
import { Pressable, Text, TextInput, View,StyleSheet } from "react-native";
import globalStyles from "../styles";
const NuevoPresupuesto = ({presupuesto,setPresupuesto,handleNuevoPresupuesto}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Definir presupuesto</Text>
      <TextInput value={presupuesto} onChangeText={setPresupuesto} style={styles.input} keyboardType={"numeric"} placeholder={'Ingresa tu presupuesto'}></TextInput>
      <Pressable style={styles.btnAgregar} onPress={()=>handleNuevoPresupuesto(presupuesto)}>
        <Text style={styles.btnTexto}>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  )
}
const styles=StyleSheet.create({
  titulo:{
    fontSize:20,
    color:'#000',
    fontWeight:'bold',
    textTransform:'uppercase',
  },
  input:{
    backgroundColor:'#fcf7f7',
    borderRadius:10,
    marginVertical:10,
    paddingVertical:10,
    paddingHorizontal:10,
    color:'#000',
    textAlign:'center',
  },
  btnAgregar:{
    marginTop:10,
    backgroundColor:'#1048A4',
    paddingHorizontal:10,
    paddingVertical:15,
    borderRadius:10,
  },
  btnTexto:{
    fontSize:17,
    textAlign:'center',
    color:'#FFF',
  },
  container:{
    ...globalStyles.container,
  }
});
export default NuevoPresupuesto
