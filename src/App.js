import logo from './logo.svg';
import './custom.css';
import Row from './Row';
import Banner from './Banner'
import request from './request'
import React,{setMovies, useState, useEffect} from 'react'
import DataContext from './dataContext'
import axios from "./axios"
function App() {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    // effect

    axios.get(request.fetchNetflixOriginals).then(function(val){
      // console.log("this is val",val)
      const random =  (Math.floor(Math.random() * (val.data.results.length -1)));
      console.log('random ',random)
      setMovies(val.data.results[random])

    })

}, [])
  return (
    <div className="App">
            Netflix clone
      <DataContext.Provider value={movies}>
        <Banner/>
      </DataContext.Provider>

      <Row title="Top Netflix Originals" fetchUrl ={request.fetchNetflixOriginals} isLargeRow data/>
      <Row title="Top Trending" fetchUrl ={request.fetchTrending}/>

      <Row title="Top Rated" fetchUrl ={request.fetchTopRated}/>
    </div>
  );
}

export default App;
