function reorder(aString){

   let newString = "";

   let upperCase = aString.replace(/[^A-Z]/g, '');
   newString += upperCase;

   let lowerCase = aString.replace(/[^a-z]/g, ''); 
   newString += lowerCase;

   let numbers = aString.replace(/[^0-9]/g, '');
   newString += numbers;
   
   return newString;
}

console.log(reorder("hA2p4Py"));
