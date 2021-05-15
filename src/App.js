import logo from './logo.svg';
import './custom.css';
import Row from './Row';
import request from './request'
function App() {
  return (
    <div className="App">
      Netflix clone
      <Row title="Top Netflix Originals" fetchUrl ={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Trending" fetchUrl ={request.fetchTrending}/>

      <Row title="Top Rated" fetchUrl ={request.fetchTopRated}/>
    </div>
  );
}

export default App;
