'use strict';

// 1. countWords
function countWords(phrase) {
  // """Return an object of each word and the no. of times they appear."""

  let wordsCount = {};
  let phraseSplited = phrase.split(" ");

  for ( let word of phraseSplited ) {
    
    if ( word in wordsCount ) {
      wordsCount[word] +=1;
    } else { 
      wordsCount[word] = 1;
    }
  }
  return wordsCount;  
}
let result = countWords("i have one dog and i have two cats and my sister has two dogs and my husband has one cat");
// console.log(result);





// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // """Return the array of melons that cost `price`"""
  
  let listOfMelons = []
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  for (let key_price in melonPrices) {

    if ( Number( key_price ) === price ) {
      // let melonsForPrice = melonPrices[key];    
      
      for ( let index in melonPrices[key_price] ) {
        listOfMelons.push( melonPrices[key_price][index] );     
      }       
    } 
  }

  if ( listOfMelons.length === 0 ) {
    return "None"
  }

  return listOfMelons
  
}

result = getMelonsAtPrice(2.95);
console.log(result)