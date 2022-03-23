import React from "react";
import { Button } from 'react-native'

export default props => {

    function executar() {
        console.warn('Funfo paizao #01')
    }
    return (
        <>
            <Button 
                title="executar"
                onPress={executar}
            />
            <Button 
                title="executar"
                onPress={
                    () => (
                            console.warn('funfou #02 paizao')
                    )
                    
                }
            />
        </>
    )
}