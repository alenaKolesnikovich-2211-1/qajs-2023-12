/*
function kolobok(name){
  const enteredName = name.toLowerCase();
  switch(enteredName){
    case "grandad":
      return "I left my grandad !";
      break;
    case "hear":
      return "I left a hare !";
      break;
    case "fox":
      return "She ate me !";
      break;
    default:
      return "I haven't met you !";
  }
}
*/

/*
function newYear(name){
  const enteredName = name.toLowerCase();
  switch(enteredName){
    case "дед мороз":
      return "Дед Мороз! Дед Мороз! Дед Мороз!";
      break;
    case "снегурочка":
      return "Снегурочка! Снегурочка! Снегурочка!";
      break;
    default: 
      return "Проверьте введенное имя персонажа!";
  }
}
*/

import { kolobok, newYear } from './modules.js'

// call function "Kolobok"
console.log(`дедушка : "${kolobok("дедушка")}"`);
console.log(`ЗаяЦ : "${kolobok("ЗаяЦ")}"`);
console.log(`ЛИСА : "${kolobok("ЛИСА")}"`);
console.log(`Bear (other hero): "${kolobok("bear")}"`);
console.log(`no_name (empty_string) : "${kolobok("")}"`);

// call function "newYear"
console.log(`"ДЕД мороз": ${newYear("ДЕД мороз")}`);
console.log(`"ДЕД МОРОЗ": ${newYear("ДЕД МОРОЗ")}`);
console.log(`"снеГУРОчка": ${newYear("снеГУРОчка")}`);
console.log(`"снегурочка": ${newYear("снегурочка")}`);
console.log(`"снеговик": ${newYear("снеговик")}`);
console.log(`"дед Мазай": ${newYear("дед Мазай")}`);
console.log(`" " (empty_string): ${newYear(" ")}`);


