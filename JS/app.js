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

    
