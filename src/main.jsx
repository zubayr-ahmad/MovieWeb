import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes.jsx'

// Check if lists already exists in localStorage
const favMovies = JSON.parse(localStorage.getItem("favMovies")) || [];
const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
// If not, create them
if (!localStorage.getItem("favMovies")) {localStorage.setItem("favMovies", JSON.stringify([]));}
if (!localStorage.getItem("watchlist")) {localStorage.setItem("watchlist", JSON.stringify([]));}

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
