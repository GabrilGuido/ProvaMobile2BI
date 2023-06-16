import React, { useState } from 'react'
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native'
import { StyleSheet } from 'react-native'


export default function RedefinirSenha({ navigation }) {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')


  const handleRegistrar = () => {
    if (login && senha && confirmarSenha) {
      if (senha === confirmarSenha) {
        navigation.navigate('Login')
      } else {
        Alert.alert('Erro', 'Senha e confirmação de senha não correspondem')
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos')
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Log-in..."
        onChangeText={text => setLogin(text)}
        value={login}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova senha..."
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha..."
        onChangeText={text => setConfirmarSenha(text)}
        value={confirmarSenha}
        secureTextEntry
      />
      <View style={styles.btnDefault}>
        <Button title="Registrar" color="#009859" onPress={handleRegistrar} />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  input: {
    width: 250,
    marginTop: 40,
    padding: 10,
    fontSize: 18,
    color: 'rgba(0, 152, 89, 0.5)',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#009859'
  },
  btnDefault: {
    width: 250,
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ffffff'
  }
})



