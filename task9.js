
let a = [24, 53, 78, 91, 12];
let b = a[0];
let list = [];
for(let i= 0; i < b; i++) {
	if(b < a[i]) {
        b = a[i];
    }

}
document.write("Array items = " + a + ", ");
document.write("<br>The largest number is " + b);