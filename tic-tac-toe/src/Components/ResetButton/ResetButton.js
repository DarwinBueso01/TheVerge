import React from 'react'
import { tsPropertySignature } from '@babel/types';

const ResetButton = (props) => {
    return (
        <>
            <button className="reset--button" onClick={props.onClick}>
                Reset Game!
            </button>
        </>
    )
}

export default ResetButton;