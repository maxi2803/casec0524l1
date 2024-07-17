let x = 10;
let list = ['Helo', 'Hehe', 'Haha'];
let obj = {
    name: 'A',
    score: 10,
    age: 20
}
let listO = [
    {
        name: 'A',
        score: 10,
        age: 25
    }, {
        name: 'B',
        score: 10,
        age: 15
    }, {
        name: 'C',
        score: 10,
        age: 16
    }
]

export default function Demo () {
    return (
        <>
            <h1>{x}</h1>
            {list.map(e => (
                <h2>{e}</h2>
            ))}
            <h2>{obj.name}, {obj.age}, {obj.score}</h2>
            {listO.map((e, index) => (
                <p>{index},{e.name}, {e.score}, {e.age}</p>
            ))}
        </>
    )
}
// 1. Ngan file
// 2. Dung nhieu lan ma viet 1 lan