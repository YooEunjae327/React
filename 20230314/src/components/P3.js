import React, { useState } from 'react'

function P3() {
  const [totalSeconds, setTotalSeconds] = useState(0)

  const handleTimeSubmit = (event) => {
    event.preventDefault()
    const inputSeconds = parseInt(event.target.seconds.value)
    setTotalSeconds(inputSeconds)
  }

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  let timeString = ''
  if (hours > 0) {
    timeString += `${hours}시간 `
  }
  if (minutes > 0) {
    timeString += `${minutes}분 `
  }
  timeString += `${seconds}초`

  return (
    <div>
      <form onSubmit={handleTimeSubmit}>
        <label>
          시간 입력
          <input type="number" name="seconds" min="0" defaultValue="0" />
        </label>
        <button type="submit">Start</button>
      </form>
      <h2>{timeString}</h2>
    </div>
  )
}

export default P3
