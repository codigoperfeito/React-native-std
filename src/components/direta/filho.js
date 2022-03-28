import React from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'

export default props => (
        <>
            <Text style={Estilo.txtG}>{props.a}</Text>
            <Text style={Estilo.txtG}>{props.b}</Text>
        </>
)
