import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
       <a href="#">css</a>
       <a href="#">HTML</a>
       <a href="#">JS</a>
       <a href="#">react</a>
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
         <li>css</li>
         <li>HTML</li>
         <li>JS</li>
         <li>react</li>
      </ul>
    </div>
  );
}

export default App;
