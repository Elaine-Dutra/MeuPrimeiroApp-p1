import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    viewContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        margin: 60
    },
    logoSkoob:{
        width: 250,
        height: 230,
        marginBottom: 350
    },

    botaoEntrar:{
        backgroundColor: 'white',
        borderColor: '#2672a4',
        borderWidth: 1,
        borderRadius: 128,
        marginTop: -90,
        paddingTop: 2,
        paddingBottom: 4,
        paddingLeft: 100,
        paddingRight: 100,
        top: -250
                
    },

    texto:{
        textAlign: "center",
    },

    viewLinha:{
        flexDirection: 'row',
        borderColor: '#2672a4',
        marginTop: -90,
        top: -80
       
    },

    imagemCirculo:{
        borderColor: '#2672a4',
        borderWidth: 3,
        borderRadius: 40,
        width: 40,
        height: 40,
        marginBottom: -90,
        top: 30
        
    }
})