//zdanie1
let event = {
  title: "Koncert zespołu X",
  date: "2024-06-15",
  location: "Warszawa"
};

console.log(event);

//zdanie2
let person ={

};

person.name = "Wiktor";
person.email = "uT_4000@zsp3zamosc.pl";

console.log(person.name, person.email);

//zadanie3
let events = [
    {
      title: "Koncert zespołu Y",
      date: "2024-07-20",
      location: "Kraków"
    },
    {
        title: "Festiwal Filmowy",
        date: "2024-08-05",
        location: "Gdańsk"
    },
    {
        title: "Wystawa Sztuki",
        date: "2024-09-10",
        location: "Wrocław"
    }
];

//zdanie4
let event4 = {
  title: "Seminarium o JavaScript",
  date: "2024-10-15",
  location: "Łódź"
};

events.push(event4);
console.log(events);

//zdanie5

let slice_events = events.slice(2,4);

console.log(slice_events);

//zadanie6
events.shift();

console.log("Długość tablicy :", events.length)
events.forEach(title => console.log("Nazwa wydarzenia: ", title.title));

//zdanie7

events.forEach(dates => console.log("Data wydarzenia: ", dates.date));

