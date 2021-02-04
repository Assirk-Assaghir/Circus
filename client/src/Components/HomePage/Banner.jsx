import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {
        fetch('http://127.0.0.1:8000/events/')
            .then(response => response.json())
            .then(events => setEvents(events))
    }

    return (
        <div className='banner'>
            <div className='events'>
                <h2 style={{ margin: '0px' }}>Recent Events</h2>
                {
                    events && events.map((event, i) => {
                        return (
                            <Link to={`/event/${event.id}`} style={{ textDecoration: 'none' }}>
                                <p>{event.title} &nbsp; &nbsp;<span className='event__date'>{`(${event.date})`}</span> </p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Banner