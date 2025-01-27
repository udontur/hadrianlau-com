const leapYears = function(currentYear) {
    
    if(currentYear%4==0&&currentYear%100!=0) return true;
    if(currentYear%400==0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
