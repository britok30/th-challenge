// Four Number Sum (5 points)

function fourNumberSum(array, lengthOfArr, sum) {
    for (let i = 0; i < lengthOfArr - 3; i++) {
        for (let j = i + 1; j < lengthOfArr - 2; j++) {
            for (let k = j + 1; k < lengthOfArr - 1; k++) {
                for (let l = k + 1; l < lengthOfArr; l++) {
                    if (array[i] + array[j] + array[k] + array[l] == sum) {
                        console.log(
                            `The four numbers in the array that equal that targeted sum are: ${array[i]}, ${array[j]}, ${array[k]}, ${array[l]}`
                        );
                    }
                }
            }
        }
    }
}
const numArray = [7, 6, 4, -1, 1, 2];
const length = numArray.length;
const target = 16;

fourNumberSum(numArray, length, target);

// Palindrome Check (1 point)
function palindromeCheck(str) {
    // This is a simple JS trick. Should reverse the string entirely
    let stringReverse = str.split('').reverse().join('');
    //Should return true if original string === reversed string
    return console.log(str === stringReverse);
}

const palindromeString = 'abcdcba';
palindromeCheck(palindromeString);

// Find Three Largest Numbers (1 point)

function findThreeLargest(arr) {
    // Sorts array from least to greatest
    let sortedArray = arr.sort((a, b) => a - b);
    //Reverse array to be from greatest to least
    sortedArray.reverse();
    // Grab first three values :)
    let largest3 = sortedArray.slice(0, 3);

    return console.log(largest3);
}
const numberArray = [141, 1, 17, -7, -17, -417, 99, 75, 541, 8, 7, 7];
findThreeLargest(numberArray);

// Bubble Sort (1 point)

let bubbleSort = (arr) => {
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return console.log(arr);
};

const bubbleArray = [8, 5, 2, 9, 5, 6, 3];
bubbleSort(bubbleArray);

// Total Points Completed: 8
