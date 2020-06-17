import '../scss/main.scss';

/* place your code below */

/*
//const name = "Konrad Walenrod";
//const age = 10;

//alert(`Cześć i czołem, nazywam się ${name}, mam ${age} lat/a.`);
//console.log(`Poprawka: dzień dobry, nazywam się ${name}, mam ${age} lat/a.`);

newAutoHeader = document.querySelector(".article__header--js");
newAutoParagraph = document.querySelector(".article__paragraph--js");
//console.log(newAutoHeader);
//console.log(newAutoParagraph);
newAutoHeader.innerHTML = '"Non Stop"- Brian W. Aldiss';
newAutoParagraph.innerHTML =
  "Plemię Roya Complaina żyje w Pokładach porośniętych wybujałą i dziką roślinnością, walcząc o przetrwanie w nieprzyjaznym świecie. Wrogami są inne plemiona ludzi, flora i fauna. Istnieją też dalsze zagrożenia – mityczni Ludzie z Dziobu, legendarni Giganci czy przerażający Obcy.";
//console.log(newAutoHeader);
//console.log(newAutoParagraph);

//funkcje

const myAge = 38;
const myName = "Antonio";

const randomPerson = {
  firstName: "Antonio",
  secondName: "Banderas",
  age: 45,
  isAlive: true,
  placeOfBirth: "Malaga",
  sing: (song) => {
    console.log(`I,m singing a song:${song}`);
  },
  wife: {
    name: "Salma",
    surname: "Hayek",
    age: 40,
  },
};

function greetOne(myName, myAge) {
  console.log(
    `Returned by standard definition: My name is ${myName} and I am ${myAge} years old.`
  );
}

const greetTwo = (myName, myAge) => {
  console.log(
    `Returned by (fat) arrow definition: My name is ${myName} and I am ${myAge} years old.`
  );
};

greetOne(myName, myAge);
greetTwo(myName, myAge);

//greet with data from object
greetTwo(randomPerson.firstName, randomPerson.age);
greetTwo(randomPerson.wife.name, randomPerson.wife.age);
greetOne(randomPerson["firstName"], randomPerson["age"]);

console.log("");
console.log("");
console.log("************ T Y D Z I E Ń  V I ************");

myVariable = 13;

if (myVariable == 4) {
  console.log("po prostu IF");
} else if (myVariable == 8) {
  console.log("piersze ELSE IF");
} else if (myVariable == 12) {
  console.log("drugie ELSE IF!");
} else {
  console.log("nic nie znalazłem:(");
}

//console.log(typeof [])
*/

//obsługa hamburger menu

const hamburger = document.querySelector(".hamburger--js");
//console.log(hamburger);

hamburger.addEventListener("click", () => {
  const navigationEvent = document.querySelector(".navigation--js");
  navigationEvent.classList.toggle("navigation--open");
});
