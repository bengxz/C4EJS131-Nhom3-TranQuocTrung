// // Tính tổng S1
let a = 2
let sum = Math.sqrt(100);
for (let i=99; i>=1 ; i--) {
    sum=(Math.sqrt(i+sum))
    a = Math.sqrt(a)
}
console.log(sum/a)

// // Số chính phương từ 1-10000
for(let i=1; i<=100; i++){
    console.log(i*i);
}
