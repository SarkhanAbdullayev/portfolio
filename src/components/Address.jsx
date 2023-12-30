import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
import { faSkype, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons'

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
                    <dd><a className='uri' href="mailto:office@kamsolutions.pl">sarkhan6264@gmail.com</a></dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faGithub} className='contact-icon'/></dt>
                    <dd>
                        <h3>Github</h3>
                        <a target="_blank" href="https://github.com/SarkhanAbdullayev">https://github.com/SarkhanAbdullayev</a>
                    </dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faFacebookF} className='contact-icon'/></dt>
                    <dd>
                        <h3>Facebook</h3>
                        <a target="_blank" href="https://www.facebook.com/facebook">https://www.facebook.com/syako44</a></dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faSkype} className='contact-icon'/></dt>
                    <dd>
                        <h3>Skype</h3>
                        <a href="skype:syako44@gmail.com?chat">syako44@gmail.com</a>
                    </dd>
                </dl>
                <dl>
                    <dt><FontAwesomeIcon icon={faFile} className='contact-icon'/></dt>
                    <dd>
                        <a className='downloadcv' target="_blank" href='https://drive.google.com/file/d/13dXKzL77_OCGlmgJfZda055GhpvGRcFa/view?usp=sharing'>Download resume</a>
                    </dd>
                </dl>
            </address>
        </section>
    )
}

export default Address