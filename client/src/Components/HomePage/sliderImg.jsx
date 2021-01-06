import React, { useState, useEffect } from 'react'

export default function SliderImg() {
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        getImg()
    }, [])


    const getImg = () => {
        fetch('http://127.0.0.1:8000/images/')
            .then(response => response.json())
            .then(events => setImgs(events))
    }
    console.log('a', imgs)
    return (
        <div>
            { imgs.map((img, i) => (
                <img src={img.imgURL} key={i} />
            ))}
        </div>
    )
}
