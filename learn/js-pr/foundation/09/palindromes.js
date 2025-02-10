const palindromes = function (s) {
    s=s.toUpperCase();
    let a=[...s];
    let chars="ABCDEFGHIJKLMNOP0123456789";
    a=a.filter(item=>chars.includes(item));
    console.log(a);
    for(let i =0; i<a.length/2; i++){
        if(a[i]!=a[a.length-i-1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
