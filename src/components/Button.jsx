import React from 'react'

const Button = ({ icon, text }) => {
    return (
        <div className='button'>
            {icon}
            <p className='button__text'>{text}</p>
        </div>
    )
}

export { Button }