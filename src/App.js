import logo from './logo.svg';
import './custom.css';
import Row from './Row';
import Banner from './Banner'
import request from './request'
import React,{setMovies, useState, useEffect} from 'react'
import DataContext from './dataContext'
import axios from "./axios"
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import ModalContext from './movieContext'


const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

// const ModalContext = React.createContext();
function App() {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMovie, setModalMovie] = useState(null)


  useEffect(() => {
    // effect

    axios.get(request.fetchNetflixOriginals).then(function(val){
      // console.log("this is val",val)
      const random =  (Math.floor(Math.random() * (val.data.results.length -1)));
      console.log('random ',random)
      setMovies(val.data.results[random])
      movieTrailer( 'Oceans Eleven' )
        .then( response => console.log( 'response',response ) )

    })

}, [])
console.log('App.js')
  return (
    <div className="App">
            Netflix clone
      <DataContext.Provider value={movies}>
        <Banner/>
      </DataContext.Provider>
      <ModalContext.Provider  value ={{setModalMovie,setModalOpen}} >
        <Row title="Top Netflix Originals" fetchUrl ={request.fetchNetflixOriginals} isLargeRow data/>
        <Row title="Top Trending" fetchUrl ={request.fetchTrending}/>

        <Row title="Top Rated" fetchUrl ={request.fetchTopRated}/>
      </ModalContext.Provider>
      <Modal open={modalOpen} onClose={()=>setModalOpen(false)}>
      <YouTube videoId={modalMovie} /> 
        </Modal>
    </div>
  );
}

export default App;
