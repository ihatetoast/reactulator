import React from 'react'

const ClrButton =(props)=> {
    return (
        <div onClick={props.handleClear}>
            {props.children}
        </div>
    )
}
export default  ClrButton