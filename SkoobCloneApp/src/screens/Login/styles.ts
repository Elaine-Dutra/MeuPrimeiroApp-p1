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
    botaoEntrar:{
        backgroundColor: '#2a9fe5',
        borderColor: '#2672a4',
        borderWidth: 1,
        borderRadius: 128,
        // marginTop: -90,
        paddingTop: 11,
        paddingBottom: 11,
        paddingLeft: 100,
        paddingRight: 100,
        top: 40
                
    },

    botaoEntrarComFacebook:{
        backgroundColor: '#2f447a',
        borderColor: '#2672a4',
        borderWidth: 1,
        borderRadius: 128,
        // marginTop: -90,
        paddingTop: 11,
        paddingBottom: 11,
        paddingLeft: 40,
        paddingRight: 40,
        top: -60,
                
    },

    olho:{
        top: 100,
        left: 105

    },

    coruja:{
        width: 150,
        height: 210,
        resizeMode: "contain",
        marginTop: -50
    },

    email:{
        borderWidth: 1,
        borderColor: '#bebebe',
        borderRadius: 25,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 90,
        marginBottom: -50,
        marginTop: -75
    },

    senha:{
        borderWidth: 1,
        borderColor: '#bebebe',
        borderRadius: 25,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 90,
        marginBottom: -200,

    },

    input:{
        borderWidth: 1,
        borderColor: '#bebebe',
        borderRadius: 25,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 90,
        marginBottom: 20,
    },

    texto:{
        textAlign: "center",
    },

    footer:{
        marginTop: -40,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: -50
    },

    texto3:{
        marginTop: 10
    },

    texto4:{
        borderWidth: 1,
        borderColor: '#bebebe',
        borderRadius: 25,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 20,
        paddingRight: 20
    }
})