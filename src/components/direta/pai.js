import React from 'react'
import Filho from './filho'
        
export default () => {
    let x = 10
    let y = 100
    return(
        <>
            <Filho a={x} b={y}/>
            <Filho a={x + 10} b={y + 100}/>
        </>
    )
}