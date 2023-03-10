import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Ex01 from './components/Ex01';
import Ex02 from './components/Ex02'
import Ex03 from './components/Ex03'
import Ex04 from './components/Ex04'

function App() {
  var a = '10'
  console.log(a)
  const b = "30"

  return (
    <div className="App">
      {/* <h1>{a}</h1>
      <h1>{b}</h1>
      <Test />
      <Ex01 />
      <Ex02 name="누시다" age = {20}/> */
      // <Ex03/> 
      <Ex04/> }
    </div>
  )
} 

export default App;
