import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import Movie from '../Movie/Movie'
import Upcoming from '../Pages/Upcoming/Upcoming'
import WishList from '../Pages/WishList/WishList'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='/movie/:id' element={<Movie/>} />
            <Route path='/upcoming' element={<Upcoming />} />
            <Route path="/wishlist" element={<WishList />} />
        </Route>
    )
)

export default router;