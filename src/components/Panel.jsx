import React from 'react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/profile.png'
import PhotoBox from '../components/PhotoBox'
import {Button} from './Button'
import Navigation from './Navigation'


const Panel = () => {

    const [hidden, setHidden] = useState(false);

    const panelSectionRef = useRef('.panel-section');

    const handleBurgerClick = (e) => {
        setHidden(!hidden);
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.toggle('wrapper-fulled');
    };

    return (
        <div ref={panelSectionRef} style={{transform: `translateX(${hidden ? -100 : 0}%)`}} className="panel-section">
            <div className="panel-wrapper">
                <div className="burger" onClick={(e)=>handleBurgerClick(e)} >
                    <FontAwesomeIcon icon={faBars} color='white' />
                </div>
                <div className='panel'>
                    <PhotoBox name='Sarkhan Abdullayev' avatar={logo} />
                    <Navigation />
                </div>
                <Link className='backToHome' to='/'><Button icon={<FontAwesomeIcon icon={faChevronLeft} color='white' />} text='Go back' /></Link>
            </div>
        </div>
    )
}

export default Panel