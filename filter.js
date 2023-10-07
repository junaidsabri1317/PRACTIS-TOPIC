"use strict";
let c = [1, 2, 3, 4, 5];
let newc = c.filter((elem) => {
    return elem > 1 && elem < 4;
});
console.log(c);
console.log(newc);
