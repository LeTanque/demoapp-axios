import React, { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';

import Notes from "./Notes";


function App() {

  const [ state, setState ] = useState([])

  useEffect(() => {
    axios.get("https://fe-notes.herokuapp.com/note/get/all")
    .then((responseFromAxios) => {
      // console.log('responseFromAxios --> ', responseFromAxios);
      setState(responseFromAxios.data);
    })
    .catch((error) => console.log(error));

  },[])


  console.log('state --> ', state);

  return (
    <div className="App">
      
      


      <Notes notes={state} />


    </div>
  );
}


export default App;

