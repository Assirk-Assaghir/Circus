import React, { useState, useEffect } from 'react'

import './styles.css'

const EventDetails = ({ match }) => {
    const id = match.params.id
    const [event, setEvent] = useState('')
    console.log(event)


    useEffect(() => {
        getEvent({ id })
    }, [id])

    const getEvent = (obj) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://127.0.0.1:8000/events/details', requestOptions)
            .then(response => response.json())
            .then(event => setEvent(event))
    }

    return (
        <div className='evDetails'>
            <div className='evDetails__image' style={{ backgroundImage: `url(${event.image})` }}></div>
            <h1>{event.title}</h1>
            <pre>{event.desc}</pre>

        </div>
    )
}

export default EventDetails