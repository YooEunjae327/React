import React, { useState } from 'react'
import "../css/P4.css"

const P4 = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [table, setTable] = useState([])

  const handleRangeSubmit = (event) => {
    event.preventDefault()
    const startNumber = parseInt(event.target.start.value)
    const endNumber = parseInt(event.target.end.value)
    const newTable = []

    if (startNumber <= endNumber) {
      for (let i = startNumber; i <= endNumber; i++) {
        const row = []
        for (let j = 1; j <= 9; j++) {
          row.push(i * j)
        }
        newTable.push(row)
      }
    } else {
      for (let i = endNumber; i <= startNumber; i++) {
        const row = []
        for (let j = 1; j <= 9; j++) {
          row.push(i * j)
        }
        newTable.push(row)
      }
    }

    setStart(startNumber)
    setEnd(endNumber)
    setTable(newTable)
  }

  return (
    <div>
      <form onSubmit={handleRangeSubmit}>
        <h1>구구단 입력기</h1>
        <label>
          시작:
          <input type="number" name="start" defaultValue="0" />
        </label>
        <label>
          끝:
          <input type="number" name="end" defaultValue="0" />
        </label>
        <button type="submit">Show Table</button>
      </form>
      <table>

        <tbody>
          {[...Array(9)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <th>{rowIndex + 1}곱하기</th>
              {table.map((row, index) => (
                <td key={index}>{row[rowIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default P4
