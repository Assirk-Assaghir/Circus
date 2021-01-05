import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {
    return (
        <div className="blog-card">
            <div className="meta">
                <div className="photo" style={{ backgroundImage: `url(${event.image})` }} ></div>
                <ul className="details">
                    <li className="author">{event.author}</li>
                    <li className="date">{event.date}</li>
                </ul>
            </div>
            <div className="description">
                <h1>{event.title}</h1>
                {/* <h2>Opening a door to the future</h2> */}
                <p className='event__desc'> {event.desc}</p>
                <p className="read-more">
                    <Link >Read More</Link>
                </p>
            </div>
        </div>
    )
}

export default Event