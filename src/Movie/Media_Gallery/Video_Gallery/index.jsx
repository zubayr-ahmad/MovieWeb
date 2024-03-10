import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function getRandomElements(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function index() {
    return (
        <div id="video_gallery_container">
            <h1 id='video_gallery__videos_heading'>Videos</h1>
            
        </div>
    )
}

export default index
