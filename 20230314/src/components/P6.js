import React, { useState } from 'react'
import '../css/P6.css'

const P6 = () => {
  const [as, setAs] = useState([])
  const [de, setDe] = useState([])
  const [value, setValue] = useState(10)

  const evenOddChk = (e) => {
    value === 0 ? window.location.reload() : setValue(value - 1)


      setAs([...as, e.target.value.value].sort((a,b) => a - b))
      setDe([...de, e.target.value.value].sort((a, b) => b - a))
  } 


  return (
    <div>
      <h1>값을 {value}개 입력하세요</h1>
      <h3>입력한후에 엔터 누르면됩니다.</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          evenOddChk(e)
        }}
      >
        <input name="value"></input>
      </form>

      <div className="eo">
        <div>
          <h2>오름차순입니다.</h2>
          <div id='sideContainer'>
            {as.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <h2>내림차순입니다.</h2>
          <div id='sideContainer'>
            {de.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default P6
