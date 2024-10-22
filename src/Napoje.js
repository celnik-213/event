//task1
let napoje = {
    nazwa: "Napoj Orzeźwiający",
    objetosc: "500 ml",
    cena: 3.20
};
//task2
let napoje_tab = [
    {
      nazwa: "Fanta",
      objetosc: "1500 ml",
      cena: 4.50,
    },
    {
        nazwa: "Cola",
        objetosc: "500 ml",
        cena: 7.50,
    },
    {
        nazwa: "Sprite zero",
        objetosc: "750 ml",
        cena: 8,
    }
];
console.log("Długość tablicy wynosi: ", napoje_tab.length);

//task3

napoje_tab.forEach(nazwy => console.log("Nazwa napoju: ", nazwy.nazwa));

//task4

napoje_tab.push(napoje);
console.log(napoje_tab);

//task5

let kopia_napoje = napoje_tab.slice();

kopia_napoje.shift();

console.log("Długość tablicy wynosi: ", kopia_napoje.length);

//task6

function cena_wszystkiego(napojee){

    let suma_cena = 0;
    for(let i = 0; i<napojee.length; i++){
        suma_cena += napojee[i].cena;
    }
    return suma_cena;
}
console.log("Cena wszystkich napoji wynosi: ", cena_wszystkiego(napoje_tab));

