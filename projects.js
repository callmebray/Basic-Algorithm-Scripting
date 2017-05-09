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

/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  
  var newArray = [];
  var num = 0;
  
  while (num <= arr.length) {
    newArray.push(arr.splice(0, size));
    num ++;
  }
  if (arr.length < num && arr.length > 0) {
  newArray.push(arr.splice(0,arr.length));
  }
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

/*Return the remaining elements of an array after chopping off n elements from the head.*/

function slasher(arr, howMany) {
  
  arr.splice(0,howMany);
  
  return arr;

}

slasher([1, 2, 3], 2);

/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/
function mutation(arr) {
  
  var fArray = arr[0].toLowerCase().split('');
  var sArray = arr[1].toLowerCase().split('');
  
  for (var i =0; i<sArray.length; i++) {
    if (fArray.indexOf(sArray[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

/*Remove all falsy values from an array.*/
function bouncer(arr) {
  function falsy (n) {
    
    if (n === true || typeof n === 'string' || typeof n === 'number') {
      return n;
    }
  }
    var filtered = arr.filter(falsy);
  return filtered;
}

bouncer([7, "ate", "", false, 9]);

/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.*/
function getIndexToIns(arr, num) {
  
  arr.push(num);
  arr.sort(function(a,b){return a-b;});
  return arr.indexOf(num);
}

getIndexToIns([3, 10, 5], 3);

/*Write a function which takes an ROT13 encoded string as input and returns a decoded string.*/
function rot13(str) { // LBH QVQ VG!
  
  var newArray = str.split('');
  var finalArray = [];

  for (var i=0; i<newArray.length;i++) {
    
    var change = newArray[i].charCodeAt();

    if (change < 78 && change >= 65) {
      change += 13;
    }else if (change >= 77) {
      change -= 13;
    }
    
    finalArray.push(change);
  }
 
  return String.fromCharCode.apply(null, finalArray);
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
