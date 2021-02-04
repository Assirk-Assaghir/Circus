import React, { useEffect, useState } from 'react'
import './styles.css'

const AboutUs = () => {

    const [about, setAbout] = useState([])

    useEffect(() => {
        let options = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        };
        let path = `http://127.0.0.1:8000/aboutUs/`;
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                // console.log(data)
                setAbout(data)
            })
    }, [])

    return (
        <div className="main" style={{ marginTop: '100px' }}>
            <div className="container">
                {about.map((abt, i) => (
                    <div key={i} className="about">
                        <div className={i % 2 === 0 ? "left" : "right"}>
                            <h1>{abt.title}</h1>
                            <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>{abt.description}</p>
                        </div>
                        <div className={i % 2 !== 0 ? "left" : "right"}>
                            <img alt={abt.alt} src={abt.img} className='image' />
                            <br />
                            <small>{abt.alt}</small>
                        </div>
                        <div className="clear"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUs