// Remove all duplicate items from an array
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let uniqueArr1 = [];
let found = false;

for(let outer= 0; outer < arr1.length; outer++) {
    for(let inner= 0; inner < uniqueArr1.length; inner++) {
            if(arr1[outer] === uniqueArr1[inner]) {
                found = true;
            }  
    }
    if(found == false) {
        uniqueArr1.push(arr1[outer]);
        }
    found = false;
}
document.write("Sample Array : " + arr1);
document.write("<br>Output Array : " + uniqueArr1);