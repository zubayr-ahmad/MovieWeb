# MovieWeb

MovieWeb is a personal practice-level project, built using React for the frontend and the TMDB API for the backend.

## Project Overview

The project is a simple movie database web application that allows users to browse and search for their favorite movies. It fetches data from the TMDB API and displays it in a user-friendly interface.
It is a practice project to practice react, so I have used TMDB Api as a backend that provides so many end-points that you can integrate in your react app.
It shows you the latest movies of the market, top rated movies of all times, and upcoming movies as well. You can also include the movies to your wishlist that you want to watch later on. You can also arrange your favorite movies list as well.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [What you can contribute to this project?](#what-you-can-contribute-to-this-project)
- [Contact](#contact)
- [Credits](#credits)
- [License](#license)

## Technologies Used

- **Frontend:** React (Vite)
- **Backend:** [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started)

## Features

- Search for movies using names.
- See different category of movies; Now playing, Upcoming and Top rated movies of all time.
- View detailed information about a movie; description, run-time, imdb link, genres, images, videos and casts.
- Include movies to your wishlist and favorite movies lists (automatically maintained separately for each browser).

## Setup and Installation

1. Clone the repository using command: `git clone https://github.com/zubayr-ahmad/MovieWeb.git`.
2. Navigate to the project directory using `cd MovieWeb`.
3. Install the dependencies using `npm install`. (You need to have node.js installed on your system. You can install it from [here](https://nodejs.org/en/download/). I have used v20.11.1 version of node js).
4. Create a TMDB API key by following the instructions [here](https://www.themoviedb.org/documentation/api). You will need to create an account on TMDB to get the API key.
5. Create a file named `tmdb_acc.jsx` in the `src` directory and add the following code to it:
```jsx
export const API_KEY = 'YOUR_API_KEY'
export const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'
```
(Replace `YOUR_API_KEY` and `YOUR_ACCESS_TOKEN` with your actual API key and access token.)  
6. Start the development server using `npm run dev`.
## Usage

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## What you can contribute to this project?
This is a practice project, but you can contribute to it as well. Following are some of the things you can do to implement in this project:
- You can add more features to this project by implementing more end-points of TMDB API.
- You can improve the UI of this project and make it more user-friendly and responsive.
- You can implement Login and SignUp feature to this project and maintain the user's favorite movies list on the server of TMDB API.
- You can also implement rating feature to this project and maintain the user's rating of movies on the server of TMDB API.
- You can apply filters to the search results and apply them using the end-points of TMDB API.

You can implement any of the above features and create a pull request to this project. I will review your pull request and merge it to the main branch if it is good to go.


## Contact

You can connect with me on [LinkedIn](https://www.linkedin.com/in/zubayr-ahmad) and share your thoughts about this project.

## Credits
- The backend of this project is powered by [TMDB API](https://www.themoviedb.org/documentation/api).

## License

This project is open source and available under the [MIT License](LICENSE).