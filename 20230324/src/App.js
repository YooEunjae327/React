import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import Register from './components/Register';
import StopWatch from './components/StopWatch'


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path='/stopwatch' element={<StopWatch />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
