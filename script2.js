let a = [189, 150, 169, 175, 190];
let count = 0;
for(let i=0; i<a.length;i++){
    if(a[i]>180){
        count++;
    }
}
console.log(count);

let sum = 1;
let b = 3;
do{
    sum*=b;
    b++;
}while(b<=49);