import React from 'react'
import {Button} from 'react-native'

        
export default props => {
    function gerarNumero(min, max) {
        const fator = max - min + 1
        return (
            parseInt(Math.random() * fator) + min
        )
    }
        
    return(
        <Button />
    )
}