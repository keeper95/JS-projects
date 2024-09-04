const array = [1, 50, 43, 80, 2, 14, 12, 10, 6, 8, 99, 10, 200, 150, 22, 33];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count +=1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;  
}

console.log(linearSearch(array, 80));  
console.log('count = ', count);