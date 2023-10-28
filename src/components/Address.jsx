import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'

const Address = () => {
    return (
        <section id='address' className='address-section'>
            <h2 className='contacts-title'>Contacts</h2>
            <address className="address">
                <dl>
                    <dt><FontAwesomeIcon icon={faPhone} className='contact-icon'/></dt>
                    <dd><a className='uri' href="tel:+994557606264">+994 55 760 62 64</a></dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faEnvelope} className='contact-icon'/></dt>
                    <dd><a className='uri' href="mailto:office@kamsolutions.pl">office@kamsolutions.pl</a></dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faTwitter} className='contact-icon'/></dt>
                    <dd>
                        <h3>Twitter</h3>
                        <a href="https://twitter.com/wordpress">https://twitter.com/wordpress</a>
                    </dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faFacebookF} className='contact-icon'/></dt>
                    <dd>
                        <h3>Facebook</h3>
                        <a href="https://www.facebook.com/facebook">https://www.facebook.com/facebook</a></dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faSkype} className='contact-icon'/></dt>
                    <dd>
                        <h3>Skype</h3>
                        <a href="skype:kamsolutions.pl">kamsolutions.pl</a>
                    </dd>
                </dl>
            </address>
        </section>
    )
}

export default Address