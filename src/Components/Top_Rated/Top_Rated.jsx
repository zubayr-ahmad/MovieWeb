import React from 'react';
import { useNavigate } from 'react-router-dom'
import { imagesList } from '../../Utils/ExtraData'
import './Top_Rated.css';
function Top_Rated() {
    const navigate = useNavigate();
    
    const seeMovieDetails = (id) => {
        navigate(`/movie/${id}`)
    }
    return (
        <>
            <h1 className="top_rated__main-heading">
                Top Rated
            </h1>
            <div className="top-rated-movies-cards">
                    {imagesList.map((path, index) => (
                        <div key={index}>
                            <div className="top_rated__main-container">
                                <div className="card" >
                                    <img src={path}
                                        alt="Movie Poster"
                                    />
                                    <div className="card__overlay">
                                        <div className="icon-star">
                                            <i
                                                className="fa-solid fa-star"
                                                style={{
                                                    color: '#00ff00',
                                                    fontSize: 'xx-large'
                                                }}
                                            />
                                        </div>
                                        <div className="rating">
                                            7.8/10
                                        </div>
                                        <div className="button-detail">
                                            <button className="learn-more" onClick={()=> seeMovieDetails(index)}>
                                                <span
                                                    aria-hidden="true"
                                                    className="circle"
                                                >
                                                    <span className="icon arrow" />
                                                </span>
                                                <span className="button-text">
                                                    View Details
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__content">
                                    <a
                                        className="movie-title"
                                        href=""
                                    >
                                        Puss in boots The last wish asdlkfjlaskjflaskjflkjasdlkfj
                                    </a>
                                    <div className="movie-year">
                                        2023
                                    </div>
                                </div>
                            </div>
                        
                </div>

                    ))}
            </div>
        </ >
    )
}

export default Top_Rated
