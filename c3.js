function average(array){
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg=sum/array.length;
    return avg;
}
let array1 = [85, 90, 78, 92];
let array2 = [10, 20, 30];
let array3 = [0];

console.log(average(array1));
console.log(average(array2));
console.log(average(array3));
