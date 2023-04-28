                                                            // ex 2
const question = prompt("Яка “офіційна” назва JavaScript?");

if (question === "ECMAScript") {                              
  console.log("Правильно!");                              
} else {                                                  
  console.log("Ви не знаєте? ECMAScript!");               
}
                                                            // ex 3
const x1 = 10;
const x2 = 30;
const number = 45; 
if (number <= 10){
    console.log("1x");
} else if (number <= 30){
    console.log("2x");
} else {
    console.log("3x");
}
                                                            // ex 4
const isOnline = false;
const isFriend = true;
const isDnd = false;
const canOpenChat = isOnline && isFriend && !isDnd;
console.log(canOpenChat);
                                                            // ex 5
const subscribe = "vip";
if (subscribe === "vip" || subscribe === "pro") {
  console.log("У тебе є доступ до контенту");
} else {
  console.log("У тебе немає доступу");
}
                                                            // ex 6
const putNumber = prompt("Введіть число");
if (putNumber >= 55 && putNumber <= 99) {
  console.log("Число потрапляє в діапазон");
} else {
  console.log("Число не потрапляє в діапазон");
}
                                                            // ex 7
const age = 55;
if (age <= 16) {
  console.log(alert("діти"));
} else if (age > 60) {
  console.log(alert("пенсіонери"));
} else {
  console.log(alert("дорослі"));
}
                                                            // ex 8
const name = "Timur";
const secondName = "Cherin";
if (name.length > 4 && secondName.length > 5) {
  console.log(name.length + secondName.length);
} else {
  console.log("ОЙ, неможливо виконати умову");
}
                                                            // ex 9
const a = 2;
const b = 3;
const result = a + b < 4 ? "Нижче" : "Вище";
console.log(result);
                                                            // ex 10
console.log("У консолі буде Привіт");
                                                            // ex 11
const random = Math.random() * (5 - 1) + 1;
if (random <= 1){
    console.log(1);
} else if (random <= 2){
    console.log(2);
} else if (random <= 3){
    console.log(3);
} else if (random <= 4){
    console.log(4);
} else if (random <= 5){
    console.log(5);
}
                                                            // ex 1
if (true){
const test = 4;
} else{
const test = 3;
}
console.log(test);