import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faUser,faSuitcase, faLocationArrow , faCertificate, faGem, faGraduationCap} from '@fortawesome/free-solid-svg-icons'


const tabs = ['About me', 'Education', 'Skills', 'Certificates', 'Portfolio', 'Contacts'];
/* 'Experience',faPen, */
const icons = [faUser, faGraduationCap,  faGem, faCertificate, faSuitcase, faLocationArrow];

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