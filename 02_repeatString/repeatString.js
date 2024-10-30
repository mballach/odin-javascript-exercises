const repeatString = function(input, reps) {
    if (reps<0) {
        return "ERROR";
    } else if (reps==0){
        return "";
    } else {
        output = input;
        reps--;
        while (reps > 0) {
            output = output+input;
            reps--;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
