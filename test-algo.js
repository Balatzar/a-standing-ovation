// test-algo.js

fs = require("fs");

if (process.argv.length < 3) {
  console.log("no input");
  return;
}

var file =  process.argv[2];

fs.readFile(file, function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
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
    var answer = 0;
    if (!eachCase[0]) {
      console.log("Case missing");
      continue;
    }
    while (eachCase[shyness]) {
      totalPeople += parseInt(eachCase[shyness]);
      shyness++;
      if ((shyness - totalPeople) > answer || !answer) {
        answer = (shyness - totalPeople)
      }
    }
    console.log("Case #" + (line + 1) + ": " + answer);
  }
})
