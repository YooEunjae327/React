import "../css/Register.css"
import React, { useRef ,useState } from "react"

const Register = () => {
    const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

    const idInputRef = useRef(null)
    const passwordInputRef = useRef(null)

    const [fonttSzie, setFontSize] = useState(16)
    const [idCheck, setIdCheck] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")

    const changeFont = (event) => {
      setFontSize(event.target.value)
    }

    const checkId = () => {
      if(check_kor.test(idInputRef.current.value)) {
        setIdCheck("한글이 존재합니다.")
        return
      }

      if(idInputRef.current.value.length > 10 || idInputRef.current.value.length < 5) {
        setIdCheck("글자가 5미만 또는 10초과입니다.")
      } else setIdCheck("")
    }


    const checkPass = () => {
      if (check_kor.test(passwordInputRef.current.value)) {
        setPasswordCheck('한글이 존재합니다.')
        return
      }
        
      if(passwordInputRef.current.value.length > 16 || passwordInputRef.current.value.length < 4) {
        setPasswordCheck("글자가 4미안 또는 16초과입니다.")
      } else setPasswordCheck("")
    }
    
    return (
      <div style={{ fontSize: fonttSzie + 'px' }}>
        <h1>회원가입</h1>
        <div className="in">
          <div>
            <label>
              <strong>아이디</strong>
            </label>
            <input
              type="text"
              pattern="[A-Za-z0-9]*"
              ref={idInputRef}
              autoFocus
              placeholder="5 ~ 10자 이내로 입력해주세요"
            ></input>
            <span className="hid">{idCheck}</span>
          </div>

          <div>
            <label>
              <strong>비밀번호</strong>
            </label>
            <input
              ref={passwordInputRef}
              placeholder="4 ~ 16자 이내로 입력해주세요."
            ></input>
            <span className="hid">{passwordCheck}</span>
          </div>
          <button style={{ fontSize : fonttSzie + 'px'}} onClick={() => {
            checkId()
            checkPass()
          }}>유효성 검사</button>
        </div>

        <div className="fo">
          <h2>폰트</h2>
        </div>
        <div className="fon">
          <input
            className="foin"
            maxLength={30}
            onChange={changeFont}
            type="number"
            defaultValue={16}
          ></input>
        </div>
      </div>
    )
}

export default Register;