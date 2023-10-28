import React from 'react'

const Info = ({title,  text }) => {
    return (
        <div className="info">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Info