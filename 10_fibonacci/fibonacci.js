const fibonacci = function(a) {
    a = parseInt(a);
    current=1;
    previous=0;
    iteration=0;

    if (a<0){
        return "OOPS";
    } else if (a==0) {
        return 0;
    }
    while (iteration<(a-1)) {
        let hold = current;
        current=current+previous;
        previous = hold;
        iteration++
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
