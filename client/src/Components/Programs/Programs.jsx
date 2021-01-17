import React, { useEffect, useState } from 'react'
import './styles.css'

const Programs = () => {

    const [programs, setPrograms] = useState([])

    useEffect(() => {
        let options = {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },
        };
        let path = `http://127.0.0.1:8000/getPrograms/`;
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                setPrograms(data)
            })
    }, [])

    return (
        <div className="main">
            <div className="pro-container">
                {programs.map((program, i) => (
                    <div key={i} className="program">
                        <div className={i % 2 !== 0 ? "left" : "right"}>
                            <h1>{program.title}</h1>
                            <p>{program.description}</p>
                        </div>
                        <div className={i % 2 === 0 ? "left" : "right"}>
                            <img alt={program.alt} src={program.img} className='logo' />
                            <br />
                            <small>{program.alt}</small>
                        </div>
                        <div className="clear"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs