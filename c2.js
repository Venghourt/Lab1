function reverseArray(array){
    let rerverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        rerverse.push(array[i]);
    }
    return rerverse;
}

let arr1 = [14, 15, 16, 20];
console.log(reverseArray(arr1));
let arr2 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr2));