// let c=[1,2,3,4,5];
// let newc = c.filter((elem)=>{
//     return elem > 1 && elem<4   ;
// });
// console.log(c);
// console.log(newc);



type jTypes={
    name: string,
    age: number,
    desig: string};
  
  let nam:jTypes[] = 
  [  { name: "a", age: 1, desig: "jco" },
    { name: "b", age: 2, desig: "lfr" },
    { name: "c", age: 3, desig: "sc" },
    { name: "d", age: 4, desig: "EMT" },
    { name: "e", age: 5, desig: "SI" },
  ]
  let data= nam.find((elem) => {
    return elem.name == "d"
  });
  console.log(data);
  console.log(data?.age);