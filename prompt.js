"use strict";
//var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
//var n = prompt('How many more times? ');
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var n = prompt('Enter Number to Get Table? ');
{
    for (let i = 1; i <= 10; i++) {
        console.log(n, "x", i, "=", n * i);
    }
}
