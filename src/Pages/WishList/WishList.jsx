import { now_playing_movies as movies, setFavoriteMovies, setWishlistMovies} from "../../Utils/ExtraData";
import { useEffect, useState } from "react";
import { fetchData } from "../../Utils/API";
import "./WishList.css";
import { addIntoFavMovies, removeFromFavMovies } from "../../Utils/functions";
const WishList = () => {
    const [showHeart, setShowHeart] = useState(false)
    const [movies, setMovies] = useState([])  // wishlist movies
    const [favMovies, setFavMovies] = useState([])
    const [favMoviesIds, setFavMoviesIds] = useState([])
    
    
    const toggleHeart = (id) => {
        setShowHeart((prev) => {
            const newPrev = !prev;
            if (newPrev) {
                document.getElementById(`wishlist_hear2_${id}`).style.opacity = 1;
                addIntoFavMovies(id);
            }
            else {
                document.getElementById(`wishlist_hear2_${id}`).style.opacity = 0;
                removeFromFavMovies(id);
            }
            return newPrev;
        });
        // setExtra(true);
    }

    const clearWishlist = () => {
        localStorage.setItem("wishlist", JSON.stringify([]));
        setMovies([]);
    }


    const storeWishlist = () => {
        const movie_ids = JSON.parse(localStorage.getItem("wishlist")) || [];
        Promise.all(movie_ids.map(id => fetchData(`https://api.themoviedb.org/3/movie/${id}`)))
            .then(movies => {
                setMovies(movies);
            });
        }


    const storeFavoriteMovies = () => {
        const movie_ids = JSON.parse(localStorage.getItem("favMovies")) || [];
        // console.log("storeFavoriteMovies",movie_ids);
        setFavMoviesIds(movie_ids);
        Promise.all(movie_ids.map(id => fetchData(`https://api.themoviedb.org/3/movie/${id}`)))
            .then(movies => {
                setFavMovies(movies);
            });
    }


    useEffect(() => {
        storeWishlist();
        storeFavoriteMovies();
        // console.log(movies)
        // const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    },[])

    useEffect(() => {
        for (let i = 0; i < movies.length; i++) {
            if (favMoviesIds.includes(movies[i].id.toString())) {
                document.getElementById(`wishlist_hear2_${movies[i].id}`).style.opacity = 1;
            }
            else {
                document.getElementById(`wishlist_hear2_${movies[i].id}`).style.opacity = 0;
            }
        }
    }, [movies, favMoviesIds])

    return (
        <div className="container wishlist">
            <div className="wishlist_header">
                <h1 id="wishlist__heading">Wishlist</h1>
                <button style={{"backgroundColor":"green"}} onClick={setWishlistMovies}>set wishlist</button>
                <button style={{"backgroundColor":"green"}} onClick={setFavoriteMovies}>set favMovies</button>
                <button id="wishlist_btn_clear" onClick={clearWishlist}>Clear Wishlist</button>
            </div>
            {movies.map((movie, index) => {
                // {{console.log(movie)}}
                return(
                <div className="row wishlist__movie_container" key={movie.id}>
                    <div className="col-2">
                        <img id="wishlist__movie_img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" />
                    </div>
                    <div className="col-8 wishlist_movie_content">
                        <h1 id="wishlist__movie_title">{movie.title}</h1>
                        <p id="wishlist__movie_description">{movie.overview}</p>
                            {/* <p id="wishlist__movie_year">{movie.release_date}</p> */}
                    </div>
                    <div className="col-2 wishlist_movie_btns">
                        <button id="wishlist__movie_rem_btn" className="btn btn-danger">Remove</button>

                        <div className='wishlist__heart-icons' title='Add to favorites' onClick={()=>toggleHeart(movie.id)}>
                                <i id={`wishlist_hear1_${movie.id}`} className="wishlist_heart_icon fa-regular fa-heart"
                                style={{
                                    color: '#00ff00',
                                    fontSize: 'xx-large',
                                }}
                            ></i>
                                <i id={`wishlist_hear2_${movie.id}`} className="wishlist_heart_icon fa-solid fa-heart"
                                style={{
                                    color: '#00ff00',
                                    fontSize: 'xx-large',
                                }}
                            ></i>
                        </div>
                    </div>
                </div>)
            })}
            
            
            {/* <div className="row wishlist__movie_container">
                <div className="col-2">
                    <img id="wishlist__movie_img" src={movies[0].image} alt="movie" />
                </div>
                <div className="col-8 wishlist_movie_content">
                    <h1 id="wishlist__movie_title">{movies[0].title}</h1>
                    <p id="wishlist__movie_description">{movies[0].description}</p>
                </div>
                <div className="col-2 wishlist_movie_btns">
                    <button id="wishlist__movie_rem_btn" className="btn btn-danger">Remove</button>
                    
                    <div className='wishlist__heart-icons' title='Add to favorites' onClick={toggleHeart}>
                        <i id="wishlist_hear1" className="wishlist_heart_icon fa-regular fa-heart"
                            style={{
                                color: '#00ff00',
                                fontSize: 'xx-large',
                            }}
                        ></i>
                        <i id="wishlist_hear2" className="wishlist_heart_icon fa-solid fa-heart"
                            style={{
                                color: '#00ff00',
                                fontSize: 'xx-large',
                            }}
                        ></i>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default WishList
