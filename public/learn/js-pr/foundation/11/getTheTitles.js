const getTheTitles = function(booksInfo) {
    let booksName=[];
    for(let bookInfo in booksInfo){
       booksName.push(booksInfo[bookInfo].title); 
    }
    return booksName;
};

// Do not edit below this line
module.exports = getTheTitles;
