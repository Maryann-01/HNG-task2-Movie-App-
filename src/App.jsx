import {React, useState } from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing/Landing'
import MovieBox from './components/movieBox/movieBox'
import { useParams } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/movies/:movieid" element={<MovieBox/>} />
      </Routes>
    </>
  )
}

export default App
