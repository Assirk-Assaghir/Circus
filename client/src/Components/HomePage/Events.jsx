import React, { useState, useEffect } from 'react'
import Event from './Event'

const Events = () => {
    const [events, setEvents] = useState([])

    return (
        <div className='events'>
            <Event />
        </div>
    )
}

export default Events