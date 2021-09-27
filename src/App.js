import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import People from "./views/People";
import Planets from "./views/Planets";
import Ships from "./views/Ships";
import SearchBar from "./components/SearchBar";
import { useState } from 'react';
import { navigate } from '@reach/router';

function App() {
  const [galaxy, setGalaxy] = useState({}); //people planets starships
  const [dataType, setDataType] = useState("people");
  const [numId, setNumId] = useState(0);



const useSearch = () => {
  axios.get(`https://swapi.dev/api/${dataType}/${numId}` )
  .then(res=> {
    console.log(res.data)
    setGalaxy(res.data)
    navigate(`/${dataType}/${numId}`)
  })
  .catch(err => console.log(err))
}
console.log(galaxy)



  return (
    <div className="App">
      <h1 className="text-primary">A long time ago in a galaxy far far away...</h1>
      <SearchBar setDataType={setDataType} setNumId={setNumId} searchFunc={useSearch}/>
      <Router>
      <People person={galaxy} path="/people/:num"/>
      <Planets planet={galaxy} path="/planets/:num"/>
      <Ships ships={galaxy} path="/starships/:num"/>
      </Router>
    </div>
  );
}

export default App;
