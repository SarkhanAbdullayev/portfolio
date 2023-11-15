import React from 'react';
import { motion } from 'framer-motion';


const skills = [
    { name: "Javascript", range: 85 },
    { name: "React", range: 80 },
    { name: "Html", range: 95 },
    { name: "CSS", range: 90 },
    { name: "Tailwind", range: 70 },
    { name: "Bootstrap", range: 75 },
    { name: "Git", range: 70 },
    { name: "Redux Toolkit", range: 80 },
]

const textAnimation = {
    hidden: custom => ({
        x: custom % 2 === 0 ? -100 : 100,
        opacity: 0
    }),
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
}

const Skills = () => {

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="skills-section"
        >
            <div className="skills-head">
                <h2>Skills</h2>
            </div>
            <div className="skills-list-container">
                <ul className="skills-list">
                    {skills.map(({ name, range }, i) => (
                        <motion.li custom={i} variants={textAnimation} key={i} className="skill" style={{ width: `${range}%` }}>
                            <span>{name}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className="skills-levels">
                <div className="borders">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                </div>
                <div className="levels">
                    <span className="beginner">Beginner</span>
                    <span className="proficient">Proficient</span>
                    <span className="expert">Expert</span>
                    <span className="master">Master</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
