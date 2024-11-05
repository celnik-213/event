console.log("task 1")

console.log(2*3+1);// expected 7

console.log(2**4);// expected 16

console.log(5*1); // expected 5

console.log((8**2)-(5**2));// expected 39

console.log(" ")
console.log("task 2")
console.log(" ")

console.log(4*5==20);

console.log(6*5=="30");

console.log(-17<0);

console.log(25>1);

console.log(2+2*2!==4);

console.log(" ")
console.log("task 3")
console.log(" ")

console.log(true||false);

console.log(false==false);

console.log(false || false || true);

console.log(true || false == false&&true);

console.log(" ")
console.log("task 4")
console.log(" ")

let a = 3;
let b = 2;
let c;
c = a + b;
console.log(c);
console.log("zadanie 2")
console.log(a>=0 && b>=0)

console.log(" ")
console.log("task 5")
console.log(" ")

let x =3;
let y =4;
let z =5;

if(z+x>y || x+y>z || y+z>x){
    const s = (x+y+z) /2;
    const pole = Math.sqrt(s*(s-x)*(s-y)*(s-z));
    console.log("Pole trójkąta wynosi: ", pole)
}else{
    console.log("Z podanych boków nie sposób utworzyć trójkąta.")
}

