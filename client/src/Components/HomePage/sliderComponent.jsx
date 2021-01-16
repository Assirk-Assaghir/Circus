import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

export default function SliderComponent() {
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        getImg()
    }, [])


    const getImg = () => {
        fetch('http://127.0.0.1:8000/images/')
            .then(response => response.json())
            .then(events => setImgs(events))
    }
    // console.log('a', imgs)

    return (
        <div>
            {/* <h1>Carousel in React</h1> */}
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                // emulateTouch
                autoPlay
                useKeyboardArrows
                transitionTime={1000}
                // axis="vertical"
                // selectedItem={0}
                width="75%"
            >
                {imgs.length > 0 ? imgs.map((img, i) => (
                    <div className="slide-holder" >
                        <img
                            alt={i}
                            src={img.imgURL}
                            key={i}
                        />
                    </div>
                )) : null}
            </Carousel>
        </div>
    );
}