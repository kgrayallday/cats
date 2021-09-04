// asyncBreeds.js
const fs = require('fs');
console.log('requiring fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");

    if (!error) functionToRunWhenThingsAreDone(data);
    if (error) functionToRunWhenThingsAreDone(undefined);
  });

};

// const printOutCatBreed = breed => {
//   console.log('Return Value: ', breed);

// }
// we try to get the return value
// breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;
