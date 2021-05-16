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
            <div>{d.name}</div> 
            {/* buttons  */}
            <div>{d.overview}</div>
            </div>
        </header>
    )
}
export default Banner