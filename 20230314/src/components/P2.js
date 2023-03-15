import React, { useState } from 'react'

const P2 = () => {
    
    const [lose, setLose] = useState(0)
    const [win, setWin] = useState(0)
    const [tie, setTie] = useState(0)

    const [val, setVal] = useState('')
    const [random, setRandom] = useState('')


    const chkValue = (e) => {
        setVal(e.target.value.value)
        afk(e.target.value.value)
    }

    const rand = () => {
      const random = Math.floor(Math.random() * (3 - 1 + 1)) + 1

      const th = {
        1: '가위',
        2: '바위',
        3: '보',
      }
      return th[random]
    }


    const afk = (val) => {
      const random = rand()
      setRandom(random)

      console.log(random)
      console.log(val)



      if (val === '바위' || val === '가위' || val === '보') {
          if(val === random) { setTie(tie + 1) }
          else if(val === '바위') { random === '가위' ? setWin(win + 1) : setLose(lose + 1) }
          else if(val === '가위') { random === '보' ? setWin(win + 1) : setLose(lose + 1) }
          else if(val === '보') { random === '바위' ? setWin(win + 1) : setLose(lose + 1) }

      }
     
    }



    return (
      <div>
        <h1>가위 바위 보중에 하나를 입력하세요.</h1>
        <h2>입력하고 엔터를 눌러 주세요.</h2>
            <form onSubmit={(e) => {e.preventDefault(); chkValue(e)}}>
                <input name="value"></input>
            </form>
        <h2>
           컴퓨터는 {random} 너는 {val} {win}승 {lose}패 {tie}무
        </h2>
      </div>
    )
}








export default P2