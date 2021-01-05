import React from 'react'

const Event = ({ event }) => {
    // const image = 'https://www.albayan.ae/polopoly_fs/1.3715043.1575134650!/image/image.jpg'

    return (
        <div className='event'>
            <div className='event__img' style={{ backgroundImage: `url(${event.image})` }}>

            </div>
            {/* <img src='https://www.albayan.ae/polopoly_fs/1.3715043.1575134650!/image/image.jpg' alt='logo' /> */}
            <div className='event__content'>
                <h3 className='event__title' > {event.title}</h3>
                <p className='event__desc' > {event.desc} </p>
            </div>
        </div>
    )
}

export default Event