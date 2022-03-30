import React from 'react'
import {Text} from 'react-native'
import Estilo from './components/Estilo'
        
export default ({num = 0}) => {
        if (props.num === '1') {
            return(
                <Text style={Estilo.txtG}>
                    Impar
                </Text>
            )
        } else {
            return(
                <Text style={Estilo.txtG}>
                    Par
                </Text>
            )            
        }
   
}