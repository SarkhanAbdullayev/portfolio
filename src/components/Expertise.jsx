import React from 'react'

const Expertise = ({ data }) => {
    return (
        <div className="expertise">
            <h2>Experience</h2>
            <ul className="expertise-list">
                {data.map((experience, i) => (
                    <li key={i}>
                        <div className="expertise-list-date">
                            <h3>{experience.info.company}</h3>
                            <span className="date">{experience.date}</span>
                        </div>
                        <div className="expertise-list-info">
                            <h3>{experience.info.job}</h3>
                            <p>{experience.info.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Expertise