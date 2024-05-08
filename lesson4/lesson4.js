 let titleProject = "Оценка стоимости";
 let screensValue = ["шаблонные", "с уникальным дизайном", "с анимациями"];
 let screenPrice = 1000;
 let percentage = 10;
 let fullPrice = 3500;
 let responsive = true;
// console.log(titleProject, screensValue, screenPrice, percentage, fullPrice, responsive);

 titleProject = prompt("Название проекта?");
let value = prompt("Тип экрана? 1 - шаблонные, 2 - с уникальным дизайном, 3 - с анимациями");
if (value == 1) screensValue = screensValue[0];
else if (value == 2) screensValue = screensValue[1];
else if (value == 3) screensValue = screensValue[2];

value = prompt("Нужен ли респонсивный сайт? да/нет");
if (value == "да") responsive = true;
if (value == "нет") responsive = false;

let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.round(fullPrice * (1 - percentage / 100));
console.log(servicePercentPrice);

if (fullPrice > 50000) console.log("Сделаем скидку 10%");
else if (fullPrice > 20000 && fullPrice <= 50000) console.log("Сделаем скидку 5%");
else if (fullPrice <= 20000 && fullPrice > 0) console.log("Скидка не предусмотрена");
else if(fullPrice <=0) console.log("Что-то пошло не так");