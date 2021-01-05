import React from "react"
import "./gallery.css"


const results = [
    {
        title: "Mountain View",
        copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        btn: "View Trips",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mountain View",
        copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        btn: "View Trips",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mountain View",
        copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        btn: "View Trips",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mountain View",
        copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        btn: "View Trips",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
        title: "Mountain View",
        copy: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
        btn: "View Trips",
        image: "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
]
const Gallery = () => {

    return (
        <main class="page-content">
            {
                results.map((result, i) => {
                    return (

                        <div class="card" key={i} style={{ backgroundImage: `url(${result.image})` }}>
                            <div class="content">
                                <h2 class="title">{result.title}</h2>
                                <p class="copy">{result.copy}</p>
                                <button class="btn">{result.btn}</button>
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}
export default Gallery