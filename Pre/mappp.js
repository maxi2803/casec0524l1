let arr = [1, 3, 5, 2, 4, 5, 10];
arr.map(x => {
    console.log(x)
})
console.log('-------------------------------')
arr.map((x, y) => {
    console.log(x + ' tai vi tri '+y)
})

// Dùng map, in ra các phần tử chẵn trong mảng
arr.map(x => {
    if ( x%2 == 0 ){
        console.log(x)
    }
})
// Dùng map, tính tích các phần tử trong mảng
let t = 1;
arr.map(x =>{
    t *= x;
})
console.log(t);