import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'
        
export default ({num = 0}) => {
        
            return(
                <>
                {num % 2 === 0
                    ?    <Text style={Estilo.txtG}>Par</Text>
                    :    <Text style={Estilo.txtG}>Impar</Text> 
                }                       
                </>
            )   
}