import { Link } from "react-router-dom"
import "../css/Main.css"

const Main = () => {

  return (
    <div className="bg">
        <h1>Main Page</h1>
        <ul>
            <Link to="/p1"><li>난수</li></Link>
            <Link to="/p2"><li>가위바위보</li></Link>
            <Link to="/p3"><li>시분초 출력</li></Link>
            <Link to="/p4"><li>구구단 출력</li></Link>
            <Link to="/p5"><li>홀수와 짝수</li></Link>
            <Link to="/p6"><li>내림차순 오름 차순 정렬</li></Link>
        </ul>
    </div>
  )
}

export default Main