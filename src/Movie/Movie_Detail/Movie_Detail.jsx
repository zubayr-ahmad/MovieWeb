import React from 'react'
import "./Movie_Detail.css"
import { useParams } from 'react-router-dom'
function Movie_Detail() {
    const { id } = useParams()
    console.log(id)
    return (
        <div className='container'>
            <div className="row ">
                {/* Poster image and rating section (left section) */}
                <div className="col-4 movie_detail__poster_img_container">
                    <img src='/src/assets/Images/img05.jpg' id='movie_detail__poster_img' alt='image poster'/>
                    <div id='movie_detail__poster_rating'>
                        
                        <div className="icon-star">
                            <i
                                className="fa-solid fa-star"
                                style={{
                                    color: '#00ff00',
                                    fontSize: 'x-large'
                                }}
                            />
                        </div>
                        <p>7.8</p>
                    </div>
                </div>
                {/* For a gap between the two sections */}
                <div className="col-1"></div>

                
                <div className="col-7">col-7</div>
            </div>
        </div>
    )
}

export default Movie_Detail
