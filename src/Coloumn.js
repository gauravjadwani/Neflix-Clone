import React from 'react'

function Column({movie, isLargeRow}){
    // console.log("mobies",movie,isLargeRow)
    return(
        <div className="col">
            <img className="image" src={!isLargeRow ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            : `https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <div className="movie-title">{(movie.name)?(movie.name):(movie.title)}</div>
        </div>
    )
}
export default Column