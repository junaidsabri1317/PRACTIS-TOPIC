// find arry
let arr = [
{name : "aa" , age:1},
{name : "bb ", age:2},
{name : "cc" , age:3}
];
let resultFind:any = arr.find((item)=>{
    // return item == ("c")
    return item.name  == "aa"
})
console.log("This is find",resultFind);