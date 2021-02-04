import React, { useState, useEffect } from "react"
import "./galleryItem.css"
import { withRouter } from "react-router-dom"
const array = [
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/38867/pexels-photo-38867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1389994/pexels-photo-1389994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/129634/pexels-photo-129634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]

const GalleryItem = ({ match }) => {
    const [images, setImages] = useState([])
    console.log(images)
    useEffect(() => {
        getImages()
    }, [])

    const getImages = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: match.params.id })
        };
        fetch('http://127.0.0.1:8000/gallery/details', requestOptions)
            .then(response => response.json())
            .then(data => setImages(data.images));
    }


    let arrayOne = images && images.slice(0, Math.floor(images.length / 3))
    let arrayTwo = images && images.slice(Math.floor(images.length / 3), 2 * Math.floor(images.length / 3))
    let arrayThree = images && images.slice(2 * Math.floor(images.length / 3))
    console.log(1, arrayThree)
    return (
        <div className="row" style={{ marginTop: '100px' }}>
            <div className="column">
                {
                    images.length >= 3 && arrayOne.map((image, i) => {
                        return (
                            <img src={image.image} key={i} alt={image.title} />
                        )
                    })
                }
            </div>

            <div className="column">
                {
                    images.length >= 2 && arrayTwo.map((image, i) => {
                        return (
                            <img src={image.image} key={i} alt={image.title} />
                        )
                    })
                }
            </div>
            <div className="column">
                {
                    images.length >= 1 && arrayThree.map((image, i) => {
                        return (
                            <img src={image.image} key={i} alt={image.title} />
                        )
                    })
                }
            </div>
        </div>

    )
}
export default withRouter(GalleryItem)