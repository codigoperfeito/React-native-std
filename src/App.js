import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';


// import CompPadrao, {Comp1,Comp2} from './components/Multi'
// import Primeiro from './components/primeiro'
import MinMax from './components/MinMax';


export default () => (
    <SafeAreaView style={style.App}>
        <MinMax min={10} max={60}/>
        <MinMax min={5} max={90}/>

        {/* <CompPadrao/>
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