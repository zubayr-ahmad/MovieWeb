import { useEffect, useState } from 'react'
import "./Movie_Detail.css"
import { useParams } from 'react-router-dom'
import { fetchData } from '../../Utils/API'
function Movie_Detail() {
    const { id } = useParams()
    // console.log(id)
    const [movieDetails, setMovieDetails] = useState({})
    const [showHeart, setShowHeart] = useState(false)
    const [showWishlist, setShowWishlist] = useState(false)
    const [extra, setExtra] = useState(false)

    useEffect(() => {
        fetchData(`https://api.themoviedb.org/3/movie/${id}`).then(res => {
            setMovieDetails(res)
            console.log("Movie Details",res)
        })
        if (!JSON.parse(localStorage.getItem("favMovies")).includes(id)) {
            document.getElementById('hear2').style.opacity = 0;
            setShowHeart(false);
        }
        if (!JSON.parse(localStorage.getItem("watchlist")).includes(id)) {
            document.getElementById('wishlist2').style.opacity = 0;
            setShowWishlist(false);
        }
    },[])

    const toggleHeart = () => {
        setShowHeart((prev) => {
            const newPrev = !prev;
            if (newPrev && !JSON.parse(localStorage.getItem("favMovies")).includes(id)) {
                document.getElementById('hear2').style.opacity = 1;
                localStorage.setItem("favMovies", JSON.stringify([...JSON.parse(localStorage.getItem("favMovies")), id]))
            }
            else {
                document.getElementById('hear2').style.opacity = 0;
                localStorage.setItem("favMovies", JSON.stringify(JSON.parse(localStorage.getItem("favMovies")).filter(movie => movie !== id)))
            }
            return newPrev;
        });
        // setExtra(true);
    }
    const toggleWishlist = () => {
        setShowWishlist((prev) => {
            const newPrev = !prev;
            if (newPrev && !JSON.parse(localStorage.getItem("watchlist")).includes(id)) {
                document.getElementById('wishlist2').style.opacity = 1;
                localStorage.setItem("watchlist", JSON.stringify([...JSON.parse(localStorage.getItem("watchlist")), id]))
            }
            else {
                document.getElementById('wishlist2').style.opacity = 0;
                localStorage.setItem("watchlist", JSON.stringify(JSON.parse(localStorage.getItem("watchlist")).filter(movie => movie !== id)))
            }
            return newPrev;
        });
    }
    return (
        <div className='container' id='movie_detail_component'>
            <div className="row ">
                {/* Poster image and rating section (left section) */}
                <div className="col-4 movie_detail__poster_img_container">

                    {/* Heart icons hollow and solid */}
                    <div className='movie_detail__heart-icons' title='Add to favorites' onClick={toggleHeart}>
                        <i id="hear1" className="movie_detail_poster_heart_icon fa-regular fa-heart"
                            style={{
                                color: '#00ff00',
                                fontSize: 'xx-large',
                            }}
                        ></i>
                        <i id="hear2" className="movie_detail_poster_heart_icon fa-solid fa-heart"
                            style={{
                                color: '#00ff00',
                                fontSize: 'xx-large',
                            }}
                        ></i>
                    </div>
                    {/* Wishlist icons */}
                    <div className='movie_detail__wishlist-icons' title="Add to wishlist" onClick={toggleWishlist}>
                        <i id="wishlist1" className="movie_detail_poster_wishlist_icon fa-regular fa-bookmark"
                            style={{
                                color: '#00ff00',
                                fontSize: 'xx-large',
                            }}
                        ></i>
                        <i id="wishlist2" className="movie_detail_poster_wishlist_icon fa-solid fa-bookmark"
                            style={{
                                color: '#00ff00',
                                fontSize: 'xx-large',
                            }}
                        ></i>
                    </div>

                    {/* Poster image */}
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} id='movie_detail__poster_img' alt='image poster' />
                    {/* Rating at the bottom */}
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
                        <p>{movieDetails.vote_average?.toFixed(1)}</p>
                    </div>
                </div>

                {/* For a gap between the two sections */}
                <div className="col-1"></div>

                {/* Movie details section (right section) */}
                <div className="col-7 movie_detail__content">
                    <div id="movie_detail__title">
                        <h2>
                            {movieDetails.title}
                        </h2>
                    </div>
                    <div className="movie_detail__single_line_block">
                        <p>Runtime: {movieDetails.runtime} minutes</p>
                    </div>
                    <div id="movie_detail__description">
                        <h2 className="movie_detail__sub_heading">Description</h2>
                        <p>{movieDetails.overview}</p>
                    </div>
                    <div className="movie_detail__single_line_block">
                        <p>Release Date: {movieDetails.release_date}</p>
                    </div>

                    <div id="movie_detail__genres-container">
                        <h2 className="movie_detail__sub_heading">Genre</h2>
                            {movieDetails.genres?.map((genre, index) => (
                                <div id="movie_detail__genre-capsule">
                                    <span key={index}>{genre.name}</span>
                                </div>
                            ))}
                    </div>
                    <div className="movie_detail__single_line_block">
                        <a id="movie_details__imdb_link" href={`https://www.imdb.com/title/${movieDetails.imdb_id}`} target='blank'>Visit IMDB to watch</a>
                    </div>
                    <div className="movie_detail__single_line_block">
                        <a id="movie_details__rate_movie" href="#">Rate this movie</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Movie_Detail
