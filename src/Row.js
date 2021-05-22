import React, {useState,useEffect,useContext} from 'react'
import Coloumn from './Coloumn'
import axios from "./axios"
import YouTube from 'react-youtube';
import DataContext from './dataContext'

function _onReady(e) {
    // access to player in all event handlers via event.target
    // e.target.pauseVideo();
  }
function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([])

    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    useEffect(() => {
        // effect
        axios.get(fetchUrl).then(function(val){
            // console.log("this is val",val)
            setMovies(val.data.results)
        })

    }, [fetchUrl])
    // const d = useContext(DataContext);
    console.log("RowCOntext",fetchUrl)
    return(
        <>
        <div className="cat-title"><h1>{title}</h1></div>
        <div className="row">
            
            {(movies.length > 0) ? (
               movies.map((val, i)=>(<Coloumn movie={val} key={i} isLargeRow={isLargeRow}/>))
            ):(null)}
            
        </div>
        {/* <YouTube videoId="ImMGNQ2OEjo" opts={opts} /> */}

        </>
    )
}
export default Row