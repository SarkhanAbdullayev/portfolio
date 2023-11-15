import React from 'react'
import Info from './Info'
import { motion } from 'framer-motion'

const textAnimation = {
    hidden: custom => ({
        x: -100 ,
        opacity: 0
    }),
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    }),
}

const educations = [
    { "date": 2023, "title": "Epam UpSkill", "text": "Front-End Development" },
    { "date": 2022, "title": "Tech Academy", "text": "Front-End Development" },
    { "date": "2013", "title": "Azerbaijan Technical University", "text": "Electronics , Telecommunication  and  Radiotechnics engineering" }
]

const TimeLine = () => {

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="timeline"
        >
            <h2 className='timeline-title'>Education</h2>
            <ul className="timeline-list">
                {educations.map((event, i) => (
                    <motion.li
                        custom={i} variants={textAnimation} key={i}>
                        <div className="timeline-date">{event.date}</div>
                        <div className="general-event timeline-event">
                            <Info title={event.title} text={event.text} />
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default TimeLine