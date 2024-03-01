import { useState } from 'react'
import "./Movie_Detail.css"
import { useParams } from 'react-router-dom'
function Movie_Detail() {
    const { id } = useParams()
    // console.log(id)
    const [showHeart, setShowHeart] = useState(false)
    const [showWishlist, setShowWishlist] = useState(false)
    const [extra, setExtra] = useState(false)
    const toggleHeart = () => {
        setShowHeart((prev) => {
            const newPrev = !prev;
            if (newPrev) {
                document.getElementById('hear2').style.opacity = 1;
            }
            else {
                document.getElementById('hear2').style.opacity = 0;
            }
            return newPrev;
        });
        // setExtra(true);
    }

    const toggleWishlist = () => {
        setShowWishlist((prev) => {
            const newPrev = !prev;
            if (newPrev) {
                document.getElementById('wishlist2').style.opacity = 1;
            }
            else {
                document.getElementById('wishlist2').style.opacity = 0;
            }
            return newPrev;
        });
    }
    return (
        <div className='container'>
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
                    <img src='/src/assets/Images/img05.jpg' id='movie_detail__poster_img' alt='image poster' />
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

                {/* Movie details section (right section) */}
                <div className="col-7 movie_detail__content">
                    <div id="movie_detail__title">
                        <h2>
                            ZooTopia
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Movie_Detail
