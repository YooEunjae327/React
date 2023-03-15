import React, { useState } from 'react'
import './NumberSorter.css'

function NumberSorter() {
  const [numbers, setNumbers] = useState(Array(10).fill(0))
  const [sortedNumbers, setSortedNumbers] = useState([])
  const [isAscending, setIsAscending] = useState(true)

  const handleNumberSubmit = (event) => {
    event.preventDefault()
    const newNumbers = Array(10)
      .fill(0)
      .map((_, index) => parseInt(event.target[`number${index}`].value))
    const sorted = isAscending
      ? newNumbers.sort((a, b) => a - b)
      : newNumbers.sort((a, b) => b - a)
    setNumbers(newNumbers)
    setSortedNumbers(sorted)
  }

  const handleSortOrderChange = () => {
    setIsAscending(!isAscending)
    const sorted = isAscending
      ? numbers.sort((a, b) => b - a)
      : numbers.sort((a, b) => a - b)
    setSortedNumbers(sorted)
  }

  return (
    <div className="number-sorter">
      <form className="number-form" onSubmit={handleNumberSubmit}>
        {numbers.map((number, index) => (
          <label className="number-label" key={index}>
            Number {index + 1}:
            <input
              className="number-input"
              type="number"
              name={`number${index}`}
              defaultValue={number}
            />
          </label>
        ))}
        <button className="sort-button" type="submit">
          Sort Numbers
        </button>
      </form>
      <div className="sort-controls">
        <button className="sort-order-button" onClick={handleSortOrderChange}>
          {isAscending ? 'Sort Descending' : 'Sort Ascending'}
        </button>
      </div>
      <div className="number-list">
        {sortedNumbers.length > 0 ? (
          <ul className="sorted-list">
            {sortedNumbers.map((number, index) => (
              <li className="sorted-item" key={index}>
                {number}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-numbers">No numbers to display.</p>
        )}
      </div>
    </div>
  )
}

export default NumberSorter
