import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { imagesList } from '../../../Utils/ExtraData';



function index() {
  const [images, setImages] = useState(imagesList);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2FlOWI3OGQ5ZGY3ODUyOTUyYWRlYTg1YzFhNTBmNiIsInN1YiI6IjY0OWM5Mjc1MDkxZTYyMDBjYWRmNzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qlrXFSU9YQGQTPJOFkDW1rl7LK6zSpnuHlqMxw9l_H4'
      }
    };

    const img = fetch('https://api.themoviedb.org/3/movie/385687/images', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        return response
      })
      .catch(err => console.error(err));
    setImages(img);
    if (images.length > 20) {
      // Randomize the array using the Fisher-Yates algorithm
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
  
      // Select the first 20 elements
      images = images.slice(0, 20);
      setImages(images);
  }}, [])
  
  
  return (
    <>
      {/* <Carousel>
        {
          images.map((image, i) => <Item key={i} item={image} />)
        }
      </Carousel> */}
      {
      images.map((image, i) => {
        return (
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />
        )
      })}
    </>
  )
}

export default index
