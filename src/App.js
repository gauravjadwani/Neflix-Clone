import logo from './logo.svg';
import './custom.css';
import Row from './Row';
import request from './request'
function App() {
  return (
    <div className="App">
      Netflix clone
      <Row title="Top Rated" fetchUrl ={request.fetchNetflixOriginals}/>
      <Row title="Top Rated2" fetchUrl ={request.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
