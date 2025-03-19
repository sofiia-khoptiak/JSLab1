function isInteger(num) {
  return Number.isInteger(num)
}

function isPrime(num) {
  if (num < 2)
    return false;
  const sqrtNum = Math.sqrt(num)
  for (i = 2; sqrtNum >= i; i++) {
    if (num % i === 0)
      return false;
  }
  return true;
}

function findPrimes(a, b) {
  let primes = [];
  for (num = a; num <= b; num++) {
    if (isPrime(num))
      primes.push(num);
  }
  return primes;
}