// Method 1: Using a mathematical formula
var sum_to_n_a = function(n) {
    return (n * (n+1)) / 2;
};


// Method 2: Using a for loop
var sum_to_n_b = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Method 3: Using recursion
var sum_to_n_c = function(n) {
    if (n < 1) {
        return 0;
    }
    return n + sum_to_n_c(n - 1);
};


// Test case
console.log(sum_to_n_a(10)); //55
console.log(sum_to_n_b(10)); //55
console.log(sum_to_n_c(10)); //55