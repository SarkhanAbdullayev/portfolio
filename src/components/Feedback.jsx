import React from 'react'
import Info from './Info'

const Feedback = ({ data }) => {
    return (
        <section className='feedback-section'>
            <h2>Feedbacks</h2>
            <ul className="feedback">
                {data.map((feed, i) => (
                    <li key={i}>
                        <blockquote>
                            <Info text={feed.feedback}/>
                            <div className="feedback-reporter">
                                <img className="feedback-reporter-photo" src={feed.reporter.photoUrl} alt="Reporter" />
                                <cite className='feedback-repoerter-info'>
                                    {feed.reporter.name} <a className='feedback-reporter-cityUrl' href={feed.reporter.cityUrl}>somesite.com</a>
                                </cite>
                            </div>
                        </blockquote>
                    </li>
                ))}

            </ul>

        </section>
    )
}

export default Feedback