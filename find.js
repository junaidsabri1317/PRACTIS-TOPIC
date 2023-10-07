"use strict";
// find arry
let arr = ["a", "b", "c",];
let resultFind = arr.find((item) => {
    // return item == ("c")
    return item == ("a");
});
console.log("This is find", resultFind);
