///////////  SPREED OPERATORS:-(array)  concet multiple array in single array  /////////////
//
// const first=[1,2,3,4,5]
// const second=[6,7,8,9,10]
// const third=[10,11,12,13,14,15]
// const newarr=[...first,...second,...third]
// console.log(newarr);   //  O/p in single array [1,2,3,4,5,6,7,8...]
//
///////////  SPREED OPERATORS:-(objct)  concet multiple object in single object  ////////////
//
// var text={name:"yusuf",contact:9766,adress:"navapur"}
// var text1={name1:"mulla",contact1:714070,adress1:"chinchpada"}
// var new1={...text,...text1}
// console.log(new1);    // O/p in single obj{name:'yusuf',adress:'navapur'}
//
//////////   SPREED OPERATORS:- (copy array and obj) both array consol copy   ///////////////
//
// const first=[1,2,3,4,5]
// const second=[6,7,8,9,10]
// const third=[10,11,12,13,14,15]
// const newarr=[...first,...second,...third]
// console.log(newarr);
// var text={name:"yusuf",contact:9766,adress:"navapur"}
// var text1={name1:"mulla",contact1:714070,adress1:"chinchpada"}
// var new1={...text,...text1}
// console.log(new1);
// var copyarr=[...newarr]
// var copyobj={...new1}
// console.log(copyarr);
// console.log(copyobj);   // O/p (object and array both copy in o/p)
//
////////////   SPREED OPERATORS:-  concet array without coma(,)  ////////
//
// var nam=[1,2,3,4,5,6]
// var nam1=[7,8,9,10]
// var nam2=[11,12,13,14,15]
// console.log(...nam,...nam1,...nam2); // O/p 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
//
////////////  REST OPERATORS :- if multiple argument add and calcute ///////
//
// function num(a, ...b) {
//   let total = b.reduce((acc, cur) => acc + cur);
//   return a + total;
// }
// console.log(num(10, 20, 30, 40, 50, 60));  // O/p is total 210
//
/////////    REST OPERATORS:- discount method   //////////////////////////////////////
// const paidCost=(discount,...goodsCost)=>{
//     const totalCost=goodsCost.reduce((a,c)=>a+c)
//     const discountedcost=totalCost*discount
//     return totalCost-discountedcost
//     }
//     console.log(paidCost(0.17,1000,2000,7000));  // 17% discount
//
////////  travelling fuel cost   /////////////////////////////////////////////
//
// const travellingcost=(KM,carmilage,fuelprice)=>KM/carmilage*fuelprice
// console.log(travellingcost(300,20,100));  // O/p 1500
//
////