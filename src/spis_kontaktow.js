console.log();
console.log('Zadanie 1');
console.log('----------------');
console.log();
let spis_kontaktow = [
    {
    name: "Maxwell Wright",
    phone: "(0191)7196495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
},
    {
    name: "Raja Villarreal",
    phone: "08663982895",
    email: "posuere.vulputate@sed.com"
},
    {
    name: "Helen Richards",
    phone: "08001111",
    email: "libero@convallis.edu"
}
];

console.log(spis_kontaktow);

console.log();
console.log('Zadanie 2');
console.log('----------------');
console.log();

console.log(spis_kontaktow[0], spis_kontaktow[2])

let nowy_kontakt = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};
spis_kontaktow.push(nowy_kontakt);
console.log(spis_kontaktow[0], spis_kontaktow[3]);
console.log(spis_kontaktow.length);