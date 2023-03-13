const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const balance = movements.reduce(function(accumulator, currentValue, currentIndex, entireArray) {
    console.log(`Iteration ${currentIndex}: ${accumulator}`);
    return accumulator + currentValue;
}, 0);

console.log(balance);




// or




let balance2 = 0;

for (const mov of movements) balance2 += mov;
console.log(balance2);






// Maximum value

const max = movements.reduce((acc, currentValue) => {
    if (acc > currentValue) {
        return acc;
    } else {
        return currentValue;
    }
}, movements[0]);

console.log(max);