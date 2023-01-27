var holaBro = 56;
var array1 = [1,2,holaBro,4,5,6];//lol una variable puede ser elementod de un array

array1.shift();

array1.unshift(102);

array1.push(69);

for (let index = 0; index < array1.length; index++) {
        console.log(array1[index]);
    
}
console.log(array1[0]);