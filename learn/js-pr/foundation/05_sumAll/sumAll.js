
const sumAll = function(startPosition, endPosition) {
    if(startPosition<0) return "ERROR";
    if(endPosition<0) return "ERROR";
    if(typeof startPosition!="number") return "ERROR";
    if(typeof endPosition!="number") return "ERROR";
    if(!Number.isInteger(startPosition)) return "ERROR";
    if(!Number.isInteger(endPosition)) return "ERROR";
    if(startPosition>endPosition) [startPosition, endPosition]=[endPosition, startPosition];
    let answer=0;
    for(let i=startPosition; i<=endPosition; i++){
        answer+=i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
