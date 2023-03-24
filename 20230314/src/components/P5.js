import React, { useState } from 'react'
import "../css/P5.css"



const P5 = () => {

  let [even, setEven] = useState([])
  let [odd, setOdd] = useState([])  
  const [value, setValue] = useState(10)

  const evenOddChk = (e) => {
      value === 0 ? window.location.reload() : setValue(value - 1)
      
      if(e.target.value.value % 2 == 0) {
        setEven([...even, e.target.value.value])
      } else {
        setOdd([...odd, e.target.value.value])
      }
      
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
          <h2>짝수입니다.</h2>
          <div>
            {even.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <h2>홀수입니다.</h2>
          <div>
            {odd.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default P5
