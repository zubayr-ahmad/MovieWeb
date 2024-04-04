import { now_playing_movies as movies} from "../../Utils/ExtraData";
import { useEffect, useState } from "react";
import "./WishList.css";
const WishList = () => {
    const [showHeart, setShowHeart] = useState(false)
    const toggleHeart = (id) => {
        setShowHeart((prev) => {
            const newPrev = !prev;
            if (newPrev && !JSON.parse(localStorage.getItem("favMovies")).includes(id)) {
                document.getElementById(`wishlist_hear2_${id}`).style.opacity = 1;
            }
            else {
                document.getElementById(`wishlist_hear2_${id}`).style.opacity = 0;
            }
            return newPrev;
        });
        // setExtra(true);
    }

    const clearWishlist = () => {
        if (JSON.parse(localStorage.getItem("wishlist")).length > 0) {
            localStorage.setItem("wishlist", JSON.stringify([]));
            document.getElementById('wishlist__heading').innerText = "Wishlist is empty";
        }
        
    }
    useEffect(() => {
        // if (!JSON.parse(localStorage.getItem("favMovies")).includes(movies[0].id)) {
        //     document.getElementById('wishlist_hear2').style.opacity = 0;
        //     setShowHeart(false);
        // }
    },[])
    return (
        <div className="container wishlist">
            <div className="wishlist_header">
                <h1 id="wishlist__heading">Wishlist</h1>
                <button id="wishlist_btn_clear">Clear Wishlist</button>
            </div>
            {movies.map((movie, index) => {
                return(
                <div className="row wishlist__movie_container">
                    <div className="col-2">
                        <img id="wishlist__movie_img" src={movie.image} alt="movie" />
                    </div>
                    <div className="col-8 wishlist_movie_content">
                        <h1 id="wishlist__movie_title">{movie.title}</h1>
                        <p id="wishlist__movie_description">{movie.description}</p>
                    </div>
                    <div className="col-2 wishlist_movie_btns">
                        <button id="wishlist__movie_rem_btn" className="btn btn-danger">Remove</button>

                        <div className='wishlist__heart-icons' title='Add to favorites' onClick={()=>toggleHeart(index)}>
                                <i id={`wishlist_hear1_${index}`} className="wishlist_heart_icon fa-regular fa-heart"
                                style={{
                                    color: '#00ff00',
                                    fontSize: 'xx-large',
                                }}
                            ></i>
                                <i id={`wishlist_hear2_${index}`} className="wishlist_heart_icon fa-solid fa-heart"
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
