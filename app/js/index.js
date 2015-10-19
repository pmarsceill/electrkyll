'use strict';

var generateBtn = document.getElementById('generate');

generateBtn.onclick = generateSite;

function generateSite() {
  var fs = remote.require('fs');
  fs.writeFile("~/Desktop/Electrkyll/test", "Hey There!", function(err) {
    if(err) {
        return console.log(err);
    }

    alert("The file was saved!");
  })
}
