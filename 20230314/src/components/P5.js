import React, { useState } from 'react'

function P5() {
  const [numbers, setNumbers] = useState(Array(10).fill(0))
  const [oddNumbers, setOddNumbers] = useState([])
  const [evenNumbers, setEvenNumbers] = useState([])

  function handleNumberSubmit(event) {
    event.preventDefault()
    const newNumbers = []
    for (let i = 0; i < 10; i++) {
      const number = parseInt(event.target[`number${i}`].value)
      newNumbers.push(number)
    }
    const newOddNumbers = newNumbers.filter((number) => number % 2 !== 0)
    const newEvenNumbers = newNumbers.filter((number) => number % 2 === 0)
    setNumbers(newNumbers)
    setOddNumbers(newOddNumbers)
    setEvenNumbers(newEvenNumbers)
  }

  return (
    <div>
      <form onSubmit={handleNumberSubmit}>
        {numbers.map((number, index) => (
          <label key={index}>
            Number {index + 1}:
            <input
              type="number"
              name={`number${index}`}
              defaultValue={number}
            />
          </label>
        ))}
        <button type="submit">Sort Numbers</button>
      </form>
      <div>
        <h2>Odd Numbers</h2>
        {oddNumbers.length > 0 ? (
          <ul>
            {oddNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        ) : (
          <p>No odd numbers found.</p>
        )}
      </div>
      <div>
        <h2>Even Numbers</h2>
        {evenNumbers.length > 0 ? (
          <ul>
            {evenNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        ) : (
          <p>No even numbers found.</p>
        )}
      </div>
    </div>
  )
}

export default P5
