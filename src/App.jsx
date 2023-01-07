import React from 'react';
import Header from './Components/Header';
import Contents from './Components/Contents';
import './App.css'; 

function App() {

    return(<div>
        <Header /> 
        
        <h1 className='content' id='hello'>Type your events in the box below</h1>

        <Contents /> 
    </div>)
}


export default App; 