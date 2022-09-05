import * as React from 'react';
import {useState} from 'react';
import { View, Text, TouchableOpacity,  StyleSheet, LayoutAnimation} from 'react-native';


export default function EscolhaInicial({ navigation }){
   
    
    const animacao = {
        duration:500,
        create:{
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
            springDampig: 0.7
        }
    }
   
    LayoutAnimation.configureNext(animacao);

    function usuario() {
        navigation.navigate("Usuario");
      }

    function chefe() {
        navigation.navigate("Chefe");
      }

    return(
       <View style={estilos.boxPrincipal}>
        
        <View style={estilos.boxConteudo}>
            <View style={estilos.boxEscolha}>
                <Text style={estilos.Titulo}>Quem é você?</Text>
                <TouchableOpacity style={estilos.Botao} onPress={usuario}><Text style={estilos.BotaoTexto} >Usuário</Text></TouchableOpacity>
                <TouchableOpacity style={estilos.Botao} onPress={chefe}><Text style={estilos.BotaoTexto} >Chefe</Text></TouchableOpacity>
            </View>
        </View>
       </View>
    );
}

const estilos = StyleSheet.create({
    
    boxPrincipal:{
        width:"100%",
        height:"100%",
        backgroundColor:"#F5F5F5",
},
    boxConteudo:{
        
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F5F5F5",
       
        
    },

    boxEscolha:{
        padding:55,
        borderRadius:10,
        borderLeftWidth: 5,
        borderColor: '#F6D633',
    },

    Titulo:{
        textAlign: "center",
        fontSize:25,
        fontWeight:"bold",
    },
    
    Botao:{
        textAlign: "center",
        backgroundColor: '#F6D633',
        width: 170,
        marginTop: 25,
        padding: 10,
        borderRadius: 10,
        
    }, 
    
    BotaoTexto:{
        textAlign: "center",
        fontSize:25,
        fontWeight:"bold",
    },

    
   
});
