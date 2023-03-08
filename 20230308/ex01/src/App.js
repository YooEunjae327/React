import logo from './logo.svg';
import './App.css';
import MyTag from './components/MyTag';



function App() {

  return (
    <div className="App">
      <h1>시작</h1>
      <MyTag name="tomato" age={20} />
      <MyTag name="photo" age={10} />
    </div>
  )
}

export default App;
