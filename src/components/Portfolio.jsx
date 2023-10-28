import React from 'react'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import { useState } from 'react'
//import Isotope from 'isotope-layout'

const Portfolio = () => {

    const data = [
        { id: 1, category: 'ui', img: card1, title: 'project 1', description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis', link: 'https://somesite.com', linkText: 'View source' },
        { id: 2, category: 'code', img: card2, title: 'project 2', description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis', link: 'https://somesite.com', linkText: 'View source' },
        { id: 3, category: 'ui', img: card1, title: 'project 3', description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis', link: 'https://somesite.com', linkText: 'View source' },
        { id: 4, category: 'code', img: card2, title: 'project 4', description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis', link: 'https://somesite.com', linkText: 'View source' },
    ]


    const [activeTab, setActiveTab] = useState('all');
    const [filteredData, setFilteredData] = useState(data)

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        const newData = tab === 'all' ? data : data.filter(el => el.category === tab);
        setFilteredData(newData);
    };

    return (
        <section className='portfolio-section'>
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
                {filteredData.map(({ id, img, title, description, link, linkText }) => (
                    <li key={id} className="filter-item" >
                        <img src={img} alt="card" />
                        <div className="portfolio-info">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <a href={link}>{linkText}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Portfolio