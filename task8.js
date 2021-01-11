// a
document.write("Counting: ");
for(let i= 1; i<=15; i++) {
    if(i === 15) {
        document.write(i);
    }
    else {
        document.write(i + ", ");
    }
}

// b
document.write("<br>Reverse Counting: ");
for(let i= 10; i>=1; i--) {
    if(i === 1) {
        document.write(i);
    }
    else {
        document.write(i + ", ");
    }
}

// even series
let limit = 20;
document.write("<br> Even: ");
for(let i= 0; i <= limit; i++) {
    if(i < limit) {
        if(i % 2 === 0) {
            document.write(i + ", ");
        }
    }
    else {
        document.write(i);
    }
}

// Odd
limit = 19;
document.write("<br> Odd: ");
for(let i= 0; i <= limit; i++) {
    if(i < limit) {
        if(i % 2 !== 0) {
            document.write(i + ", ");
        }
    }
    else {
        document.write(i);
    }
}

// Series
limit = 20;
document.write("<br> Series: ");
for(let i= 2; i <= limit; i++) {
    if(i < limit) {
        if(i % 2 === 0) {
            document.write(i + "k, ");
        }
    }
    else {
        document.write(i + "k");
    }
}
