import React, {useState,useEffect} from 'react'
import Coloumn from './Coloumn'
import axios from "./axios"

function Row({title, fetchUrl}){
    const [movies, setMovies] = useState([])
    useEffect(() => {
        // effect
        axios.get(fetchUrl).then(function(val){
            console.log("this is val",val)
            setMovies(val.data.results)
        })

    }, [])
    return(
        <div className="row">
            <p>{title}</p>
            {(movies.length > 0) ? (
               movies.map((val, i)=>(<Coloumn movie={val} key={i}/>))
            ):(null)}
        </div>
    )
}
export default Row