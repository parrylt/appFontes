import { Text, View, ScrollView, SafeAreaView, StyleSheet, Image , ImageBackground} from 'react-native';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

import { BalsamiqSans_400Regular } from '@expo-google-fonts/balsamiq-sans';
import { Lusitana_400Regular } from '@expo-google-fonts/lusitana';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';
import { Allan_400Regular } from '@expo-google-fonts/allan';
import { Labrada_400Regular } from '@expo-google-fonts/labrada';
import { Gloock_400Regular } from '@expo-google-fonts/gloock';
import { Unbounded_400Regular } from '@expo-google-fonts/unbounded';
import { Alexandria_500Medium } from '@expo-google-fonts/alexandria';
import { Sono_500Medium } from '@expo-google-fonts/sono';
import { CairoPlay_500Medium } from '@expo-google-fonts/cairo-play';



export default function App() {

let [fontsLoaded, fontError] = useFonts ({
  Bangers_400Regular, BalsamiqSans_400Regular, Lusitana_400Regular, PlayfairDisplay_400Regular, Allan_400Regular, Labrada_400Regular, Gloock_400Regular, Unbounded_400Regular, Alexandria_500Medium, Sono_500Medium, CairoPlay_500Medium
})

if (!fontsLoaded && !fontError){
  return null;
}

  return (

<View style={styles.container}>

    <View style={styles.cxEtec}>
      <Image style={styles.etec}
      resizeMode="contain"
      source={require("./assets/etec.jpg")}/>
    </View>

    <Text style={styles.titulo}>Frases Motivacionais para Você</Text>

<ScrollView>

  <View style={styles.caixona}>
    <ImageBackground source={require("./assets/steve_jobs.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto1}>A tecnologia move-se rapidamente. É preciso manter-se à frente dela ou arriscar-se a ser deixado para trás.</Text>
    <Text style={styles.autor1}>Steve Jobs</Text>
  </View>


    <View style={styles.caixona}>
    <ImageBackground marginLeft = {50} source={require("./assets/Bill-Gates.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto2}>Em breve haverá dois tipos de empresas: as que fazem negócios na internet e as que estão fora dos negócios.</Text>
    <Text style={styles.autor2}>Bill Gates</Text>
  </View>


    <View style={styles.caixona}>
    <ImageBackground source={require("./assets/jeff.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto3}>Grandes invenções são muitas vezes simples ideias que ninguém havia pensado antes.</Text>
    <Text style={styles.autor3}>Jeff Bezos</Text>
  </View>


    <View style={styles.caixona}>
    <ImageBackground source={require("./assets/elonMoska.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto4}>Minha família claramente não tem uma mina de esmeraldas.</Text>
    <Text style={styles.autor4}>Elon Moska</Text>
  </View>

      <View style={styles.caixona}>
    <ImageBackground source={require("./assets/mark.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto5}>A maior coisa que a internet proporciona é essa capacidade de interagir com outras pessoas.</Text>
    <Text style={styles.autor5}>Mark Zuckerberg</Text>
  </View>


      <View style={styles.caixona}>
    <ImageBackground source={require("./assets/Larry-Ellison.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto6}>A tecnologia não é apenas uma ferramenta, é uma extensão de nossa criatividade e capacidades.</Text>
    <Text style={styles.autor6}>Larry Ellison</Text>
  </View>


    <View style={styles.caixona}>
    <ImageBackground source={require("./assets/Larry_Page.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto7}>Pobres e ricos, todos somos iguais perante a lei. Bem, exceto quando a lei está ocupada lavando meu carro.</Text>
    <Text style={styles.autor7}>Larry Page</Text>
  </View>



      <View style={styles.caixona}>
    <ImageBackground source={require("./assets/jackma.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto8}>Se a vida lhe der limões, você provavelmente não tem uma máquina automática de fazer limonada.</Text>
    <Text style={styles.autor8}>Jack Ma</Text>
  </View>


        <View style={styles.caixona}>
    <ImageBackground source={require("./assets/WarrenBuffett.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto9}>Sempre chego tarde ao escritório, mas compenso saindo mais cedo.</Text>
    <Text style={styles.autor9}>Warren Buffett</Text>
  </View>


  <View style={styles.caixona}>
    <ImageBackground source={require("./assets/atrnault.png")} resizeMode="cover" style={styles.imagens}>
      <View opacity={0.3} style={styles.caixa}>
      </View>
    </ImageBackground>

    <Text style={styles.texto10}>A recompensa pelo bom trabalho é mais trabalho.</Text>
    <Text style={styles.autor10}>Bernard Arnault</Text>
  </View>



 </ScrollView>
</View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

etec:{
  marginTop: 20,
  width: 100,
  height: 100,
  marginLeft: 270
},
titulo: {
  margin: 10,
  fontSize: 30,
  textAlign: 'center',
  justifyContent: 'center',
  fontFamily: 'Bangers_400Regular',
},

caixona: {
    flex: 1,
    marginBottom: 40,
    marginTop: 40
  },

  caixa: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FCA17D',
    borderRadius: 15,
    zIndex: 1
  },

  texto1:{
    margin: 10,
    paddingLeft: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'BalsamiqSans_400Regular',
    backgroundColor: '#FFECB3',
    borderRadius: 19,
    marginRight: 220,
    marginTop: -350,
    opacity: 0.8,
    zIndex: 2
  },

  autor1:{
    margin: 20,
    padding: 5,
    marginLeft: 208,
    fontSize: 30,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'BalsamiqSans_400Regular',
    backgroundColor: '#FFECB3',
    borderRadius: 19,
    opacity: 0.8,
  },

  imagens:{
    width: 390,
    height: 390
  },

    texto2:{
    margin: 10,
    padding: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Lusitana_400Regular',
    backgroundColor: '#FFD966',
    borderRadius: 19,
    marginRight: 220,
    marginTop: -300,
    opacity: 0.8,
    zIndex: 2
  },

  autor2:{
    margin: 20,
    padding: 5,
    marginRight: 200,
    marginLeft: 50,
    fontSize: 30,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'Lusitana_400Regular',
    backgroundColor: '#FFD966',
    borderRadius: 19,
    opacity: 0.8,
  },

  texto3:{
    margin: 10,
    padding: 5,
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'PlayfairDisplay_400Regular',
    backgroundColor: '#FFE5B4',
    borderRadius: 19,
    marginRight: 235,
    marginTop: -350,
    opacity: 0.8,
    zIndex: 2
  },

  autor3:{
    margin: 20,
    padding: 5,
    marginLeft: 219,
    marginRight: 30,
    fontSize: 30,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'PlayfairDisplay_400Regular',
    backgroundColor: '#FFE5B4',
    borderRadius: 19,
    opacity: 0.8,
  },


  texto4:{
    margin: 10,
    padding: 10,
    fontSize: 25,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Allan_400Regular',
    backgroundColor: '#FFD87F',
    borderRadius: 19,
    marginLeft: 225,
    marginTop: -250,
    opacity: 0.8,
    zIndex: 2
  },

  autor4:{
    margin: 20,
    padding: 5,
    marginLeft: 10,
    marginRight: 225,
    fontSize: 40,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'Allan_400Regular',
    backgroundColor: '#FFD87F',
    borderRadius: 19,
    opacity: 0.8,
  },


    texto5:{
    margin: 10,
    padding: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Labrada_400Regular',
    backgroundColor: '#FFDFC4',
    borderRadius: 19,
    marginLeft: 190,
    marginTop: -250,
    opacity: 0.8,
    zIndex: 2
  },

  autor5:{
    margin: 20,
    padding: 5,
    marginLeft: 10,
    marginRight: 180,
    fontSize: 25,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'Labrada_400Regular',
    backgroundColor: '#FFDFC4',
    borderRadius: 19,
    opacity: 0.8,
  },

    texto6:{
    margin: 10,
    padding: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Gloock_400Regular',
    backgroundColor: '#FFCC8A',
    borderRadius: 19,
    marginLeft: 190,
    marginTop: -250,
    opacity: 0.8,
    zIndex: 2
  },

  autor6:{
    margin: 20,
    padding: 5,
    marginLeft: 10,
    marginRight: 200,
    fontSize: 25,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'Gloock_400Regular',
    backgroundColor: '#FFCC8A',
    borderRadius: 19,
    opacity: 0.8,
  },

  texto7:{
    margin: 10,
    padding: 10,
    fontSize: 15,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Unbounded_400Regular',
    backgroundColor: '#FFDAB9',
    borderRadius: 19,
    marginLeft: 170,
    marginTop: -230,
    opacity: 0.8,
    zIndex: 2
  },

  autor7:{
    margin: 20,
    padding: 5,
    marginLeft: 10,
    marginRight: 200,
    fontSize: 25,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'Unbounded_400Regular',
    backgroundColor: '#FFDAB9',
    borderRadius: 19,
    opacity: 0.8,
  },

texto8:{
    margin: 10,
    padding: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Alexandria_500Medium',
    backgroundColor: '#FFC58D',
    borderRadius: 19,
    marginRight: 200,
    marginTop: -300,
    opacity: 0.8,
    zIndex: 2
  },

autor8:{
    margin: 20,
    padding: 5,
    marginRight: 10,
    marginLeft: 265,
    fontSize: 25,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'Alexandria_500Medium',
    backgroundColor: '#FFC58D',
    borderRadius: 19,
    opacity: 0.8,
  },


    texto9:{
    margin: 10,
    padding: 5,
    fontSize: 15,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Sono_500Medium',
    backgroundColor: '#FFD3C6',
    borderRadius: 19,
    marginRight: 230,
    marginTop: -200,
    opacity: 0.8,
    zIndex: 2
  },

  autor9:{
    margin: 20,
    padding: 5,
    marginRight: 10,
    marginLeft: 150,
    fontSize: 25,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'Sono_500Medium',
    backgroundColor: '#FFD3C6',
    borderRadius: 19,
    opacity: 0.8,
  },


    texto10:{
    margin: 10,
    padding: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'CairoPlay_500Medium',
    backgroundColor: '#FFBF99',
    borderRadius: 19,
    marginLeft: 190,
    marginTop: -230,
    opacity: 0.8,
    zIndex: 2
  },

  autor10:{
    margin: 20,
    padding: 5,
    marginRight: 10,
    marginLeft: 200,
    fontSize: 25,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'CairoPlay_500Medium',
    backgroundColor: '#FFBF99',
    borderRadius: 19,
    opacity: 0.8,
  },

});
