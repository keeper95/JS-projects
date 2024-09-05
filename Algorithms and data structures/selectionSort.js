const arr = [1, 50, 43, 80, 2, 14, 12, 10, 6, 8, 99, 10, 200, 150, 22, 33];
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) { 
            if (array[j] < array[indexMin]) { 
                indexMin = j;
            }
            count += 1;
        }
        if (indexMin !== i) { 
            let tmp = array[i];
            array[i] = array[indexMin];
            array[indexMin] = tmp;
        }
    }
    return array;
}

console.log(selectionSort(arr));
console.log('count =', count);
