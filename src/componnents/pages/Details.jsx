import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie, getVedio } from "../../services";
import YouTube from "react-youtube";

function Details() {
  const [movie, setMovie] = useState({});
  const [vedio, setVedio] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await getMovie(id);
        setMovie(movieResponse.data);

        const vedioResponse = await getVedio(id);
        if (vedioResponse.data.results.length > 0) {
          setVedio(vedioResponse.data.results[0].key);
        } else {
          setVedio(null);
        }
      } catch (error) {
        console.log(error);
        setVedio(null);
      }
    };

    fetchMovieDetails();
    window.scroll(0, 0);
  }, [id]);

  return (
    <>
      <section className="first-section-details">
        <div className="col-8 details-movie">
          <i className="fa-solid fa-star text-danger fs-4"></i>
          <span className="text-light fs-5 ms-3">
            {parseFloat(movie.vote_average).toFixed(1)}
          </span>
          <h2 className="text-light mt-3 movie-name">{movie.title}</h2>
          <span className="text-light d-inline-block mt-1 fs-6">
            {movie.release_date}
          </span>
          <p className="text-light change-font mt-2 fw-medium">{movie.overview}</p>
          <a className="btn btn-danger mt-3 rounded-5 change-font px-4" href="#ved">
            <i className="fa-solid fa-play"></i> Watch
          </a>
          <button className="btn btn-secondary mt-3 rounded-5 change-font ms-3 px-3">
            <i className="fa-solid fa-circle-plus"></i> Add to list
          </button>
        </div>
        <div className="col-4 px-5 position-relative box-poster-details">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="details-poster rounded-4"
            alt="movie poster"
          />
          <button className="btn btn-danger px-3 rounded-5 change-font fs-3 position-absolute play-icon-poster">
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
      </section>
      <section className="second-section-details py-5">
        <div className="w-50">
          {vedio ? (
            <YouTube videoId={vedio} id="ved"/>
          ) : (
            <div className="alert alert-danger w-100 text-center rounded-4 mx-auto">
              <h2 className="change-font">Sorry, video not found..!</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Details;
