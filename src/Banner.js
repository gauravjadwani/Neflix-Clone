import React,{useContext} from 'react'
import DataContext from './dataContext'
function Banner(){
    const d = useContext(DataContext);
    console.log("ddwsdwwdw",d)
    return(
        <header style={{
            background:`url(https://image.tmdb.org/t/p/original/${d.backdrop_path})`
        }} className="banner">
            <div className="banner-contents">
            <div className="banner-title">{d.name}</div> 
            <button className="banner-button">Play</button>
            <button className="banner-button">My list</button>
            <div className="banner-desciption">{d.overview}</div>
            </div>
        </header>
    )
}
export default Banner