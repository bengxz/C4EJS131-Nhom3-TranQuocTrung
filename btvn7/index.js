let greeting = 'Hello. My name is John';
console.log (greeting.charAt(8));

let str1 = 'The morning is upon us';
console.log (str1.slice(12,23));

let str2 ='Hello';
let str3 ='World';
console.log (str2.concat(' ',str3));

let str4 ='Hôm nay ngày thứ 7';
str4 =((str4.charAt(0).toLowerCase()))+(str4.slice(1,8))+((str4.charAt(8)).toUpperCase())+(str4.slice(9,19));
console.log(str4);

let str5 ='Hôm nay ngày thứ 7';
str5=((str5.charAt(0).toLowerCase()))+(str5.slice(1,3))+(str5.slice(4,17))+`${8}`;
console.log(str5);
