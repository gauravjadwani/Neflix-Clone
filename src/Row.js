import React, {useState,useEffect} from 'react'
import Coloumn from './Coloumn'
import axios from "./axios"

function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([])
    useEffect(() => {
        // effect
        axios.get(fetchUrl).then(function(val){
            console.log("this is val",val)
            setMovies(val.data.results)
        })

    }, [fetchUrl])
    return(
        <>
        <div className="cat-title"><h1>{title}</h1></div>
        <div className="row">
            
            {(movies.length > 0) ? (
               movies.map((val, i)=>(<Coloumn movie={val} key={i} isLargeRow={isLargeRow}/>))
            ):(null)}
        </div>
        </>
    )
}
export default Row