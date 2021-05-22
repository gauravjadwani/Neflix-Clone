import React,{useContext} from 'react'

import MovieContext from './movieContext'
import movieTrailer from 'movie-trailer'


async function  handleClick(e, movie,context){
    const movieName = (movie.name)?(movie.name):(movie.title)
    const movieTralerId =  await movieTrailer( movieName, { id:true} )
    console.log('handleClick',movieTralerId,movieName)
    context.setModalOpen(true)
    context.setModalMovie(movieTralerId)
   
}

function Column({movie, isLargeRow}){
    // console.log("mobies",movie,isLargeRow)
    // const d = useContext(DataContext);
    const d = useContext(MovieContext);
    console.log('contexttt',d)
    return(
        <div className="col" onClick={(e)=>handleClick(e, movie,d)}>
            <img className="image" src={!isLargeRow ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            : `https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <div className="movie-title">{(movie.name)?(movie.name):(movie.title)}</div>
        </div>
    )
}
export default Column