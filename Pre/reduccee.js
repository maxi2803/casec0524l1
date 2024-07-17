let arr = [1, 3, 5, 2, 4, 5, 10];

let tich = arr.reduce((t, item) => t * item, 1);
console.log(tich)
let sum = arr.reduce((t, item) => t + item, 1);
console.log(sum);

let list = [
    {
        name: 'A',
        score: 10
    },
    {
        name: 'B',
        score: 8
    },
    {
        name: 'C',
        score: 8
    },
    {
        name: 'D',
        score: 9
    }
]

// Tính tông điểm sv bằng reduce
let s = list.reduce((xx, item) => xx + item.score, 0);
console.log(s)