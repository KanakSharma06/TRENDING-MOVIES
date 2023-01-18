import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";

const App = () => {
  const [datas, setdatas] = useState([])
  const getdata = async () => {
    const { data } = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=5d97759ad94f89e2b864506f4d087823")
    setdatas(data.results)
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home datas={datas} />} />
        <Route path="/about/:id" element={<Movies />} />
      </Routes>
    </>
  )

}

export default App