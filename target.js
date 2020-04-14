var path = require('path');
var fs = require('fs');
const config = require('./package');
const http = require("http");
var extract = require('extract-zip');

let defaultUrl = `https://github.com/lequal/i-CodeCNES/releases/download/${config.icodeVersion}/icode-${config.icodeVersion}.zip`;
let fileZipName = path.resolve(__dirname, 'src', `icode-${config.icodeVersion}.zip`);
let target = exports;
target.home = process.env.HOME || process.env.USERPROFILE;
target.home += '/.icode';
target.path = path.join(target.home, `icode-${config.icodeVersion}`, 'bin');
target.pathCheck = path.join(target.path, 'icode');

target.init = function() {
  let nothing = true;
  // Make dir .icode
  try {
    fs.accessSync(target.pathCheck, fs.F_OK);
    nothing = false;
  } catch (e) {
    try {
      fs.accessSync(target.home, fs.F_OK);
    } catch (e) {
      fs.mkdir(target.home);
    }
  }
  // install icode
  if (nothing) {
    createFolder();
  }
}

function createFolder() {
  file = fs.createReadStream(fileZipName);
  extract(fileZipName, {dir: target.home}, function (err) {});
}

target.init();
