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
            <PhotoBox name='Sarkhan Abdullayev' title='Programmer. Creative. Innovator' description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque' avatar={logo} />
            <Link to='inner'>{<Button text='Know more' />}</Link>
        </motion.section >
    )
}

export default Home