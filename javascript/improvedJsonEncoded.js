let data = [
   {"username":"ali","hair_color":"brown","height":1.2},
   {"username":"marc","hair_color":"blue","height":1.4},
   {"username":"joe","hair_color":"brown","height":1.7},
   {"username":"zehua","hair_color":"black","height":1.8}
];

function jsonImproved(arrayOfObject) {
   let result = {};

   // it can be assumed that all records in the initial JSON result set have the same fields, and that 
   // said fields are indexed in the same order
   result["h"] = Object.keys(arrayOfObject[0]);
   result["d"] = []; 
   
   arrayOfObject.forEach(function(obj) {
      result["d"].push(Object.values(obj));
   })

   return result;
}

console.log(jsonImproved(data));

// let expected = {
//    "h":["username","hair_color","height"],
//    "d":[
//       ["ali","brown",1.2],
//       ["marc","blue",1.4],
//       ["joe","brown",1.7],
//       ["zehua","black",1.8]
//    ]
// };