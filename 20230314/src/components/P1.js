import { useState } from "react"

const P1 = () => {
    const random = Math.floor(Math.random() * 100)
    const [rand, setRand] = useState(Math.floor(Math.random() * 100))

    const res = () => { setRand(random)}

    return (<dib>
        <h1>{rand}</h1>
        <button onClick={res}>다시</button>
    </dib>)
}

export default P1