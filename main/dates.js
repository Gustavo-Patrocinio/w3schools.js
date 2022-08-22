//Date objects are created with the new Date() constructor.

//There are 4 ways to create a new date object:
/*
 new Date();
 new Date(year, month, day, hours, minutes, seconds, milliseconds);
new Date(milliseconds);
new Date(date.string);
*/
const a = new Date();
const b = new Date(2018, 11, 24, 10, 33, 30, 0);
//Note: JavaScript counts months from 0 to 11:
// January = 0, December = 11.
const myBirthday = new Date("October 16,2002");

console.log(`${a}\n${b}\n${myBirthday}`);

/*
getFullYear() -	Get the year as a four digit number (yyyy)
getMonth() - Get the month as a number (0-11)
getDate() - Get the day as a number (1-31)
getHours() - Get the hour (0-23)
getMinutes() - Get the minute (0-59)
getSeconds() - Get the second (0-59)
getMilliseconds() -	Get the millisecond (0-999)
getTime() - Get the time (milliseconds since January 1, 1970)
getDay() - Get the weekday as a number (0-6)
Date.now() - Get the time. ECMAScript 5.
setDate() - Set the day as a number (1-31)
setFullYear() - Set the year (optionally month and day)
setHours() - Set the hour (0-23)
setMilliseconds() - Set the milliseconds (0-999)
setMinutes() - Set the minutes (0-59)
setMonth() - Set the month (0-11)
setSeconds() - Set the seconds (0-59)
setTime() - Set the time (milliseconds since January 1, 1970)
*/
