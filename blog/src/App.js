import { useState } from 'react'
import './App.css'

function App() {
  let [title, titleCh] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ])
  let [good, goodup] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              goodup(good + 1)
            }}
          >
            👍
          </span>
          {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button
        onClick={() => {
          let copy = [...title]
          copy[0] = '여자코트 추천'

          console.log(copy)
          titleCh(copy)
        }}
      >
        수정 버튼
      </button>
      <button
        onClick={() => {
          let copy = [...title]
          titleCh(copy.sort())
        }}
      >
        글 정렬
      </button>
      <Modal></Modal>
    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App
