/////////    shallow copy:- if we assign any object by using (=) oprator directly
/////////           then it creats the shallow copy of that object
// const obj={
//     fName:"UserFname",
//     lName:"UserLname",
//     mName:" UserMname",
// };
// const copyObj=obj; // copy of original obj (shallow copy)
// copyObj.fName="yusuf" // change obj value
// console.log(obj);  // all original obj replace with new value
// console.log(copyObj);  // all copyobj replace with new value
//
////////////  deep copy :- when we copy any original objct by using spread operators then 
//                    it creat deep copy
// const obj={
//     fName:"UserFname",
//     lName:"UserLname",
//     mName:" UserMname",
// };
// const copyObj=obj   //  copy of original obj (shallow copy)
// const spreadCopy={...obj};  // deep copy of obj
// spreadCopy.mName="mulla"  //change obj value
// console.log(obj); // original copy  not change any value
// console.log(spreadCopy); // deep copy of obj change value
//
/////////////  shalow copy:- nested object shallow copy ////////////////////////
// const moterbike = {
//   bikeName: "BMW",
//   bikeModel: "G15",
//   bikeSize: "2 meter",
//   c: { d: "nanded", e: "maharashtra" },
// };
// const copyobj = moterbike;  // shallo copy
// copyobj.c = { d: "pune", e: "gujrat" }; // nested obj value change
// console.log(copyobj); // orignal arguent not change
// console.log(moterbike);  // O/p orignal argument creplace with copy obj
//
//////////// deep copy:- nested object deep copy
//
// const moterbike = {
//   bikeName: "BMW",
//   bikeModel: "G15",
//   bikeSize: "2 meter",
//   c: { d: "nanded", e: "maharashtra" },
// };
// const spreadCopy={...moterbike}  // deep copy of arignal object
// spreadCopy.c={d:"pune",e:"gujrat"}  // nested obj value change
// console.log(moterbike);  // O/p notchnage originl obj argumnets
// console.log(spreadCopy); // o/p copy object argument change
