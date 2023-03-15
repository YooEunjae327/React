import React, { useState } from 'react'

function P4() {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [table, setTable] = useState([])

  function handleRangeSubmit(event) {
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
        <label>
          Start:
          <input type="number" name="start" defaultValue="0" />
        </label>
        <label>
          End:
          <input type="number" name="end" defaultValue="0" />
        </label>
        <button type="submit">Show Table</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            {table.map((row, index) => (
              <th key={index}>{start + index}단</th>
            ))}
          </tr>
        </thead>
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
