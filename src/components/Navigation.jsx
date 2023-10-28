import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const tabs = ['About me', 'Education', 'Experience', 'Skills', 'Portfolio', 'Contacts', 'Feedbacks'];
const icons = [faUser, faGraduationCap, faPen, faGem, faSuitcase, faLocationArrow, faComment];

const Navigation = () => {
    return (
        <div className="tabs">
            {tabs.map((tab, i) => (
                <Link
                    to={tabs[i]}
                    className='tab'
                    key={i}
                    spy={true} smooth={true} offset={-40} duration={800}
                >
                    <FontAwesomeIcon icon={icons[i]} className='tab-icon' />
                    <p className='tab-text'>{tab}</p>
                </Link>
            ))}
        </div>
    )
}

export default Navigation