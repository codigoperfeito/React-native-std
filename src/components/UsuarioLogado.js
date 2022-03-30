import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'
import IF from './iF'
        
export default props => {
        const usuario = props.usuario || {}
    return(
        <>
            <IF test={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>Usuario Loga: </Text>
                <Text style={Estilo.txtG}>
                    {usuario.nome} - {usuario.email} 
                </Text>
            </IF>
        </>
    )
}