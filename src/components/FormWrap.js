import React from 'react'

const FormWrap = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                background: '#999',
                padding: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderRadius: 8
            }}>
               {children}
            </div>
        </div>
    )
}

export default FormWrap
