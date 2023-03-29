import'../css/StopWatch.css'
import { useEffect, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0)
    const [status, setStatus] = useState('실행')

    useEffect(() => {
        let interval;
        if(status === '종료') {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10)
        } else if('실행') {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [status])

    const watchStatus = () => {
        status === '실행' ? setStatus('종료') : setStatus('실행')
           
    }

    const reset = () => {
        setTime(0)
        setStatus('실행')
    }

    return (
      <div>
        <h1>스톱워치</h1>
        <div className="watch">
          <strong>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</strong>
          <strong>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</strong>
          <strong>{('0' + ((time / 10) % 100)).slice(-2)}</strong>
        </div>
        <div className="bu">
          <button className='stso' onClick={watchStatus}>{status}</button>
          <button className="reset" onClick={reset}>초기화</button>
        </div>
      </div>
    )
}

export default StopWatch