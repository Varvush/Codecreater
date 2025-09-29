let a = 1;
let step = Math.PI/8 ;
let start = -Math.PI;
let end = Math.PI;
let x = start;

while(x<=end){
    let y = a * Math.cos(x);
    console.log("y = " + y);
    x = x +  step;
}