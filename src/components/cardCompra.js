import { Button, Image, Text, View } from "react-native";
import styles from "./styles";




export default function Card(props){
    return (
        <View style={styles.container}>
            <View style={styles.campoImagem}>
                <Image style={styles.imagem} source={{uri: props.item.uri}}/>
            </View>
            <View style={styles.infoItem}>
                <View>
                    <Text style={styles.nomeItem}>{props.item.nome}</Text>
                </View>
                <View>
                    <Text style={styles.descItem}>{props.item.desc}</Text>
                </View>
                <View style={styles.btnDefault}>
                    <Button
                        title="Trocar!"
                        color="#009859"/>
                </View>
            </View>
        </View>
    )
}

