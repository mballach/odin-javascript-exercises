const getTheTitles = function(bookArr) {
    let retArr = []
    for (const book of bookArr){
        retArr.push(book.title)
    }
    return retArr;
};

// Do not edit below this line
module.exports = getTheTitles;
