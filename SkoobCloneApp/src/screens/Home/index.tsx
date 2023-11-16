import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles'
import logoSkoob from '../../../assets/logoSkoob.png'
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons';
import primeiraImagem from '../../../assets/a.jpg'
import segundaImagem from '../../../assets/b.jpg'
import terceiraImagem from '../../../assets/c.jpg'

export const Home = () => {
    return (
        <View style={styles.viewContainer}>
      <Image source={logoSkoob} style={styles.logoSkoob}/>
      <TouchableOpacity style={styles.botaoEntrar}><Text style={[styles.texto, {color: '#2672a4', fontSize: 28}]}>Entrar</Text></TouchableOpacity>
      <View style={styles.viewLinha}>

        <Feather style={[styles.viewLinha, {marginRight: 20, marginTop: 1}]} name="bookmark" size={40}  color='#2672a4' />
        <EvilIcons style={[styles.viewLinha, {marginRight: 10, marginTop: -1, marginLeft: 10}]} name="star" size={50} color='#2672a4' />
        <AntDesign style={[styles.viewLinha, {marginLeft: 20, marginTop: 6}]} name="edit" size={38} color='#2672a4' />
      </View>
      <Text style={[styles.texto, {fontWeight: 'bold', fontSize: 17, top: -150}]}>Seu assistente literário</Text>
      <Text style={[styles.texto, {fontSize: 17, color: '#8D8E96', top: -155}]}>Organize suas leituras e leia mais!</Text>
      <View style={styles.viewLinha}>
        <Image source={primeiraImagem} style={[styles.imagemCirculo, {marginRight: 10, marginTop: 4}]} />
        <Image source={segundaImagem} style={[styles.imagemCirculo, {marginRight: 10, marginTop: 4}]}/>
        <Image source={terceiraImagem} style={[styles.imagemCirculo, {marginRight: 10, marginTop: 4}]}/>
      </View>

      <Text style={[styles.texto, {fontWeight: 'bold', fontSize: 18, top: 10}]}>Sua rede social literária</Text>
      <Text style={[styles.texto, {fontSize: 18, color: '#8D8E96', top: 5}]}>Mais de 10 milhões de leitores!</Text>
      <Text style={[styles.texto, {fontSize: 18, color: '#2672a4'}]}>Dúvidas? Veja como funciona.</Text>



      <StatusBar style="auto" />
    </View>
    )
}