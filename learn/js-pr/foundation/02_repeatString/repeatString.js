const repeatString = function(rep, n) {
    if(n<0) return "ERROR";
    let s="";
    for(let i=0; i<n; i++){
        s+=rep;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
