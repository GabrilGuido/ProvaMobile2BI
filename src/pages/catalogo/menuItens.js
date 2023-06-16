import { StyleSheet, View } from 'react-native';
import Card from "../../components/cardCompra";


export default function Catalogo(){
    const Itens = [
        {
            nome: 'Mjolnir',
            desc: 'Mjolnir, um martelo lendário usado pelo filho de Odin, Thor. Muitos temem seu poder e peso imensurável, dizem que só os digos conseguem erguê-lo. Com raios e trovões, o portador desse martelo de guerra põe medo no coração dos inimigos!',
            uri: 'https://m.media-amazon.com/images/I/81fKIh7xi9L._AC_SX569_.jpg',
        },
        {
            nome: 'Eco de Luden',
            desc: 'O Eco de Luden é um dos principais itens para muitos magos da rota do meio, e um grande pico de poder para campeões de dano explosivo.',
            uri: 'https://scontent.fvix3-1.fna.fbcdn.net/v/t1.6435-9/91613324_3202455093112661_1946494962552012800_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=104&ccb=1-7&_nc_sid=8024bb&_nc_ohc=elAt0evM9FcAX-e7uIF&_nc_ht=scontent.fvix3-1.fna&oh=00_AfCrl7g61CK3Joo82hRswD7YFPWaItsR7AcJ7VrIxhwlbw&oe=64B3D78F',
        },
        {
            nome: 'Ampulheta de Zhonya',
            desc: 'Uma ampulheta mágica usada pela bruxa Zhonya, quem toca sua estrutura de vidro sente o controle do próprio tempo nas mãos. Com ela o usuário pode entrar em estado de êxtase e se congelar no tempo, ficando completamente intocável e imutável.',
            uri: 'https://wiki.runarcana.org/images/thumb/3/31/Zhonya%27s_Hourglass_item_HD.png/150px-Zhonya%27s_Hourglass_item_HD.png',
        },
      ];
    return(
        <View style={styles.container}>
            <Card item={Itens[0]}/>
            <Card item={Itens[1]}/>
            <Card item={Itens[2]}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  });

