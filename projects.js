/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.*/

function titleCase(str) {

  var wordArray = [];
  var count = 0;
  var lowerStr = str.toLowerCase();
  var myArray = lowerStr.split(' ').map(function(x) { return x.split('');});
 
   for (i=0; i<myArray.length; i++) {
     myArray[i][0] = myArray[i][0].toUpperCase();
     myArray[i] = myArray[i].join('');
   }
  
  return myArray.join(' ');

}

titleCase("I'm a little tea pot");

/*Return an array consisting of the largest number from each provided sub-array.*/
function largestOfFour(arr) {
  
  var largNum = 0;
  var myArray = [];
  
  for (var i=0;i<arr.length;i++) {
    
    for (var j=0;j<arr[i].length;j++) {      
      if ( largNum < arr[i][j]) {
        largNum = arr[i][j];
      }
    }
    
    myArray[i] = largNum;
    largNum = 0;
  }
  return myArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/
function confirmEnding(str, target) {
  
   if (str.substr(str.length - target.length) == target) {
     return true;
   }else return false;

}

confirmEnding("Bastian", "n");

/*Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
  
  var newStr = '';
  
  if (num > 0) {
    var i=0;
  
    while (i<num) {
      newStr += str;
      i++;
    }
    return newStr;
    
  } else return newStr;
}

repeatStringNumTimes("abc", 3);

/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/
function truncateString(str, num) {
  
  if (str.length > num && num > 2) {
    return str.slice(0, num - 3) + '...';
  } 
  else if (str.length > num && num > 0) {
    return str.slice(0, num) + '...';
  } 
  else return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
