function countChar(text, char){
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }
    return count;
}

let text1 = "hello world";
let char1 = 'o';
let text2 = "aaa bbb a";
let char2 = 'a';
let text3 = "abc";
let char3 = 'd';
console.log(countChar(text1, char1));
console.log(countChar(text2, char2));
console.log(countChar(text3, char3));