import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles'
import coruja from '../../../assets/coruja.png'
import { Feather } from '@expo/vector-icons';

export const Login = () => {
   return (
     <View style={styles.viewContainer}>
       <Image source={coruja} style={styles.coruja}/>
       <TextInput style={styles.email} placeholder='Email' placeholderTextColor={"gray"}/>
       <TextInput style={styles.senha} placeholder='Senha' placeholderTextColor={'gray'} />
       <Feather name="eye-off" size={24} color="#8D8E96" style={styles.olho}/>

       <Text style={[styles.texto, {color: '#2a9fe5', fontSize: 17, top: 60}]}>Esqueci minha senha</Text>
       <TouchableOpacity style={styles.botaoEntrar}><Text style={[styles.texto, {color: 'white', fontSize: 18}]}>ENTRAR</Text></TouchableOpacity>
       <Text style={[styles.texto, {color: 'black', fontSize: 20, top: -12}]}>ou</Text>
       <TouchableOpacity style={styles.botaoEntrarComFacebook}><Text style={[styles.texto, {color: 'white', fontSize: 18}]}>Entrar com o Facebook</Text></TouchableOpacity>
       <View style= {styles.footer}> 
    <Text style={[styles.texto3, {fontWeight: 'bold', fontSize: 16 }]}>Não tem cadastro?  </Text>
    <Text style={[styles.texto4, {fontSize: 17, color: '#2f82c2' }]}>Cadastre-se</Text>
    </View>

     </View>
   );
}