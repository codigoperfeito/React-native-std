import React from 'react'
import {Text} from 'react-native'

export default (props) => {
    var a = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <Text>O valor minimo é {props.min} valor maximo é {props.max} e o valor aleatório entre os 2 é {a}</Text>
    )

}