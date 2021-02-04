import React, { useState, useEffect } from "react"
import "./gallery.css"
import GallerItem from './galleryItem'
import { Link } from "react-router-dom"

const results = [
    {
        title: "Mountain View",
        description: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mountain View",
        description: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mountain View",
        description: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mountain View",
        description: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mountain View",
        description: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
]
const Gallery = () => {
    const [galleries, setGalleries] = useState([])
    console.log(galleries)

    useEffect(() => {
        getGallaries()
    }, [])

    const getGallaries = () => {
        fetch('http://127.0.0.1:8000/gallery/')
            .then(response => response.json())
            .then(events => setGalleries(events))
    }

    return (
        <main className="page-content" style={{ marginTop: '100px' }}>
            {
                galleries && galleries.map((gal, i) => {
                    return (
                        <div className="card" key={i} style={{ backgroundImage: `url(${gal.image})` }}>
                            <div className="content">
                                <h2 className="title">{gal.title}</h2>
                                <p className="description">{gal.description}</p>
                                <Link to={`gallery/${gal.id}`}>
                                    <button className="btn">View Trips</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }


        </main>
    )
}
export default Gallery