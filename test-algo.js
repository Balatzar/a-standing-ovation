// test-algo.js

// package to read file ("file stystem")
fs = require("fs");

// if there is no input (console.log(process.argv) to see
// why < 3 )
if (process.argv.length < 3) {
  console.log("no input");
  return;
}

var file =  process.argv[2];

// read the file provided as an argument
fs.readFile(file, function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  // store the content of the file as a string
  var input = data.toString('utf-8');
  var nbCases = "";
  var i = 0;
  // parse the first line
  while (input[i] != '\n' && input[i]) {
    nbCases += input[i];
    i++;
  }
  // first line gives us the number of cases
  nbCases = parseInt(nbCases);
  // for each case
  for (var line = 0; line < nbCases; line++) {
    var eachCase = "";
    // add one to i to pass the \n
    i++;
    // store the current line
    while (input[i] != '\n' && input[i]) {
      eachCase += input[i];
      i++;
    }
    var shyness = 0;
    var totalPeople = 0;
    var lastPeople = 0;
    if (!eachCase[0]) {
      console.log("Case missing");
      continue;
    }
    // go through a line and add all the spectators
    // add one to the shyness level for each group of people
    while (eachCase[shyness]) {
      totalPeople += parseInt(eachCase[shyness]);
      lastPeople = parseInt(eachCase[shyness]);
      shyness++;
    }
    // remove the last group of people
    totalPeople -= lastPeople;
    // if the number of people is higer than the final shyness level
    if (totalPeople > shyness) {
      console.log("Case #" + line + ": 0");
    }
    else {
      // else the number of friend will be the max shyness minus the people
      // before the last level

      // minus one because shyness is incremented a last time in the while before
      // it stops
      console.log("Case #" + line + ": " + (shyness - 1 - totalPeople));
    }
  }
})

/*
EXEMPLE

if we have :

1 1 0 0 1 1

we add each shyness level :

1 1 0 0 1 1
0 1 2 3 4 5

we see that shyness 4 will need 2 more people to stand up,
but shyness 5 will also need only 2 people to stand

so we add all the people before the LAST rank (1 + 1 + 1)
minus the maximum shyness needed to make everybody stand (5)

5 - 3 = 2

*/