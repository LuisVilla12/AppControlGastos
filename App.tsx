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

function App(): React.JSX.Element {
  const [presupuestoValido, setPresupuestoValido] = React.useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = React.useState([
  ]);
  const handleNuevoPresupuesto = (presupuesto) => {
    if(Number(presupuesto)>0) {
      setPresupuestoValido(true);
    }else{
      Alert.alert("!Prespuesto no valido!",'Debes ingresar un presupuesto mayor a 0',[{text:'Ok'}]);
    }
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Header></Header>
          {presupuestoValido?
            (<ControlDeGastos gastos={gastos} setGastos={setGastos} presupuesto={presupuesto} setPresupuesto={setPresupuesto}></ControlDeGastos>)
            :
            (<NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} handleNuevoPresupuesto={handleNuevoPresupuesto}></NuevoPresupuesto>)
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F3F3F3',

  },
  header:{
    backgroundColor:'#3B82F6',
  },
});

export default App;

