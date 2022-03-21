import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';


import CompPadrao, {Comp1,Comp2} from './components/Multi'
import Primeiro from './components/primeiro'


export default () => (
    <SafeAreaView style={style.App}>
        <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>
    </SafeAreaView>
)
const style = StyleSheet.create({
    App:{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 