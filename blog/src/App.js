import { useState } from 'react'
import './App.css'

function App() {
  function fun() {
    console.log(1)
  }

  return <div onClick={fun}> 안녕하세요</div>
}

// function App() {
//   let [title] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
//   let [good] = useState(0)

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>개발 blog</div>
//       </div>
//       <div className="list">
//         <h4>
//           {title[0]} <span>👍🏿</span> {good}
//         </h4>
//         <p>2월 17일 발행</p>
//       </div>
//       <div className="list">
//         <h4>{title[1]}</h4>
//         <p>2월 17일 발행</p>
//       </div>
//       <div className="list">
//         <h4>{title[2]}</h4>
//         <p>2월 17일 발행</p>
//       </div>
//     </div>
//   )
// }

export default App
