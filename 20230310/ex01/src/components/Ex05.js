const Ex05 = () => {
    const names = ['사키오카', '누시다', ' 고토']
    names.map( (name) => {
        console.log(name)
    })

    const names1 = names.filter( (name) => { return name !== '사키오카'})

    return (<div>
        { names.map((name) => { return <h1>{name}</h1>})}
    </div>)
}

export default Ex05