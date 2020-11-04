function findAllSetSumNumberRecord(n, currentSum, start, resultSet, result) {
   if (currentSum === n) {
      result.push(resultSet.slice());
   }

   for(let i = start; i < n; i++) {
      let tempSum = currentSum + i;

      if (tempSum <= n) {
         resultSet.push(i);
         findAllSetSumNumberRecord(n, tempSum, i, resultSet, result);
         resultSet.pop();
      } else {
         return;
      }
   }
}

function findAllSetSumNumber(n) {
   let result = [];
   let resultSet = [];
   findAllSetSumNumberRecord(n, 0, 1, resultSet, result);
   return result;
}


// console.log(findAllSetSumNumber(4));
console.log(findAllSetSumNumber(5));
// console.log(findAllSetSumNumber(7));
