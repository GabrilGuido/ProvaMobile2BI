import { Text } from "react-native";
import { StyleSheet } from 'react-native';

export default function Dashboard({navigation}){
    return(
        <Text style={styles.textUsuario}>Olá usuário</Text>
    )
}

const styles = StyleSheet.create({
    textUsuario :{
        color: 'green',
    },
  });