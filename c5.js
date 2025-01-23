function countWord(text){
    let count = 0;
    let space = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            space++;
        }

    }
    count = space+1;
    return count;
}
let text1 = "hello world";
let text2 = "this is the best day";
let text3 = "a bb ccc ddddddd e";
console.log(countWord(text1));
console.log(countWord(text2));
console.log(countWord(text3));