function add(a,b){
         a+b;
         return a+b;
}
function sub(a,b){
        a-b;
        return a-b;
}
function mul(a,b){
        a*b;
        return a*b;
}
function div(a,b){
        a/b;
        return a/b;
}

var r1= add(10,10);
var r2= sub(20,10);
var r3= mul(r1,r2);
var r4= div(r2,r3);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);