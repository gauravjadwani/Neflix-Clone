const APIKEY = "9231db9a28420c80df01d3b88b3db4e7"


const request ={
    fetchTrending :`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}`
}


export default request