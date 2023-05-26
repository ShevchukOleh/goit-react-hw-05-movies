import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import { Reviews } from "./Reviews/Reviews";
import { Cast } from "./Cast/Cast";
import MoviesDetails from "pages/MoviesDetails/MoviesDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};