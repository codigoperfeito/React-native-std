import React, {useState} from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import ContadorDisplay from './contadorDisplay'
import ContadorButton from './contadorButton'
        
export default props => {    
    const [numb,setNumb] = useState(0)
    function exibirNumero(numb) {
        setNumb(numb)
    }    
    const inc = () => setNumb(numb + 1)
    const dec = () => setNumb(numb - 1)
    return(
        <>        
            <Text style={Estilo.txtG}>
                CONTADOR
            </Text>
            <ContadorDisplay numb={numb}/>
            <ContadorButton inc={inc} dec={dec}/>
        </>
    )
}