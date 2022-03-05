// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

function validateCred(array) {

  const testArr = array.slice();
  //Assigns duplicate array to a test array so we don't mutate the parameter array.

  if ((testArr.length % 2) !== 0) {
    //Condition for when the total length of the array is equal to an odd number

    for (let i = testArr.length - 1; i >= 0; i--) {
      //This conditional ensures that for every digit in which its position is equal to an even number will not be iterated through
      if ((i % 2) === 0) { 
        //If iterator is an even number position...
  
        continue;//...loops to the next digit.

      } else {
        //Otherwise, the following code will run...
        testArr[i] *= 2; //Doubles the value
        if (testArr[i] > 9) { 
          //If double the value is greater than 9...
          testArr[i] -= 9; 
          //9 is subtracted from double the value.
        } else continue; 
        //Otherwise, loop to the next digit.
      }
    }

  } else { 
    //If the total length of the array is equal to an even number...

    for (let i = testArr.length - 1; i >= 0; i--) {
      //The following condition ensures that for every digit in which its position is an odd number will not be iterated through.
      if ((i % 2) !== 0) {
        continue;
      } else {
        testArr[i] *= 2;
        if (testArr[i] > 9) {
          testArr[i] -= 9;
        } else continue;
      }
    }
  }

  const sum = testArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }); 
  //We use the .reduce() method to sum up all the digits in the array

  if ((sum % 10) === 0) { 
    //If the remainder of the sum divided by 10 is equal to 0, the credit card is valid.
    return 'Valid';
  } else { //Otherwise, it is invalid.
    return 'Invalid';
  }
}


//The following code uses the filter method to iterate through the nested arrays to find the invalid cards that are passed through the validateCred() function.
function findInvalidCards(batchArr) {
  return batchArr.filter(arr => {
    return validateCred(arr) === 'Invalid';
  });
}


function idInvalidCardCompanies(invalidCardsArr) {
  let invalidCardCompanies = [];
  for (let i = 0; i < invalidCardsArr.length; i++) {
    if (invalidCardsArr[i][0] === 3) {
      if (invalidCardCompanies.indexOf('Amex') === -1) {
        invalidCardCompanies.push('Amex');
      } else {
        break;
      }
    } else if (invalidCardsArr[i][0] === 4) {
      if (invalidCardCompanies.indexOf('Visa') === -1) {
        invalidCardCompanies.push('Visa');
      } else {
        break;
      }
    } else if (invalidCardsArr[i][0] === 5) {
      if (invalidCardCompanies.indexOf('MasterCard') === -1) {
        invalidCardCompanies.push('MasterCard');
      } else {
        break;
      }
    } else if (invalidCardsArr[i][0] === 6) {
      if (invalidCardCompanies.indexOf('Discover') === -1) {
        invalidCardCompanies.push('Discover');
      } else {
        break;
      }
    } else {
      console.log(`Company not found: First digit '${invalidCardsArr[i][0]}'`);
    }
  }
  return invalidCardCompanies;
}
