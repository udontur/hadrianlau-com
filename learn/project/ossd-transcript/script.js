let a=[9, 2, 3, 5, 7, 11];
a=a.filter(a1=>a1%2!=0);
a.sort((a1,b1)=>a1-b1);
console.log(a);