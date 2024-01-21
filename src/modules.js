// Функция
export function greet(name) {
  return `Hello, ${name}!`
}

// Стрелочная функция
export const farewell = name => {
  return `Goodbye, ${name}!`
}

export const hello123 = name => {
  return `Hello, ${name} !`
}

export const kolobok = name => {
  const enteredName = name.toLowerCase();
    switch(enteredName){
      case "дедушка":
        return "Я от дедушки ушёл!";
        break;
      case "заяц":
        return "Я от зайца ушёл";
        break;
      case "лиса":
        return "Меня съели";
        break;
      default:
        return "Я тебя не встречал!";
    }
}

export function newYear(name){
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
