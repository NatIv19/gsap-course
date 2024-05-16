 let titleProject = "Оценка стоимости";
 let screensValue = ["шаблонные", "с уникальным дизайном", "с анимациями"];
 let screenPrice;
 let percentage = 10;
 let fullPrice = 3500;
let responsive = true;
let allServicePrices;
let service = [];
let service2;
let servicePrice;
let servicePrice2;
let servicePercentPrice;
// console.log(titleProject, screensValue, screenPrice, percentage, fullPrice, responsive);

const asking = function () {
    titleProject = prompt("Название проекта?", 'Калькулятор');
    let value = prompt("Тип экрана? 1 - шаблонные, 2 - с уникальным дизайном, 3 - с анимациями");
    if (value == 1) screensValue = screensValue[0];
    else if (value == 2) screensValue = screensValue[1];
    else if (value == 3) screensValue = screensValue[2];
    value = prompt("Нужен ли респонсивный сайт? да/нет");
    if (value == "да") responsive = true;
    if (value == "нет") responsive = false;

    screenPrice = +prompt("Сколько это будет стоить?", 12000);

    while (!isNumber(screenPrice)|| screenPrice === null) {
        screenPrice = +prompt("Сколько это будет стоить?", 12000);
    }
    screenPrice = Number(screenPrice);
 }

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++){
        if (i == 0) service[i] = prompt("Какой сервис нужен?");
        if (i>0) service[i] = prompt("Какой еще сервис нужен?");
        servicePrice = +prompt("Сколько это будет стоить?"); 
        while (!isNumber(servicePrice) ||servicePrice === null) {
            servicePrice = +prompt("Уточните чтоимость. Введите число. Сколько это будет стоить?");
        }
        sum += servicePrice;
    }
    return sum;
}



// fullPrice = screenPrice + servicePrice1 + servicePrice2;
// let servicePercentPrice = Math.round(fullPrice * (1 - percentage / 100));
// console.log(servicePercentPrice);

const getPercentageMessage = function (price) {

    if (price> 50000) return "Сделаем скидку 10%";
    else if (price > 20000 && price <= 50000) return "Сделаем скидку 5%";
    else if (price <= 20000 && price > 0) return "Скидка не предусмотрена";
    else if (price <= 0) return "Что-то пошло не так";
}

const getAllPrices = function() {
    return servicePrice1 + servicePrice2;
}

function getFullPrice() {
    return allServicePrices + screenPrice;
}

function getTitle() {
    titleProject = titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
    return titleProject;
}
console.log("titleProject=", getTitle());

function getServicePercentPrices() {
    return Math.round(fullPrice * (1 - percentage / 100));
}


// function getRollbackMessage() {
//     let discount = 0;
//     if (servicePercentPrice > 50000) discount = 10;
//     else if (servicePercentPrice > 20000 && servicePercentPrice <= 50000) discount = 5;
//     else if (servicePercentPrice <= 20000 && servicePercentPrice > 0) discount = 0;
//     else if (servicePercentPrice <= 0) console.log("Что-то пошло не так");

//     console.log("Ваша скидка = ", discount, "%");
// }

function isNumber(text) {
    return !isNaN(parseFloat(text))&&isFinite(text); 
}

//getRollbackMessage();


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
getTitle();

console.log("titleProject = ", titleProject);
console.log("allServicePrices = ", allServicePrices);
console.log("fullPrice = ", fullPrice);
console.log("servicePercentPrice = ", servicePercentPrice);
console.log(getPercentageMessage(fullPrice));
