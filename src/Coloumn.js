import React from 'react'

function Column({movie}){
    console.log("mobies",movie)
    return(
        <div className="col">
            <img className="image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <div>{movie.name}</div>
        </div>
    )
}
export default Column