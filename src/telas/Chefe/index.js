import * as React from 'react';
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity, Image } from 'react-native';

import adicionar from '../../../assets/Adicionar.png';
import atualizar from '../../../assets/Atualizar.png';
import visualizar from '../../../assets/Visualizar.png';
import visualizarTodos from '../../../assets/VisualizarTodos.png';
import excluir from '../../../assets/Excluir.png';
import Voltar from '../../../assets/Voltar.png';


export default function Chefe({ navigation }){
    

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
            <View style={estilos.options}>

                <TouchableOpacity style={estilos.botao}>
                    <Image
                        source={adicionar}
                        style={estilos.img}
                    />
                    <Text style={estilos.textoBotao}>Adicionar Receita</Text>
                </TouchableOpacity>


                <TouchableOpacity style={estilos.botao}>
                    <Image
                        source={atualizar}
                        style={estilos.img}
                    />
                    <Text style={estilos.textoBotao}>Atualizar Receita</Text>
               </TouchableOpacity>

               <TouchableOpacity style={estilos.botao}>
                    <Image
                        source={visualizar}
                        style={estilos.img}
                    />
                    <Text style={estilos.textoBotao}>Visualizar Receita</Text>
               </TouchableOpacity>

               <TouchableOpacity style={estilos.botao}>
                    <Image
                        source={visualizarTodos}
                        style={estilos.img}
                    />
                    <Text style={estilos.textoBotao}>Visualizar Todos</Text>
               </TouchableOpacity>

               <TouchableOpacity style={estilos.botao}>
                    <Image
                        source={excluir}
                        style={estilos.img}
                    />
                    <Text style={estilos.textoBotao}>Excluir Receita</Text>
               </TouchableOpacity>

               

            </View>
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
        
        
    },
    
    options:{
        width:"100%",
        height:"80%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    botao:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F6D633",
        padding:5,
        marginVertical: 10,
        borderRadius: 10,
        width: 200,
        
    },

    img:{
        width:40,
        height:30,
        
    },

    textoBotao:{
        color:"#FFFFFF",
        fontWeight:"bold",
        fontSize: 16,
        textAlign:"center",
    }
    
   
});
