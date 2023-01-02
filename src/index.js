module.exports = function reverse (num) {
   f=0;
    if(num.toString()[0]=='-'){++f}
    s='';
    for(let i=num.toString().length-1;i>=0+f;--i){
        s+=num.toString()[i];
    }
    return Number(s);
}
