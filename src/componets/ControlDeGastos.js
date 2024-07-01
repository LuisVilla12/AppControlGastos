import React,{useState,useEffect} from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles";
import { formatearCantidad } from "../helpers";
const ControlDeGastos = ({setPresupuesto,setGastos,gastos,presupuesto}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado,setGastado] = useState(0);

  useEffect(() => {
      const totalGastado=gastos.reduce((total, gasto) => Number(gasto.cantidad)+total,0);
      setGastado(totalGastado);
      setDisponible(presupuesto-gastado)
  }, []);
  return(
    <View style={styles.container}>
      <View style={styles.centrarIMG}>
        <Image style={styles.img} source={require('../imgs/grafico.jpg')}></Image>
        <View style={styles.contenedorPrecios}>
          <Text style={styles.labels}>Presupuesto: <Text style={styles.valor}>{formatearCantidad(presupuesto)}</Text></Text>
          <Text style={styles.labels}>Disponible:<Text style={styles.valor}>{formatearCantidad(disponible)}</Text></Text>
          <Text style={styles.labels}>Gastado:<Text style={styles.valor}>{formatearCantidad(gastado)}</Text></Text>
        </View>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container: {
    ...globalStyles.container
  },
  centrarIMG: {
    alignItems: 'center'
  },
  img:{
    width:250,
    height:250,
  },
  contenedorPrecios:{
    marginVertical:40,
  },
  labels:{
    marginTop:5,
    textTransform:'uppercase',
    fontSize:19,
    color:'#3B82F6',
    fontWeight:'bold',
  },
  valor:{
    fontSize:19,
    color:'#000',
  }
});
export default ControlDeGastos;
