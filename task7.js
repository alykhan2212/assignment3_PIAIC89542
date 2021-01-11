let a = [10,20,4,40,60,70];
let b = [1,2,3,4,5,6,7,8,9,10];

for(let i= 0; i < a.length; i++) {
    b.push(a[i]);
}

let c =[];
let flag = false;

for(let outer=0; outer < b.length; outer++) {
    for(let inner= 0; inner < c.length; inner++) {
        if(b[outer] === c[inner]) {
            flag = true;
        }
    }
    if(flag == false) {
        c.push(b[outer]);
    }
    flag = false;
}
document.write(c); 