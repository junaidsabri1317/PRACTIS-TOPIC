 //var prompt = require('prompt-sync')();
// //
// // get input from the user.
// //
 //var n = prompt('How many more times? ');

var prompt:any = require('prompt-sync')();

var n:number = prompt('Enter Number to Get Table? ');
{

for (let i:number = 1; i <=10;i++ )
{
    console.log(n,"x",i,"=",n*i);
}}
export {};