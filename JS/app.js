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