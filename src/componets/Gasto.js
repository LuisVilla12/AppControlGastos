import React from "react";
import { Text, View,StyleSheet,Pressable } from "react-native";
import globalStyles from "../styles";

const Gasto =({gasto})=>{
  const {nombre,cantidad,tipoGasto}=gasto;
  return (
    <View style={styles.container}>
      <View>
        {/*Nombre*/}
      </View>

      <Text>{nombre}</Text>
      <Text>{cantidad}</Text>
      <Text>{tipoGasto}</Text>
    </View>

)
}
const styles=StyleSheet.create({
  container:{
    ...globalStyles.container,
  }
})
export default Gasto;
