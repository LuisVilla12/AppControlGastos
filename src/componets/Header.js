import React from 'react';
import { Text, View,StyleSheet } from "react-native";
export default  Header =()=>{
  return(
    <View>
      <Text style={styles.titulo}>Planificador de Gastos</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  titulo:{
    textAlign:'center',
    fontSize:30,
    color:'#FFF',
    textTransform:'uppercase',
    fontWeight:'bold',
    paddingVertical:15,
    marginTop:15
  },
})
