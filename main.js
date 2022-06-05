initial_onesplace = [2,3,5,7];
later_onesplace = [1,3,7,9];

function isPrime(num) {
    if (num == 2 || num == 3) {
        return true;
    }
    if (num <= 1 || num % 2 == 0 || num % 3 == 0) {
        return false;
    }
    for (let i = 5; i * i <= num ; i+=6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

function product_of_primes(a, b) {
    primes = [];
    for(i = 0; i < initial_onesplace.length; i++) {
        if(a <= initial_onesplace[i] <= b) {
            primes.push(initial_onesplace[i]);
        }
    }
    if(b > 10) {
        for(i=Math.max(1,Math.floor(a/10)); i < (b/10); i++) {
            for(j = 0; j < later_onesplace.length; j++) {
                if(isPrime((i*10)+later_onesplace[j])) {
                    primes.push((i*10)+later_onesplace[j]);
                }
            }
        }
    }
    return primes 
}

console.log(product_of_primes(2,1000));