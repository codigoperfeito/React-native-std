import React,{useState} from 'react'
import Filho from './Filho'
import {Text} from 'react-native'
import Estilo from '../estilo'
        
export default props => {
    function exibirNumero(numero,texto) {
        setNumb(numero)
        setText(texto)
    }
    const [numb,setNumb] = useState(0)
    const [text,setText] = useState('')
        
    return(
        <>
            <Text style={Estilo.txtG}>{text} {numb}</Text>
            <Filho 
                min={10}
                max={40}
                funcao={exibirNumero}
            />
        </>
    )
}