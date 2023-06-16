import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import CadastrarUsuario from './src/pages/cadastro/cadastrarUsuario';
import Catalogo from './src/pages/catalogo/menuItens';
import Dashboard from './src/pages/dashBoard/usuarioDashboard';
import Login from './src/pages/login/loginPage';
import RedefinirSenha from './src/pages/recuperarSenha/recuperacaodeSenhas';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer style={styles.fundo}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="MudarSenha" component={RedefinirSenha}/>
        <Stack.Screen name="Registro" component={CadastrarUsuario}/>
        <Stack.Screen name="Catalogo" component={Catalogo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#ffff',
  },
});

