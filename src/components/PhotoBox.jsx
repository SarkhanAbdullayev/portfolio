import React from 'react'
import { motion } from 'framer-motion'

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
}
const textAnimation2 = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
}


const PhotoBox = ({ name, title, description, avatar }) => {

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="photoBox"
        >
            <img className='user-logo' src={avatar} alt="user" />
            <motion.h1 custom={1} variants={textAnimation} className='name'>{name}</motion.h1>
            <motion.h2 custom={2} variants={textAnimation2} className='title'>{title}</motion.h2>
            <motion.h3 custom={3} variants={textAnimation} className='description'>{description}</motion.h3>
        </motion.div>
    )
}

export default PhotoBox