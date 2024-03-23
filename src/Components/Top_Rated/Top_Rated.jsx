import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { imagesList } from '../../Utils/ExtraData'
import {fetchData} from '../../Utils/API'
import './Top_Rated.css';
function Top_Rated() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(2)
    console.log(movies)
    const seeMovieDetails = (id) => {
        navigate(`/movie/${id}`)
    }
    const fetchMoreMovies = () => {
        const data = fetchData(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`)
        setMovies([...movies, ...data])
        setPage(page + 1)
    }
    useEffect(() => {
        let data = []
        fetchData(`https://api.themoviedb.org/3/movie/top_rated`).then(res => {
            data = res.results
            setMovies(data)
        })
    }, [])
    return (
        <>
            <h1 className="top_rated__main-heading">
                Top Rated
            </h1>
            <div className="top-rated-movies-cards">
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <div className="top_rated__main-container">
                                <div className="card" >
                                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : imagesList[index % 20]}
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
                                        {movie.title}
                                    </a>
                                    <div className="movie-year">
                                        {movie.release_date?.slice(0, 4)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            <button id="top_rated__see_more_btn" onClick={fetchMoreMovies}>See More</button>
            </div>
        </ >
    )
}

export default Top_Rated
