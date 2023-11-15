import React from 'react'
import logo from '../assets/images/profile.png'
import PhotoBox from '../components/PhotoBox'
import { Link } from 'react-router-dom'
import {Button} from '../components/Button'
import { motion } from 'framer-motion'




const Home = () => {
    return (
        <motion.section
            className='main'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration : 0.1} }}
                >
            <PhotoBox name='Sarkhan Abdullayev' title='Front End Developer' description="Welcome to my portfolio! I'm Sarkhan Abdullayev, a passionate Front-End Developer dedicated to crafting stunning, user-friendly websites. With a keen eye for design and a knack for coding, I transform ideas into digital experiences. Explore my work and discover how I turn concepts into captivating online realities. Let's create the future, one pixel at a time" avatar={logo} />
            <Link to='inner'>{<Button text='Know more' />}</Link>
        </motion.section >
    )
}

export default Home