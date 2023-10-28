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
import {Button} from '../components/Button'
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
                        content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque'
                    />
                </Element>
                <Element name='Education'>
                    <TimeLine data={[
                        { "date": 2001, "title": "Title 0", "text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n" }, { "date": 2000, "title": "Title 1", "text": "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n" }, { "date": 2012, "title": "Title 2", "text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n" }, { "date": 2015, "title": "Title 2", "text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n" }, { "date": 2023, "title": "Title 2", "text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n" }
                    ]} />
                </Element>
                <Element name='Experience'><Expertise data={[
                    {
                        date: '2013-2014',
                        info: {
                            company: 'Google',
                            job: 'Front-end developer / php programmer',
                            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil'
                        }
                    },
                    {
                        date: '2012',
                        info: {
                            company: 'Twitter',
                            job: 'Web developer',
                            description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim'
                        }
                    }
                ]} /></Element>
                <Element name='Skills'><Skills /></Element>
                <Element name='Portfolio'><Portfolio /></Element>
                <Element name='Contacts'><Address /></Element>
                <Element name='Feedbacks'><Feedback data={[
                    { feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ', reporter: { photoUrl: 'https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png', name: 'John Doe', citeUrl: 'https://www.citeexample.com' } }, { feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ', reporter: { photoUrl: 'https://www.pngfind.com/pngs/m/624-6248129_jennifer-lawrence-png-jennifer-lawrence-4-k-transparent.png', name: 'Jennifer Lawrence', citeUrl: 'https://www.citeexample.com' } }
                ]} /></Element>
                <Link
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