//task1
let napoje = {
    nazwa: "Napoj Orzeźwiający",
    objetosc: "500 ml",
    cena: "3.20zł"
};
//task2
let napoje_tab = [
    {
      nazwa: "Fanta",
      objetosc: "1500 ml",
      cena: "4.50zł",
    },
    {
        nazwa: "Cola",
        objetosc: "500 ml",
        cena: "7.50zł",
    },
    {
        nazwa: "Sprite zero",
        objetosc: "750 ml",
        cena: "8zł",
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


