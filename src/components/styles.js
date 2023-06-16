import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    padding: 10,
    margin: 2,
    backgroundColor: '#fff'
  },
  campoImagem: {
    width: '30%',
    height: '100%'
  },
  imagem: {
    width: '100%',  
    height: '100%',
    borderRadius: 10
  },
  infoItem: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center'
  },
  nomeItem: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  descItem: {
    margin: 5
  },
  btnDefault: {
    width: '100%',
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ffffff'
  }
})


export default styles



