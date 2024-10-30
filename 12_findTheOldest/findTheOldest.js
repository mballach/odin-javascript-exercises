const findTheOldest = function(arr) {
    let active=0;
    let oldestAge = 0;
    let currentAge = 0;
    for (let i=0;i<=arr.length-1;i++) {
        if (arr[i].yearOfDeath){
            currentAge = arr[i].yearOfDeath-arr[i].yearOfBirth;
        } else {
            currentAge = 2024-arr[i].yearOfBirth;
        }
        if (currentAge>oldestAge){
            active=i;
            oldestAge=currentAge;
        }
        
    }
    return arr[active];
};

// Do not edit below this line
module.exports = findTheOldest;
