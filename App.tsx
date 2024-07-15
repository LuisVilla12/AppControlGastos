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

function App(): React.JSX.Element {
  const [presupuestoValido, setPresupuestoValido] = React.useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = React.useState([
  ]);
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
  const handleNuevoGasto = gasto => {
    console.log(gasto);
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
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
    right:20,
    top:120
  },
  header:{
    backgroundColor:'#3B82F6',
  },

});

export default App;

