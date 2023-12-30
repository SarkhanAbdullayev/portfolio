import React from 'react'

import epamimg from '../assets/images/epamcert.png'
import techcert from '../assets/images/techcert.png'

const certificatesData = [
    { title: 'Epam / UpSkill', img: epamimg, link: 'https://certificates.epam.com/certificates/f5b5807f-6459-442b-9836-d331efdbd633' },
    { title: 'Tech Academy', img: techcert, link: 'https://www.tech.edu.az/certificate/2023TAAZ00323/' }
]

const Certificates = () => {
    return (
        <section className='certificates-section'>
            <h2>Certificates</h2>
            <ul className="certificates-container">
                {certificatesData.map(({title, img, link}, i) => (
                    <li className="filter-item">
                        <img src={img} alt="card" />
                        <div className="portfolio-info">
                            <h2>{title}</h2>
                            <a className='view-link' target="_blank" rel="noreferrer" href={link}>Show accreditation</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Certificates