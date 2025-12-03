function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }return max;

}

console.log(findMax (arr=[5,6,7,8,1,2,3,5]));