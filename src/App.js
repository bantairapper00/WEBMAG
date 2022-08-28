// import logo from './logo.svg';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="home" country={'in'} pageSize={10} category={'general'} />}></Route>
          <Route exact path='/business' element={<News key="business" country={'in'} pageSize={10} category={'business'} />}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" country={'in'} pageSize={10} category={'entertainment'} />}></Route>
          <Route exact path='/health' element={<News key="health" country={'in'} pageSize={10} category={'health'} />}></Route>
          <Route exact path='/science' element={<News key="science" country={'in'} pageSize={10} category={'science'} />}></Route>
          <Route exact path='/sports' element={<News key="sports" country={'in'} pageSize={10} category={'sports'} />}></Route>
          <Route exact path='/technology' element={<News key="technology" country={'in'} pageSize={10} category={'technology'} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
