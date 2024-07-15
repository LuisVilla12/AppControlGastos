import React, {useState} from "react";
import { StyleSheet, Modal, SafeAreaView, Pressable, Text, TextInput, View } from "react-native";
import {Picker} from '@react-native-picker/picker';
import globalStyles from "../styles";
export default  NuevoGasto =({setModal,handleNuevoGasto})=>{
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [tipoGasto, setTipoGasto] = useState("");
  return(
    <Modal animationType={'slide'}>
      <SafeAreaView  style={styles.fondo}>
        <View>
          <Pressable style={[styles.btn,styles.fondoOrange]} onPress={()=>{setModal(false)}}>
            <Text style={styles.btnText}> X Cerrar</Text>
          </Pressable>
        </View>
        <View style={styles.formulario}>
        {/*Gastos*/}
          <View style={styles.campo}>
            <Text style={styles.titulo}>Nuevo gasto</Text>
            <Text style={styles.label}>Nombre del gasto:</Text>
            <TextInput keyboardType={'default'} onChangeText={setNombre} value={nombre} style={styles.input} placeholder={'Ingrese el nombre del gasto'}></TextInput>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Cantidad del gasto:</Text>
            <TextInput keyboardType={'number-pad'} style={styles.input}  value={cantidad} onChangeText={setCantidad} placeholder={'Ingrese la cantidad del gasto'}></TextInput>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Categoria de gasto:</Text>
            <Picker style={styles.input} selectedValue={tipoGasto} onValueChange={(valor)=>{setTipoGasto(valor)}}>
              <Picker.Item label="-- Seleccione-- " value=""></Picker.Item>
              <Picker.Item label="Ahorros" value="ahorro" ></Picker.Item>
              <Picker.Item label="Salidas" value="salidas" ></Picker.Item>
              <Picker.Item label="Casa" value="casa" ></Picker.Item>
              <Picker.Item label="Salud" value="salud" ></Picker.Item>
              <Picker.Item label="Suscripciones" value="suscripciones" ></Picker.Item>
            </Picker>
          </View>
          <Pressable style={styles.btn} onPress={()=>{handleNuevoGasto(nombre,cantidad,tipoGasto)}}>
            <Text style={styles.btnText}>Agregar gasto</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
const styles = StyleSheet.create({
  formulario:{
    marginTop:15,
    ...globalStyles.container
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    color:'#64748B',
    textTransform:'uppercase',
    fontWeight:'bold',
    marginBottom:40,
    marginTop:20
  },
  campo:{
    marginBottom:18
  },
  input:{
    backgroundColor:'#f5f5f5',
    paddingVertical:10,
    paddingHorizontal:10
  },
  label:{
    marginBottom:10,
    textTransform:'uppercase',
    fontSize:17,
    fontWeight:'bold',
    color:'#64748B  '
  },
  container:{
    width:'90%',
    marginHorizontal:'auto'
  },
  fondo:{
    backgroundColor:'#1E40AF',
    flex:1,
  },
  btn:{
    backgroundColor:'#3B82F6',
    paddingVertical:15,
    paddingHorizontal:15,
    marginTop:25,
  },
  btnText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight:'bold',
    fontSize:15
  },
  fondoOrange:{
    backgroundColor:'#fa901a',
    marginBottom:15,
    paddingVertical:15,
    marginTop:5
  }
})
