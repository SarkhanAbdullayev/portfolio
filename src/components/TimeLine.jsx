import React, { useEffect } from 'react'
import Info from './Info'
import { useSelector, useDispatch } from 'react-redux'
import { getEducation } from '../redux/actions/educationAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const textAnimation = {
    hidden: custom => ({
        x: custom % 2 === 0 ? -100 : 100,
        opacity: 0
    }),
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    }),
}

const LoadingBox = () => (
    <div className="loadingAnimate-box">
        <FontAwesomeIcon className='loadingAnimate' icon={faSyncAlt} color='#26C17E' />
    </div>
)

const ErrorBox = () => (
    <div className="error">
        <p>Something went wrong: please review your server connection</p>
    </div>
)

const TimeLine = () => {

    const { data, loading } = useSelector(state => state.educationReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEducation())
        // eslint-disable-next-line
    },[])

    return (
        <div
            /* initial='hidden'
            whileInView='visible'
            viewport={{ once: true }} */
            className="timeline"
        >   <h1>{loading}</h1>
            <h2 className='timeline-title'>Education</h2>
            {
                loading ? <LoadingBox /> :
                    data ? <ul className="timeline-list">
                        {data.map((event, i) => (
                            <li
                                custom={i} variants={textAnimation} key={i}>
                                <div className="timeline-date">{event.date}</div>
                                <div className="general-event timeline-event">
                                    <Info title={event.title} text={event.text} />
                                </div>
                            </li>
                        ))}
                    </ul> : <ErrorBox />
            }
        </div>
    )
}

export default TimeLine