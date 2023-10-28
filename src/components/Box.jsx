import React from 'react'

const Box = ({ content }) => {

    return (
        <section className='info-box'>
            <h2>About me</h2>
            <div className="info-box__content">{content}</div>
        </section>
    )
}

export default Box