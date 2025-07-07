const sumAll = function (x, y) {
    if (typeof x !== "number" || typeof y !== "number" || x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }
    let sum = 0;

    let end = Math.max(x, y);
    let start = Math.min(x, y);

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
