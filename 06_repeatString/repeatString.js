const repeatString = function (s, n) {
    let res = "";
    if (n < 0) return "ERROR";
    for (let i = 0; i < n; i++) {

        res += s;
    }
    return res;

};

// Do not edit below this line
module.exports = repeatString;
