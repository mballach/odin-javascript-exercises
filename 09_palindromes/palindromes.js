const palindromes = function (str) {
    str = str.replace(/[^\w\s\']|_/g, "")
    str = str.replace(/\s+/g, "");
    str = str.toLowerCase();
    arr = str.split("");
    revArr = arr.toReversed()
    len = arr.length
    i = 0
    while (i<(len-1)) {
        if (arr[i]!=revArr[i]){
            return false;
        }
        i++;

    }
    return true;
};

// Do not edit below this line palindromes("r ,,a.  s,,,ttt,,  ")
module.exports = palindromes;
