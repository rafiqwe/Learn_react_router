import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import AppLayOut from "./components/layout/AppLayOut";
import { ErrorPage } from "./pages/ErrorPage";
import { getApiData } from "./api/getApiData";
import { MovieDetails } from "./components/layout/UI/MovieDetails";
import { getMovieDetails } from "./api/getMovieDetails";

const App = () => {
  // new way of creating routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayOut />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getApiData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

      ],
    },
  ]);
  // old way of creating routes
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/contact" element={<Contact/>}/>
  //       <Route path="/movie" element={<Movie/>}/>
  //     </>
  //   )
  // );
  return <RouterProvider router={router} />;
};
export default App;
