//config
//Buzz cada multiplo de 3
//Yogurligth coda multiplo de 5
// buzz yogurligth coda multiplo de 3 y 5 

let result = [];

for(let i = 1; i <=100; i++){
    if(i % 5 == 0 && i % 3 == 0 ){ result.push("fizzbuzz"); continue; }
    if(i % 3 == 0 ){ result.push("fizz"); continue; }
    if(i % 5 == 0 ){ result.push("buzz"); continue; }
    result.push(i);
}

console.log(result);