let a = ["cake", "apple pie", "cookie", "chips", "patties"]
let userChoice = prompt("Welcome to ABC Bakery. What do you want to order Sir/ma'am?", "cookie");

let found = false;
for(let index= 0; index < a.length; index++) {
    if(a[index] === userChoice) {
        alert(userChoice + " is available for purchase");
        found = true;
    }
}

if(found == false) {
    alert("Sorry! " + userChoice + " is not available now");
}

