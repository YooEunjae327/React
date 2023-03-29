import { Link } from "react-router-dom"
import "../css/Main.css"

const Main = () => {
    
    return (
      <div className="bg">
        <h1>Main page</h1>
        <ul>
          <Link to="/register">
            <li>회원가입</li>
          </Link>
          <Link to="/stopwatch">
            <li>스톱워치</li>
          </Link>
        </ul>
      </div>
    )

}

export default Main