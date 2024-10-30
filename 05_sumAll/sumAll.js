const sumAll = function(intA, intB) {
    let retVal = 0;
    if (!Number.isInteger(intA)){
        return "ERROR"
    } else if (!Number.isInteger(intB) || intA<0 || intB<0){
        return "ERROR"
    } else if (intA>=intB){
        while (intB<intA+1){
            retVal+=intB;
            intB++;
        }
        return retVal;
    } else {
        while (intA<intB+1){
            retVal+=intA;
            intA++;
        }
        return retVal;
    }
};

// Do not edit below this line
module.exports = sumAll;
