// Sort an array from smallest to largest value
let a = [20,53,78,4,91,12];
let temp;

document.write("A = " + a + ",");

for(let i= 0; i <a.length; i++) {
    for(let j= i; j < a.length; j++) {
        if(a[i] > a[j]) {
                temp = a[i];
				a[i] = a[j];
                a[j] = temp;
            }
        
    }
}


document.write("<br>Output = "+a);
