function getPrimes(n) {
   
   if (n && Number.isInteger(n) && n > 2) {

      let record = []
      let primeNumber = [2];
      let max = Math.sqrt(n);

      // save a truthy value
      for (let i = 0; i < n; i++) {
         record.push(1);
      }

      // sieve time!!!
      for (let prime = 3; prime <= max; prime += 2) {
         if (record[prime]) {
            for (let multiple = prime * prime; multiple < n; multiple += prime + 2) {
               record[multiple] = 0;
            }
         }
      }

      // save sieved prime number to primeNumber Array
      for (let sievedPrimeNumber = 3; sievedPrimeNumber < n; sievedPrimeNumber += 2) {
         if (record[sievedPrimeNumber]) {
            primeNumber.push(sievedPrimeNumber);
         }
      }


      return primeNumber;
   }
   return "Please enter only number, or number greater than 1";
}

console.time();
// console.log(getPrimes(2));
// console.log(getPrimes(3));
// console.log(getPrimes(5)); 
// console.log(getPrimes(10));
console.log(getPrimes(39));
// console.log(getPrimes(100));
// console.log(getPrimes(10000000));
// console.log(getPrimes("dagds"));
// console.log(getPrimes());
console.timeEnd();