const removeFromArray = function(a, ...args) {
    let ans=[];
    for(let i=0; i<a.length; i++){
        let flag=1;
        for(let j=0; j<args.length; j++){
            if(a[i]===args[j]){
                flag=0;
                break;
            }
        }
        if(flag) ans.push(a[i]);
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
