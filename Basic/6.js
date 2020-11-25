//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
const leapYear = year => year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));