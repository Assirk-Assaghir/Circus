import React from "react"
import "./galleryItem.css"

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

const GalleryItem = () => {
    let arrayOne = array.slice(0, Math.floor(array.length / 3) + 1)
    let arrayTwo = array.slice(Math.floor(array.length / 3), 2 * Math.floor(array.length / 3) + 1)
    let arrayThree = array.slice(2 * Math.floor(array.length / 3))
    return (
        <div className="row">
            <div className="column">
                {
                    arrayOne.map(image => {
                        return (
                            <img src={image} alt="" />
                        )
                    })
                }
            </div>

            <div className="column">
                {
                    arrayTwo.map(image => {
                        return (
                            <img src={image} alt="" />
                        )
                    })
                }
            </div>
            <div className="column">
                {
                    arrayThree.map(image => {
                        return (
                            <img src={image} alt="" />
                        )
                    })
                }
            </div>
        </div>

    )
}
export default GalleryItem