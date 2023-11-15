import React from 'react'
import { Link } from 'react-scroll'
import Box from '../components/Box'
import TimeLine from '../components/TimeLine'
import Expertise from '../components/Expertise'
import Address from '../components/Address'
import Feedback from '../components/Feedback'
import Portfolio from '../components/Portfolio'
import Panel from '../components/Panel'
import { Element } from 'react-scroll'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'


const Inner = () => {
    return (
        <motion.div
            className="inner"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <Panel />
            <div className="wrapper">
                <Element name='About me'>
                    <Box
                        title='About me'
                        content="Hello there! I'm dedicated Front-End Developer with a genuine passion for creating exceptional digital experiences. I believe that the web is a canvas waiting to be painted, and I'm the artist with a toolkit of HTML, CSS, and JavaScript. With a keen eye for design, I pay meticulous attention to detail, ensuring that every pixel and line of code serves a purpose. I take pride in transforming concepts into user-friendly, aesthetically pleasing websites that not only look great but also function seamlessly. My commitment to staying up-to-date with the latest web technologies and design trends allows me to deliver modern, responsive, and accessible websites. I'm constantly seeking new challenges and opportunities to grow as a developer and as a creator. Thank you for visiting my portfolio, and I hope you enjoy exploring my work. If you have a project in mind or just want to chat about the web, feel free to reach out. Let's bring your digital dreams to life!"
                    />
                </Element>
                <Element name='Education'>
                    <TimeLine />
                </Element>
                {/* <Element name='Experience'>
                    <Expertise data={[
                        {
                            date: '2014-2014',
                            info: {
                                company: 'Servix service',
                                job: 'Programmer',
                                description: 'Troubleshooting laptops and tablets. Software installation .'
                            }
                        }
                    ]} />
                </Element> */}
                <Element name='Skills'><Skills /></Element>
                <Element name='Portfolio'><Portfolio /></Element>
                <Element name='Contacts'><Address /></Element><Link
                    className='upToBottom'
                    to='About me'
                    spy={true} smooth={true} offset={-40} duration={800}
                >
                    <Button icon={<FontAwesomeIcon icon={faAngleUp} color='white' id='upToIcon' />} />
                </Link>
            </div>
        </motion.div>

    )
}

export default Inner