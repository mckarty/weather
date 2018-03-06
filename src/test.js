let arr = [ 3, 5, 7 ];
arr.foo = "hello";

arr.forEach(function (element, index) {
    console.log(`element = ${element}`); // выведет "3", "5", "7"
    console.log(`index = ${index}`);   // выведет "0", "1", "2"
});

// или при помощи Object.keys()

Object.keys(arr).forEach(function (element, index) {
    console.log(`element = ${element}, index = ${index}`);
    console.log(`arr[${element}] = ${arr[element]}`); // выведет "3", "5", "7", "hello"
    console.log(`arr[${index}] = ${arr[index]}`);   // выведет "3", "5", "7"
});
