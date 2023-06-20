// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names) {
    const appreciationMessages = [];
    for (let i = 0; i < names.length; i++) {
      appreciationMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return appreciationMessages;
  }

  console.log(writeCards(names));

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  countDown(8);