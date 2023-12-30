import React from 'react'
import card1 from '../assets/images/tellopng.png'
import card2 from '../assets/images/zplayerpng.png'
import card3 from '../assets/images/todopng.png'
import card4 from '../assets/images/iptrackerpng.png'
import quantubytepng from '../assets/images/quantubytepng.png'
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
        { id: 1, category: 'ui', img: card1, title: 'Tello', description: 'E-Commerce web site', link: 'https://tello.netlify.app/' , repo : 'https://github.com/SarkhanAbdullayev/project-ecommerce'},
        { id: 2, category: 'ui', img: quantubytepng, title: 'Quantubyte Technologies', description: 'Quantubyte Technologies', link: 'https://quantubyte.com/' },
        { id: 3, category: 'ui', img: card2, title: 'Z-Player', description: 'Music Player', link: 'https://z-player.netlify.app/' , repo : 'https://github.com/SarkhanAbdullayev/Music-Player'},
        { id: 4, category: 'ui', img: card3, title: 'To Do List', description: 'Todo list', link: 'https://sarkhanabdullayev.github.io/todolist/', repo : 'https://github.com/SarkhanAbdullayev/SarkhanAbdullayev.github.io/tree/main/todolist' },
        { id: 5, category: 'ui', img: card4, title: 'Ip Tracker', description: 'Ip Tracker', link: 'https://sarkhanabdullayev.github.io/ipTracker/' , repo : 'https://github.com/SarkhanAbdullayev/SarkhanAbdullayev.github.io/tree/main/ipTracker'},
    ]


    //const [activeTab, setActiveTab] = useState('ui');
    //const [filteredData, setFilteredData] = useState(data)

    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    //     const newData = tab === 'all' ? data : data.filter(el => el.category === tab);
    //     setFilteredData(newData);
    // };

    return (
        <section
            className='portfolio-section'>
            <h2>Portfolio</h2>
            {/* <ul className="tabs">
                <li className={activeTab === 'all' ? 'active' : ''} onClick={() => handleTabClick('all')}>
                    <span> All </span>
                </li>
                <li className={activeTab === 'ui' ? 'active' : ''} onClick={() => handleTabClick('ui')}>
                    <span> Ui </span>
                </li>
                <li className={activeTab === 'code' ? 'active' : ''} onClick={() => handleTabClick('code')}>
                    <span> Code </span>
                </li>
            </ul> */}
            <ul className="filter-container"  >
                <AnimatePresence initial={true}>
                    {data.map(({ id, img, title, description, link, linkText, repo }) => (
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
                                <a className='view-link' target="_blank" rel="noreferrer" href={link}>View project</a>
                                <a  target="_blank" rel="noreferrer" href={repo}>{repo && 'View source code'}</a>
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </section>
    )
}

export default Portfolio