let message = prompt();
let result;

switch(message) {
  case "ru":
    result = "Привет!";
    break;
  case "en":
    result = "Hello!";
    break;
  case "fr":
    result = "Bonjour!";
  default:
    result = "Не известный язык!"
}

console.log(result);

