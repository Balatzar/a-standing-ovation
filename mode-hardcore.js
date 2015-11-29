var assert = require('assert');

var input = "";
var outputBalt = "";
var outputLoic = "";

/*
// test fait maison
input += '4\n110011\n1\n01\n0055\n';
*/

var generatedNbCase = 1 + Math.floor(Math.random() * 1000);
input += generatedNbCase + '\n';

for (var i = 0; i < generatedNbCase; i++) {
  var line = "";
  var NbIndex = Math.floor(Math.random() * 100);
  for (var j = 0; j < NbIndex; j++) {
    line += Math.floor(Math.random() * 9);
  }
  if (line[j - 1] == '0')
    line += '1';
  line += '\n';
  input += line;
}

// console.log(input)

function baltaAlgo() {
  var nbCases = "";
  var i = 0;
  while (input[i] != '\n' && input[i]) {
    nbCases += input[i];
    i++;
  }
  nbCases = parseInt(nbCases);
  for (var line = 0; line < nbCases; line++) {
    var eachCase = "";
    i++;
    while (input[i] != '\n' && input[i]) {
      eachCase += input[i];
      i++;
    }
    var shyness = 0;
    var totalPeople = 0;
    var answer = 0;
    if (!eachCase[0]) {
      continue;
    }
    while (eachCase[shyness]) {
      totalPeople += parseInt(eachCase[shyness]);
      shyness++;
      if ((shyness - totalPeople) > answer || !answer) {
        answer = (shyness - totalPeople)
      }
    }
    if (answer < 0)
      answer = 0;
    outputBalt += "Case #" + (line + 1) + ": " + answer + '\n';
  }
  return outputBalt;
}

// console.log(baltaAlgo());

function loicAlgo() {
  var nbCases = "";
  var i = 0;
  while (input[i] != '\n' && input[i]) {
    nbCases += input[i];
    i++;
  }
  nbCases = parseInt(nbCases);
  for (var line = 0; line < nbCases; line++) {
    var eachCase = "";
    i++;
    while (input[i] != '\n' && input[i]) {
      eachCase += input[i];
      i++;
    }
    var shyness = 0;
    var peopleStanding = 0;
    var answer = 0;
    if (!eachCase[0]) {
      continue;
    }
    while (eachCase[shyness]) {
      peopleStanding += parseInt(eachCase[shyness]);
      shyness++;
      if (shyness > peopleStanding) {
        answer += shyness - peopleStanding;
        peopleStanding += shyness - peopleStanding;
      }
    }
    outputLoic += "Case #" + (line + 1) + ": " + answer + '\n';
  }
  return outputLoic;
}

// console.log(loicAlgo());

it('both algo return the same result', function() {
  assert.equal(loicAlgo(), baltaAlgo());
})