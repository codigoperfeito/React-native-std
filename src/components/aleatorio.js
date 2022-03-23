import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default ({min,max}) => {
    var a = Math.floor(Math.random() * (max - min) + min)
    return (
        <Text style={Estilo.txtG}>O valor minimo é {min} valor maximo é {max} e o valor aleatório entre os 2 é {a}</Text>
    )

}