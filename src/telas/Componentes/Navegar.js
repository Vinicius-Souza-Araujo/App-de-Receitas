import * as React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import imagemSalgado from '../../../assets/Salgado.png';
import bolo from '../../../assets/Bolo.png';
import doce from '../../../assets/Doce.png';
import bebida from '../../..//assets/Bebida.png';
import saudavel from '../../../assets/Saudavel.png';

export default function Navegar(){
    
    

    return(
       <View >
            <View style={estilos.box}>
            <TouchableOpacity style={estilos.botao}>
                <Image
                    source={imagemSalgado}
                    style={estilos.img}
                />
                 <Text style={estilos.tituloBotao}>Salgados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>
                <Image
                    source={bolo}
                    style={estilos.img}
                />
                <Text style={estilos.tituloBotao}>Bolos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao}>
                <Image
                    source={doce}
                    style={estilos.img}
                />
                 <Text style={estilos.tituloBotao}>Doces</Text>
                </TouchableOpacity >
                <TouchableOpacity style={estilos.botao}>
                <Image
                    source={bebida}
                    style={estilos.img}
                />
                 <Text style={estilos.tituloBotao}>Bebidas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>
                <Image
                    source={saudavel}
                    style={estilos.img}
                />
                 <Text style={estilos.tituloBotao}>Saudável</Text>
                </TouchableOpacity>

            </View>
       </View>
    );
}

const estilos = StyleSheet.create({
    
    box:{
        display:"flex",
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        marginTop:15,
        width: '100%',
    },

    botao:{
        marginLeft:8,
    },

    tituloBotao:{
        textAlign:"center",
        fontSize: 11,
        fontWeight:"bold",
        marginTop: 5,
    },
    img:{
        width:50,
        height:55,
        borderRadius:15,

    }
    
   
});
