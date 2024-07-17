let arr = [1, 3, 5, 2, 4, 5, 10];
// In ra cac phan tu > 4
let brr = arr.filter(item => item > 4)
console.log(brr);


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
// Dung filter in ra cac sinh co diem >= 9
let newL = list.filter(item => {
    item.score++;
    return item.score>=9;
});
console.log(newL)