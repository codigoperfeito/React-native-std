import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Estilo from './estilo'

function comp () {
    return <Text style={Estilo.txtG}>Comp #Oficial </Text>
}
function Comp1 () {
    return <Text style={Estilo.txtG}>Comp #01 </Text>
}   
function Comp2 () {
    return <Text style={Estilo.txtG}>Comp #02 </Text>
}

export { Comp1,Comp2}
export default comp
