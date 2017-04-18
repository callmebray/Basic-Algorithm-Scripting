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

