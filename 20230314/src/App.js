import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import P1 from './components/P1';
import P2 from './components/P2';
import P3 from './components/P3';
import P4 from './components/P4';
import P5 from './components/P5';
import P6 from './components/P6'
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/p1" element={<P1 />}></Route>
          <Route path="/p2" element={<P2 />}></Route>
          <Route path="/p3" element={<P3 />}></Route>
          <Route path="/p4" element={<P4 />}></Route>
          <Route path="/p5" element={<P5 />}></Route>
          <Route path="/p6" element={<P6 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
