// test-algo.lines

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
  for (var line = 0; line < nbCases; line++) {
    var eachCase = "";
    i++;
    while (input[i] != '\n' && input[i]) {
      eachCase += input[i];
      i++;
    }
    var shyness = 0;
    var totalPeople = 0;
    var lastPeople = 0;
    if (!eachCase[1]) {
      console.log("Case #" + line + ": 0");
      continue;
    }
    while (eachCase[shyness]) {
      totalPeople += parseInt(eachCase[shyness]);
      lastPeople = parseInt(eachCase[shyness]);
      shyness++;
    }
    totalPeople -= lastPeople;
    if (totalPeople > shyness) {
      console.log("Case #" + line + ": 0");
    }
    else {
      console.log("Case #" + line + ": " + (shyness - 1 - totalPeople));
    }
  }
})