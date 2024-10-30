const reverseString = function(input) {
    len = input.length
    output = ""
    if (len == 0){
        return output;
    } else {
        while (len>0) {
            output = output+input[(len-1)];
            len--;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = reverseString;
