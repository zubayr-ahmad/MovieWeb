import React from 'react'
import '../../assets/Images/img01.jpg'
function Now_Playing() {
  return (
    <div>
      <div className="headings">
        <h1>Now Playing</h1>
        <h1>Up next</h1>
      </div>

      <div className="main-container">
        <div className="slide-show">
          <div id="moviesCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2400">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#moviesCarousel" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#moviesCarousel" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#moviesCarousel" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#moviesCarousel" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#moviesCarousel" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#moviesCarousel" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="src/assets/Images/img01.jpg" className="d-block w-100 carousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block">

                  </div>
              </div>
              <div className="carousel-item">
                <img src="src/assets/Images/img02.jpg" className="d-block w-100 carousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block">

                  </div>
              </div>
              <div className="carousel-item">
                <img src="src/assets/Images/img03.jpg" className="d-block w-100 carousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block">

                  </div>
              </div>
              <div className="carousel-item">
                <img src="src/assets/Images/img04.jpg" className="d-block w-100 carousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block">

                  </div>
              </div>
              <div className="carousel-item">
                <img src="src/assets/Images/img05.jpg" className="d-block w-100 carousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block">

                  </div>
              </div>
              <div className="carousel-item">
                <img src="src/assets/Images/img06.jpg" className="d-block w-100 carousel-img" alt="..." />
                  <div className="carousel-caption d-none d-md-block">

                  </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#moviesCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#moviesCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="" id="upNextMoviesCards">
          <div className="upNextMoviesCards__card">
            <div className="row">
              <div className="col-md-4">
                <img id="upNextMoviesCards__card__img" src="src/assets/Images/img04.jpg" className="img-fluid rounded-start aside-card-image"
                  alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  {/* <p className="btn btn-warning">
                    <a>
                      <i className="bi bi-film"></i>Trailer
                    </a>
                  </p> */}

                </div>
              </div>
            </div>
          </div>

          <div className="upNextMoviesCards__card">
            <div className="row">
              <div className="col-md-4">
                <img id="upNextMoviesCards__card__img" src="src/assets/Images/img04.jpg" className="img-fluid rounded-start aside-card-image"
                  alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  {/* <p className="btn btn-warning">
                    <a>
                      <i className="bi bi-film"></i>Trailer
                    </a>
                  </p> */}

                </div>
              </div>
            </div>
          </div>

          <div className="upNextMoviesCards__card last-card">
            <div className="row">
              <div className="col-md-4">
                <img id="upNextMoviesCards__card__img" src="src/assets/Images/img04.jpg" className="img-fluid rounded-start aside-card-image"
                  alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  {/* <p className="btn btn-warning">
                    <a>
                      <i className="bi bi-film"></i>Trailer
                    </a>
                  </p> */}

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Now_Playing
