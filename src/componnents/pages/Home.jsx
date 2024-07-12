import React, { useEffect, useState } from "react";
import { getData } from "../../services";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";

function Home() {
  let [datta, setData] = useState([]);
  let [page, setPage] = window.sessionStorage.getItem("pageNumber")
    ? useState(window.sessionStorage.getItem("pageNumber"))
    : useState(1);
  useEffect(() => {
    getData(page)
      .then((res) => res.data.results)
      .then((res) => setData(res));
  }, [datta]);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2", // pagination اللون الأساسي لل
      },
      secondary: {
        main: "#DC3545", // اللون الثانوي (tomato)
      },
    },
  });
  const handlePage = (e, value) => {
    setPage(value);
  };
  useEffect(() => {
    getData(page);
    window.sessionStorage.setItem("pageNumber", page);
  }, [page]);
  const addMovieToLocalStorage = (movie) => {
    let movies = [];
    if (window.localStorage.getItem("movies")) {
      if (Array.isArray(JSON.parse(window.localStorage.getItem("movies")))) {
        movies = [...JSON.parse(window.localStorage.getItem("movies"))];
      } else {
        movies = [JSON.parse(window.localStorage.getItem("movies"))];
      }
      let chek = movies.find((obj) => obj.id == movie.id);
      if (chek == undefined) {
        movies = [...movies, movie];
        window.localStorage.setItem("movies", JSON.stringify(movies));
        alertify.success("movie added success..!");
      } else {
        alertify.error("The movie has been added..!");
      }
    } else {
      window.localStorage.setItem("movies", JSON.stringify(movie));
      alertify.success("movie added success..!");
    }
  };
  return (
    <>
      <section className="home-section contain mt-0  align-content-center">
        <div className="container row text-light">
          <div className="col-lg-8 container-fluid ">
            <p className=" text-light ">
              <i className="fa-solid fa-star text-danger "></i>
              <span className="ms-3 fs-6">7.5</span>
              <span className="ms-4 ">.</span>
              <span className="ms-3">2018</span>
            </p>
            <h2 className="film-name ">Lost in space</h2>
            <p className="w-75 mt-4 change-font ">
              The film blends elements of science fiction and adventure,
              showcasing the challenges of survival and dealing with crises in
              strange and unfamiliar environments....
            </p>
          </div>
        </div>
      </section>
      <section className="show1">
        <div className=" row w-100 ps-4">
          <div className=" mt-5 mx-auto">
            <ThemeProvider theme={theme}>
              <Pagination
                count={500}
                variant="outlined"
                color="primary"
                className="custom-pagination"
                page={parseInt(page)}
                onChange={handlePage}

              />
            </ThemeProvider>
          </div>
          {datta.map((obj) => (
            <div key={obj.id} className="hide col-3 mt-4 position-relative">
              <img
                src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                className="w-100 poster rounded-4"
                alt="movie poster"
              />
              <span className="details rounded-4 text-decoration-none  text-center px-3 py-2">
                <h5 className="mt-5 change-font">{obj.title}</h5>
                <h5 className="change-font mt-4">
                  <i className="fa-solid fa-star text-danger"></i>{" "}
                  {parseFloat(obj.vote_average).toFixed(1)}
                </h5>
                <h5 className="mt-4">{obj.release_date}</h5>
                <Link
                  to={`/details/${obj.id}`}
                  className="btn btn-outline-danger rounded-3 px-3 mt-5 change-font"
                >
                  <i className="fa-solid fa-play"></i> Show
                </Link>
                <button
                  onClick={() => addMovieToLocalStorage(obj)}
                  className="btn btn-outline-info chang-hover-buton rounded-3 px-3 mt-4 change-font"
                >
                  <i className="fa-solid fa-circle-plus"></i> Add to Favorite
                </button>
              </span>
            </div>
          ))}
          <div className=" mt-5 mb-5 mx-auto">
            <ThemeProvider theme={theme}>
              <Pagination
                count={500}
                variant="outlined"
                color="primary"
                className="custom-pagination"
                page={parseInt(page)}
                onChange={handlePage}
              />
            </ThemeProvider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
