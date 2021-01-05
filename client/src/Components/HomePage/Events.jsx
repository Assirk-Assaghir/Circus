import React, { useState, useEffect } from 'react'
import Event from './Event'
import Pagination from './Pagination'

const Events = () => {
    const [events, setEvents] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [eventsPerPage] = useState(3)

    console.log(events)
    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {
        fetch('http://127.0.0.1:8000/events/')
            .then(response => response.json())
            .then(events => setEvents(events))
    }

    const indexOfLastPost = currentPage * eventsPerPage
    const indexOfFirstPost = indexOfLastPost - eventsPerPage
    const currentEvents = events.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='events'>
            {
                currentEvents.map((event, i) => <Event key={i} event={event} />)
            }
            <Pagination
                eventsPerPage={eventsPerPage}
                totalEvents={events.length}
                paginate={paginate}
            />
        </div>
    )
}

export default Events