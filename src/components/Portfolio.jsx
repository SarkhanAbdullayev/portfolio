import React from 'react'
import card1 from '../assets/images/tellopng.png'
import card2 from '../assets/images/zplayerpng.png'
import card3 from '../assets/images/todopng.png'
import card4 from '../assets/images/iptrackerpng.png'
import tellocodeimg from '../assets/images/tellocode.png'
import musiccodeimg from '../assets/images/musiccode.png'
import todocodeimg from '../assets/images/todocode.png'
import ipcodeimg from '../assets/images/ipcode.png'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const textAnimation = {
    hidden: () => ({
        transition: { delay: 0.1 },
        scale: 0.5,
        opacity: 0
    }),
    visible: () => ({
        transition: { delay: 0.5 },
        scale: 1,
        opacity: 1
    }),
}
const Portfolio = () => {

    const data = [
        { id: 1, category: 'ui', img: card1, title: 'Tello', description: 'E-Commerce web site', link: 'https://tello.netlify.app/', linkText: 'View source' },
        { id: 2, category: 'ui', img: card2, title: 'Z-Player', description: 'Music Player', link: 'https://z-player.netlify.app/', linkText: 'View source' },
        { id: 3, category: 'ui', img: card3, title: 'To Do List', description: 'Todo list', link: 'https://sarkhanabdullayev.github.io/todolist/', linkText: 'View source' },
        { id: 4, category: 'ui', img: card4, title: 'Ip Tracker', description: 'Ip Tracker', link: 'https://sarkhanabdullayev.github.io/ipTracker/', linkText: 'View source' },
        { id: 5, category: 'code', img: tellocodeimg, title: 'Tello', description: 'E-Commerce web site', link: 'https://github.com/SarkhanAbdullayev/project-ecommerce', linkText: 'View source' },
        { id: 6, category: 'code', img: musiccodeimg, title: 'Z-Player', description: 'Music Player', link: 'https://github.com/SarkhanAbdullayev/Music-Player', linkText: 'View source' },
        { id: 7, category: 'code', img: todocodeimg, title: 'To Do List', description: 'Todo list', link: 'https://github.com/SarkhanAbdullayev/SarkhanAbdullayev.github.io/tree/main/todolist', linkText: 'View source' },
        { id: 8, category: 'code', img: ipcodeimg, title: 'Ip Tracker', description: 'Ip Tracker', link: 'https://github.com/SarkhanAbdullayev/SarkhanAbdullayev.github.io/tree/main/ipTracker', linkText: 'View source' },
    ]


    const [activeTab, setActiveTab] = useState('all');
    const [filteredData, setFilteredData] = useState(data)

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        const newData = tab === 'all' ? data : data.filter(el => el.category === tab);
        setFilteredData(newData);
    };

    return (
        <section
            className='portfolio-section'>
            <h2>Portfolio</h2>
            <ul className="tabs">
                <li className={activeTab === 'all' ? 'active' : ''} onClick={() => handleTabClick('all')}>
                    <span> All </span>
                </li>
                <li className={activeTab === 'ui' ? 'active' : ''} onClick={() => handleTabClick('ui')}>
                    <span> Ui </span>
                </li>
                <li className={activeTab === 'code' ? 'active' : ''} onClick={() => handleTabClick('code')}>
                    <span> Code </span>
                </li>
            </ul>
            <ul className="filter-container"  >
                <AnimatePresence initial={true}>
                    {filteredData.map(({ id, img, title, description, link, linkText }) => (
                        <motion.li
                            custom={id}
                            variants={textAnimation}
                            key={id}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="filter-item"
                        >
                            <img src={img} alt="card" />
                            <div className="portfolio-info">
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <a target="_blank" href={link}>{linkText}</a>
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </section>
    )
}

export default Portfolio