const Ex06 = () => {
    const myFormat = (num) => {
        const m = typeof num == "number" ? num.toLocaleString() : "숫자입력"
        return m
    }

  return (
    <div>
      <h1>{`m = ${myFormat(3000)}`}</h1>
      <h1>{`m = ${myFormat("3000")}`}</h1>
    </div>
  )
}

export default Ex06
