import React from 'react';
import './Top_Rated.css';
function Top_Rated() {
    const imagesList = [
        "src/assets/Images/img01.jpg",
        "src/assets/Images/img02.jpg",
        "src/assets/Images/img03.jpg",
        "src/assets/Images/img04.jpg",
        "src/assets/Images/img05.jpg",
        "src/assets/Images/img06.jpg",
        "src/assets/Images/img07.jpg",
        "src/assets/Images/img08.jpg",
        "src/assets/Images/img09.jpg",
        "src/assets/Images/img10.jpg",
        "src/assets/Images/img11.jpg",
        "src/assets/Images/img12.jpg",
        "src/assets/Images/img13.jpg",
        "src/assets/Images/img14.jpg",
        "src/assets/Images/img15.jpg",
        "src/assets/Images/img16.jpg",
        "src/assets/Images/img17.jpg",
        "src/assets/Images/img18.jpg",
        "src/assets/Images/img19.jpg",
        "src/assets/Images/img20.jpg",
    ]
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
                                            <button className="learn-more">
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
