// test-algo.shynessLevels

fs = require("fs");

if (process.argv.length < 3) {
  console.log("no input");
  return;
}
var file =  process.argv[2];


fs.readFile(file, function(err, data) {
  if (err)
    console.log(err);
  var input = data.toString('utf-8');
  var nbCases = "";
  var i = 0;
  while (input[i] != '\n' && input[i]) {
    nbCases += input[i];
    i++;
  }
  nbCases = parseInt(nbCases);
  for (var shynessLevel = 0; shynessLevel < nbCases; shynessLevel++) {
    var eachCase = "";
    i++;
    while (input[i] != '\n' && input[i]) {
      eachCase += input[i];
      i++;
    }
    var people = 0;
    var totalPeople = 0;
    var lastPeople = 0;
    if (!eachCase[1]) {
      console.log("Case #" + shynessLevel + ": 0");
      continue;
    }
    while (eachCase[people]) {
      totalPeople += parseInt(eachCase[people]);
      lastPeople = parseInt(eachCase[people]);
      people++;
    }
    totalPeople -= lastPeople;
    if (totalPeople > people) {
      console.log("Case #" + shynessLevel + ": 0");
    }
    else {
      console.log("Case #" + shynessLevel + ": " + (people - 1 - totalPeople));
    }
  }
})