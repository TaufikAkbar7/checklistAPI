import React from 'react'
import { useHistory } from 'react-router-dom'

const Button = ({ bg, name, link }) => {
    const history = useHistory()

    return (
        <button onClick={() => history.push(link)} style={{
            padding: 10,
            background: bg,
            
        }}>
            {name}
        </button>
    )
}

export default Button
