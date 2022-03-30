import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// import Primeiro from './components/primeiro'
// import CompPadrao, {Comp1,Comp2} from './components/Multi'
// import MinMax from './components/MinMax';
// import Aleatorio from './components/aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/botao'
// import Contador from './components/contador'
// import Pai from './components/direta/pai'
// import PaiIndireto from './components/indireta/Pai'
// import ContadorV2 from './components/contador/contadorV2';
// import Diferenciar from './components/diferenciar';
import ParImpar from './components/parImpar';


export default () => (
    <SafeAreaView style={style.App}>
        <ParImpar num={2}/>
        {/*
        <Diferenciar/>
        <ContadorV2 />
        <PaiIndireto/>
        <Pai/>
        <Contador inicial={100} prox={13}/>
        <Contador/>
        <Botao/>
        <Titulo principal='Cadastro Produto' secundario='Tela de cadastro'/> 
        <Aleatorio min={10} max={15}/>
        <MinMax min={40} max={60}/>
        <MinMax min={50} max={90}/>
        <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </SafeAreaView>
)
const style = StyleSheet.create({
    App:{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    }
}) 