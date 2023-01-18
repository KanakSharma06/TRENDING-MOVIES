import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({ datas }) => {

    return (
        <div className='d-flex flex-wrap bg-dark'>
            {datas.map((data, i) => (
                <div key={i} className="card bg-dark" style={{ width: "14rem", margin: "1rem" }}>
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.backdrop_path || data.profile_path || "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"}`} className="card-img-top" alt="..." />
                    <div className="card-body text-light">
                        <h5 className="card-title">{data.title ?? data.original_name}</h5>
                        <p className="card-text">{data.overview.slice(0, 30)}...</p>
                        <Link to={`/about/${data.id}`} className="btn btn-light text-dark"> <b> About</b></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home
//npm run buildx
//npm install @reduxjs/toolkit react-redux
//store->store.js import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//     reducer: {},
//   }) 