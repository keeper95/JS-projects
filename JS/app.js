const stringHelloWorld = 'Hello world!';

console.log(stringHelloWorld);

//basic arithmetic operators

const width = 10;
const height = 5;
const space = width * height;

const volume = 2 ** 3; // ** - exponentiation

console.log(volume);

// string operators

const city = 'Kyiv';
const street = 'Volodymyrska';

console.log(city + ', ' + street + ' ' + 5);


// task 1

const salaryPerHour = 80,
    hoursPerDay = 5,
    daysPerWeek = 5,
    limitedTime = 11,
    timeForTask = 40;

const workingDaysPer2Week = (daysPerWeek) *2,
    actuallyWorkingDays = workingDaysPer2Week -2;

const actuallyWorkingTime = actuallyWorkingDays * hoursPerDay,
    enoughTime = actuallyWorkingTime >= timeForTask,
    salaryPerTask = salaryPerHour * actuallyWorkingTime;
    
console.log(enoughTime + ' Salary for this task: ' + salaryPerTask);

//task 2

let money = 12000;
let housePrice = 13500;
let rate = 7;

rate = 7 / 100;

depositBalance = money * (1 + rate / 12) ** 24;

if (depositBalance > housePrice){
    console.log('You have enough money for buying house');
} else {
    console.log('Not enough money!')
}
console.log(depositBalance - housePrice);

// switch 

let role = 'Manager';

switch (role) {
    case 'Manager':
            console.log("Manager")
        break;
    case "Administrator":
            console.log("Administrator")
        break;

    default:
        console.log("Who are you?")
        break;
}

// task 3 

let scanner = prompt('7 + 15?');

if (scanner === 22) {
    console.log('Correct!');
} else {
    console.log('Incorrect');
}

const isAdmin = true;
const canWrite = true;

console.log(`System file  ${isAdmin && canWrite}`); //boolean and
console.log(`Common file  ${isAdmin || canWrite}`); // boolean or
console.log(`Invert admin rules  ${!isAdmin}`); // boolean not

//task 4

const gamerBalance = 1200;
const gamerBonus = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (gamerBalance > 1000 || gamerBonus > 100) && !isBanned && !isExist && isSelling;

console.log(`Can I buy this game: ${canBuy ? 'Yes' : 'No'}`);

// functions 

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKM (distance){
    return distance * KM_IN_USD;
}

function totalPrice (deliveryPresent, deliveryPresent1, distance){
    const priceOfFirstPresent = calculateW(deliveryPresent);
    const priceOfSecondPresent = calculateW(deliveryPresent1);
    const distancePrice = calculateKM(distance);
    return priceOfFirstPresent + priceOfSecondPresent + distancePrice;
}

console.log(totalPrice(1, 2, 10));

//task 5 (arrow function)

const toPowerArrow = (num, power) => num ** power;

console.log(toPowerArrow(2, 2));

// task 6

function checkUserAge(userAge){
    if(userAge > 24){
        return true;
    } return false;
}

function checkUserHaveWork (userWork){
    if(userWork = true){
        return true;
    } return false;
}

function checkUserAmountMoney (userMoneyIsEnough){
    if(userMoneyIsEnough >= 2000){
        return true;
    } return false;
}

function checkUserAbylityToBuy(age, work, money) {
    const userRealAge = checkUserAge(age);
    const userRealWork = checkUserHaveWork(work);
    const userRealAmountOfMoney = checkUserAmountMoney(money);

    if(userRealAge && userRealWork === true){
        money + 500;
    } else return false;

    if (userRealAge > 24 && userRealWork === false){
        money + 100;
    } else return false;

    if(userRealAmountOfMoney >= 2000){
        return true;
    } else return false;
}

console.log(checkUserAbylityToBuy(24, true, 2000));


//task 7 

const tasks = [`task 1`];

function addToTheEnd (theEndOfArray){
    
    theEndOfArray = tasks.push(`task 2`);
    return tasks;
}

function deleteElementByName(elementName) {
    
    const index = tasks.indexOf(elementName);  
    
    if (index !== -1) {
        tasks.splice(index, 1);  
    }
    return tasks;
}

function addToTheStart (theEndOfArray){
    
    theEndOfArray = tasks.unshift(`task 33`);
    return tasks;
}


console.log(addToTheEnd());  
console.log(deleteElementByName('task 2'));  
console.log(addToTheStart());
