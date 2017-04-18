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
