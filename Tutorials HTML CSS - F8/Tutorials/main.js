var fullName = 'Nguyen Van Viet';
var age = '22';
console.log(age);
confirm('xac nhan ban du tuoi');//Hàm alert không input
prompt('xac nhan ban du tuoi');//Hàm alert có input

setTimeout( function (){alert('Thong bao qc')},10000);//Hàm set bao lâu thì alert
setInterval( function () {console.log('test setInterval' + Math.random())},10000);//Hàm alert liên tục sau 1s theo time set
//Object type
myObject = {
    name: 'Viet',
    age: 18,
    
    
}

var myString = 'learn JS tai F8!';
// console.log(myString.indexOf('JS') );
// console.log(myString.slice(6,8));// Nếu muốn cắt từ phải sang trái thì truyền vị trí âm vào
console.log(myString.replace('JS', 'Javascrip'));

var myArray = ["HTML", "CSS", "JS", "React JS"];

console.log(myArray);

var Array1 = ["1", "2"];
var Array2 = ["3", "4"];

var ArrayMerg = Array1.concat(Array2);

console.log(ArrayMerg.sort());
var reverseArrayMerg = ArrayMerg.sort();
console.log(reverseArrayMerg.reverse());