const removeFromArray = function(arr, ...vals) {
    retArray = []
    for (const entry of arr) {
        if (vals.includes(entry)) {
            continue;
        } else {
            retArray.push(entry)
        }
    }
    return retArray;

};

// Do not edit below this line
module.exports = removeFromArray;
