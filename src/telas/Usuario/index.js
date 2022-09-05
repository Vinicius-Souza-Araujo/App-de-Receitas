import * as React from 'react';
import { View, Text, StyleSheet, LayoutAnimation,TouchableOpacity, Image } from 'react-native';
import Voltar from '../../../assets/Voltar.png';


import Navegar from '../Componentes/Navegar';
export default function Usuario({ navigation }){
    
   
    const animacao = {
        duration:500,
        create:{
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
            springDampig: 0.7
        }
    }
   
    LayoutAnimation.configureNext(animacao);

    function escolhaInicial() {
        navigation.navigate("EscolhaInicial");
      } 
    return(
       <View style={estilos.Box}>
        <View style={estilos.cabecalho}>
        
     
        <TouchableOpacity onPress={escolhaInicial}>
        <Image source={Voltar} style={estilos.img} />
        </TouchableOpacity>
        
       </View>
       
       
        <Navegar />
       </View>
    );
}

const estilos = StyleSheet.create({
    
    Box:{
        width:"100%",
        height:"100%",
        backgroundColor:"#f5f5f5",
    },
    
    cabecalho:{
        backgroundColor: "#F6D633",
        width:"100%",
        height:40,
        
        borderTopRadius:55,
        borderLeftRadius:25,
        bordermRightRadius:25,
        display:'flex',
        justifyContent:'center',
        
        
        
        
       
        
    },

    
    img:{
        width:50,
        height:40,
        
    },

    boxTitulo:{
        height:"100%",
        display:"flex",
        justifyContent:"center",
        // paddingLeft:15,
        
        
    },

    titulo:{
        color: "#FFFFFF",
        fontWeight:"bold",
        fontSize: 23,
        textAlign:'center',
        
        
    }
   
});
