import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('0');
  const [numeroGuardado, setNumeroGuardado] = useState('');
  const [operacion, setOperacion] = useState('');

  const presionarNumero = (num) => {
    if (numero === '0') {
      setNumero(num);
    } else {
      setNumero(numero + num);
    }
  };

  const presionarOperacion = (op) => {
    setNumeroGuardado(numero);
    setNumero('0');
    setOperacion(op);
  };

  const calcularResultado = () => {
    const num1 = parseFloat(numeroGuardado);
    const num2 = parseFloat(numero);
    
    if (operacion === '+') {
      setNumero((num1 + num2).toString());
    } else if (operacion === '-') {
      setNumero((num1 - num2).toString());
    } else if (operacion === '*') {
      setNumero((num1 * num2).toString());
    } else if (operacion === '/') {
      if (num2 !== 0) {
        setNumero((num1 / num2).toString());
      } else {
        setNumero('Error');
      }
    }
    
    setOperacion('');
    setNumeroGuardado('');
  };

  const limpiar = () => {
    setNumero('0');
    setNumeroGuardado('');
    setOperacion('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      

      <View style={styles.pantalla}>
        <Text style={styles.textoPantalla}>{numero}</Text>
      </View>
      
      
      <View style={styles.fila}>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('7')}>
          <Text style={styles.textoBoton}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('8')}>
          <Text style={styles.textoBoton}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('9')}>
          <Text style={styles.textoBoton}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonOperacion} onPress={() => presionarOperacion('/')}>
          <Text style={styles.textoBoton}>/</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.fila}>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('4')}>
          <Text style={styles.textoBoton}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('5')}>
          <Text style={styles.textoBoton}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('6')}>
          <Text style={styles.textoBoton}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonOperacion} onPress={() => presionarOperacion('*')}>
          <Text style={styles.textoBoton}>×</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.fila}>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('1')}>
          <Text style={styles.textoBoton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('2')}>
          <Text style={styles.textoBoton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('3')}>
          <Text style={styles.textoBoton}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonOperacion} onPress={() => presionarOperacion('-')}>
          <Text style={styles.textoBoton}>-</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.fila}>
         <TouchableOpacity style={styles.boton} onPress={limpiar}>
          <Text style={styles.textoBoton}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={() => presionarNumero('0')}>
          <Text style={styles.textoBoton}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonIgual} onPress={calcularResultado}>
          <Text style={styles.textoBoton}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonOperacion} onPress={() => presionarOperacion('+')}>
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  pantalla: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
  textoPantalla: {
    fontSize: 32,
  },
  fila: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  botonOperacion: {
    backgroundColor: '#ff9500',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  botonIgual: {
    backgroundColor:'#e0e0e0',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  textoBoton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});