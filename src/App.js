import React from 'react';
import {SafeAreaView, Text} from 'react-native';


import CompPadrao, {Comp1,Comp2} from './components/Multi'
import Primeiro from './components/primeiro'

export default () => (
    <SafeAreaView>
        <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>
    </SafeAreaView>
)