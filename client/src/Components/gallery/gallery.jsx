import React from "react"
import "./gallery.css"
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

    return (
        <main className="page-content">
            {
                results.map((result, i) => {
                    return (
                        <div className="card" key={i} style={{ backgroundImage: `url(${result.image})` }}>
                            <div className="content">
                                <h2 className="title">{result.title}</h2>
                                <p className="description">{result.description}</p>
                                <Link to={`gallery/${result.title}`}>
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