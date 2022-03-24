import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import HeroesFeatured from './Components/HeroesFeatured/HeroesFeatured';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <div className='container'>
            <Routes>
              <Route path='/' element={<HeroesFeatured />} />
              {/* <Route path='/search/:name' element={} /> */}

              {/* <Route path='/hero/:id' element={} /> */}
            </Routes>
          </div>
        </main>
        <footer>
          <div className="container">
            <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
          </div>
        </footer>
      </Router>
    </>
  );

}

export default App;
