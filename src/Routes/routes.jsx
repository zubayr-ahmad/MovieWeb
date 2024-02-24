import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import Movie_Detail from '../Movie/Movie_Detail/Movie_Detail';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='/movie/:id' element={<Movie_Detail/>} />
        </Route>
    )
)

export default router;