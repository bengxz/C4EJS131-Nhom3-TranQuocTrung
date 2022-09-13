function numberOneTriangle(n){
    for ( let i = 1; i <= n; i++){
        let m = '';
        for(let j = 1; j <= i; j++){
            m = m + '*'
        }
        console.log(m);
    }
}
numberOneTriangle(10)