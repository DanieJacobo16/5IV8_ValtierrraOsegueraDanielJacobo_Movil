import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [clasificacion, setClasificacion] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      Alert.alert('Error', 'Por favor ingresa peso y altura');
      return;
    }

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert('Error', 'Por favor ingresa valores válidos');
      return;
    }

    const alturaMetros = alturaNum / 100; 
    const resultado = pesoNum / (alturaMetros * alturaMetros);
    const imcRedondeado = resultado.toFixed(2);

    setImc(imcRedondeado);
    clasificarIMC(imcRedondeado);
  };

  const clasificarIMC = (valor) => {
    const imcNum = parseFloat(valor);
    
    if (imcNum < 18.5) {
      setClasificacion('Bajo peso');
    } else if (imcNum >= 18.5 && imcNum < 25) {
      setClasificacion('Peso normal');
    } else if (imcNum >= 25 && imcNum < 30) {
      setClasificacion('Sobrepeso');
    } else if (imcNum >= 30 && imcNum < 35) {
      setClasificacion('Obesidad grado I');
    } else if (imcNum >= 35 && imcNum < 40) {
      setClasificacion('Obesidad grado II');
    } else {
      setClasificacion('Obesidad grado III');
    }
  };

  const resetear = () => {
    setPeso('');
    setAltura('');
    setImc(null);
    setClasificacion('');
  };

  const getColorClasificacion = () => {
    switch(clasificacion) {
      case 'Bajo peso':
        return '#FFA500'; 
      case 'Peso normal':
        return '#4CAF50'; 
      case 'Sobrepeso':
        return '#FF9800'; 
      case 'Obesidad grado I':
        return '#F44336';
      case 'Obesidad grado II':
        return '#D32F2F';
      case 'Obesidad grado III':
        return '#B71C1C';
      default:
        return '#666';
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora de IMC</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 85"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />

          <Text style={styles.label}>Altura (cm)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 160"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />

          <View style={styles.botonesContainer}>
            <TouchableOpacity style={styles.botonCalcular} onPress={calcularIMC}>
              <Text style={styles.botonTexto}>Calcular IMC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonReset} onPress={resetear}>
              <Text style={styles.botonTexto}>Reiniciar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {imc && (
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTitulo}>Resultado:</Text>
            <Text style={styles.imcTexto}>IMC: {imc}</Text>
            <Text style={[styles.clasificacionTexto, { color: getColorClasificacion() }]}>
              {clasificacion}
            </Text>
          </View>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitulo}>Clasificación IMC:</Text>
          <Text style={styles.infoItem}>• Peso Bajo: menos  de 18.5</Text>
          <Text style={styles.infoItem}>• Normal: 18.5 - 24.9</Text>
          <Text style={styles.infoItem}>• Sobrepeso: 25 - 29.9</Text>
          <Text style={styles.infoItem}>• Obesidad: 30 o más</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botonCalcular: {
    backgroundColor: '#2563bbff',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  }, 
  botonReset: {
    backgroundColor: '#aeaeaeff',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  botonTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resultadoContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  resultadoTitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  imcTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  clasificacionTexto: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  infoTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  infoItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});