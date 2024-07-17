import React, { useState } from "react";
import {
  Pressable,
  Image,
  Alert, Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, View
} from "react-native";
import Header from "./src/componets/Header";
import NuevoPresupuesto from "./src/componets/NuevoPresupuesto";
import ControlDeGastos from "./src/componets/ControlDeGastos";
import NuevoGasto from "./src/componets/NuevoGasto";
import {generarID} from "./src/helpers/index"
import ListadoGastos from "./src/componets/ListadoGastos";
function App(): React.JSX.Element {
  const [presupuestoValido, setPresupuestoValido] = React.useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = React.useState([
  ]);
  const gasto={}
  const [modal,setModal] = React.useState(false);
  // Validar presupuesto
  const handleNuevoPresupuesto = (presupuesto) => {
    if(Number(presupuesto)>0) {
      setPresupuestoValido(true);
    }else{
      Alert.alert("!Prespuesto no valido!",'Debes ingresar un presupuesto mayor a 0',[{text:'Ok'}]);
    }
  }
  // Nuevo Gasto
  const handleNuevoGasto = (gasto) => {
    if(Object.values(gasto).includes('')){
      Alert.alert('No se admiten campos vacios','Debes ingresar valores validos',[{text:'OK'}]);
      return;
    }
    // Colocar identificador unico
   gasto.id =generarID();
    // Agregar gasto al state
    setGastos([...gastos, gasto]);
    setModal(false)
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
           <Header></Header>
          {presupuestoValido?
            (<ControlDeGastos gastos={gastos} setGastos={setGastos} presupuesto={presupuesto} setPresupuesto={setPresupuesto}></ControlDeGastos>)
            :
            (<NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} handleNuevoPresupuesto={handleNuevoPresupuesto}></NuevoPresupuesto>)
          }
        </View>
        {presupuestoValido &&
          (<Pressable onPress={()=>{setModal(true)}}>
            <Image style={styles.imagen} source={require('./src/imgs/nuevo-gasto.png')}></Image>
          </Pressable>)
        }
        {presupuestoValido && (
          <ListadoGastos gastos={gastos}></ListadoGastos>
        ) }
        </ScrollView>
        {modal && <NuevoGasto setModal={setModal} handleNuevoGasto={handleNuevoGasto}> </NuevoGasto>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F3F3F3',
  },
  imagen:{
    width:60,
    height:60,
    position:'absolute',
    right:30,
    bottom:20
  },
  header:{
    backgroundColor:'#3B82F6',
  },

});

export default App;

