const removeFromArray = function (arr, ...rest) {

    for (let i = 0; i < rest.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === rest[i]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
