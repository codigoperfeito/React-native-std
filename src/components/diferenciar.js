import React from 'react'
import {Text, Platform} from 'react-native'
import Estilo from '../components/estilo'
        
export default props => {
    if(Platform.OS === 'ios'){
        return <Text style={Estilo.txtG}>IOS</Text>
    }else if (Platform.OS === 'android') {
        return <Text style={Estilo.txtG}>ANDROID</Text>
    }else {
        return <Text style={Estilo.txtG}>EITA</Text>
    }
}