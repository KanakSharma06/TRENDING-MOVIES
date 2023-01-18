import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Movies = () => {
  // `https://api.themoviedb.org/3/movie/${id}?api_key=5d97759ad94f89e2b864506f4d087823
  const param = useParams();
  const [movie, setmovie] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    getMovie();
  }, []);
  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=5d97759ad94f89e2b864506f4d087823`
    );
    setmovie(data);
    console.log(data);
  };

  return (
    <div className="container cnt">
      <div
        className="card"
        style={{ width: "71rem", display: "flex", flexDirection: "row" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movie?.poster_path ||
            movie?.backdrop_path ||
            movie?.profile_path ||
            "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
          }`}
          className="card-img-top singleImg"
          alt="..."
        />
        <img
          src={`https://image.tmdb.org/t/p/w500${
            movie?.backdrop_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
          }`}
          className="coverImg"
          alt="..."
        />
        <div className="card-body  text-dark lolo">
          <div
            className="cont d-flex"
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "45`%",
            }}
          >
            <div style={{ width: 79, height: 79 }}>
              <CircularProgressbar
                value={Math.floor(movie?.vote_average * 10)}
                text={Math.floor(movie?.vote_average * 10) + "%"}
              />
            </div>
            <h5 className="card-title">
              {movie?.title ?? movie?.original_name}
            </h5>
          </div>
          <br />
          <p className="card-text">
            {show ? movie?.overview : movie?.overview.slice(0, 30) + "..."}
            <u
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "hide" : "show more"}{" "}
            </u>
          </p>
          <div id="gen" className="card-text d-flex">
            {movie?.genres.map((gen, i) => (
              <div key={i}>{gen.name} ,&nbsp;</div>
            ))}
          </div>
          <div className="card-text">Status: {movie?.status}</div>
          <div className="card-text">Release Date: {movie?.release_date}</div>
          <div className="card-text">Tagline: {movie?.tagline}</div>
          <br />

          <a href={movie?.homepage} className="btn btn-primary">
            watch trailer
          </a>
        </div>
      </div>
    </div>
  );
};

{
  /* {show ? movie?.overview : movie?.overview.slice(0, 30) + "..."}
                        <u style={{ cursor: "pointer" }} onClick={() => setShow(!show)}> {show ? "hide" : "show more"} </u> */
}

export default Movies;
