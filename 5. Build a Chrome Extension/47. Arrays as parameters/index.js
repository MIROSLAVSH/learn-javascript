// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
    // return arr.shift();
    return arr[0]
}

let firstCard = getFirst(["01", "02", "03", "04", "05", "06"])

// let arr = ["01", "02", "03", "04", "05", "06",];

// Call it with an array as an argument to verify that it works
console.log(firstCard)