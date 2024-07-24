import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../services";

function Yourmovies() {
  const [data, setData] = useState(() => {
    const savedMovies = window.localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  const [moreMovies, setMoreMovies] = useState([]);

  useEffect(() => {
    if (!Array.isArray(data)) {
      setData([data]);
    }
    if (data.length === 0) {
      getData(4).then((res) => setMoreMovies(res.data.results));
    }
  }, [data]);

  return (
    <>
      <section className="first-section-in-yourmoovies">
        {Array.isArray(data) && data.length > 0 && (
          <div className="alert alert-success w-50 mx-auto text-center">
            <h3 className="change-font fw-bold">Your Movies</h3>
          </div>
        )}
        <div className="row me-0 justify-content-around">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((obj) => (
              <div key={obj.id} className="hide col-3 px-3 mt-5 position-relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                  className="w-100 poster rounded-4"
                  alt="movie poster"
                />
                <span className="details rounded-4 text-decoration-none text-center px-4 py-4">
                  <h5 className="mt-5 change-font">{obj.title}</h5>
                  <h5 className="change-font mt-5">
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

                </span>
              </div>
            ))
          ) : (
            <>
              <div className="col-12">
                <div className="alert alert-danger  mx-auto text-center w-50">
                  <h3 className="change-font fw-bold">
                    You haven't added any movies..!
                  </h3>
                </div>
              </div>
              <div className="alert alert-success w-50 mx-auto text-center mt-5">
                <h4 className="change-font fw-bold">More Movies if you want watch him </h4>
              </div>
              <div className="row me-0 justify-content-around">
                {moreMovies.map((obj) => (
                  <div
                    key={obj.id}
                    className="hide col-3 px-3 mt-5 position-relative"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                      className="w-100 poster rounded-4"
                      alt="movie poster"
                    />
                    <span className="details rounded-4 text-decoration-none text-center px-4">
                      <h5 className="mt-5 change-font">{obj.title}</h5>
                      <h5 className="change-font mt-5">
                        <i className="fa-solid fa-star text-danger"></i>{" "}
                        {parseFloat(obj.vote_average).toFixed(1)}
                      </h5>
                      <h5 className="mt-5">{obj.release_date}</h5>
                      <Link
                        to={`/details/${obj.id}`}
                        className="btn btn-outline-danger rounded-3 px-3 mt-5 change-font"
                      >
                        <i className="fa-solid fa-play"></i> Show
                      </Link>

                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Yourmovies;

{
  /* <div key={obj.id} className="hide col-3 mt-4 position-relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                  className="w-100 poster rounded-4"
                  alt="movie poster"
                />
                <span className="details rounded-4 text-decoration-none  text-center px-3">
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
                    <i className="fa-solid fa-circle-plus"></i> Add to list
                  </button>
                </span>
              </div> */
}
