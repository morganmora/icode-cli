var path = require('path');
var fs = require('fs');
const config = require('./package');
const http = require("http");
var os = require("os");
var extract = require('extract-zip');

let defaultUrl = `https://github.com/lequal/i-CodeCNES/releases/download/${config.icodeVersion}/i-CodeCNES-${config.icodeVersion}-CLI-linux.gtk.x86_64.zip`;
let defaultFileName = path.resolve(__dirname, 'src', `i-CodeCNES-${config.icodeVersion}-CLI-linux.gtk.x86_64.zip`);
let windowsJava64b = path.resolve(__dirname, 'src', `i-CodeCNES-${config.icodeVersion}-CLI-win32.win32.x86_64.zip`);
let windowsJava32b = path.resolve(__dirname, 'src', `i-CodeCNES-${config.icodeVersion}-CLI-win32.win32.x86.zip`);
let linuxJava32b = path.resolve(__dirname, 'src', `i-CodeCNES-${config.icodeVersion}-CLI-linux.gtk.x86.zip`);
let mcOsJava64b = path.resolve(__dirname, 'src', `i-CodeCNES-${config.icodeVersion}-CLI-macosx.cocoa.x86_64.zip`);
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
  switch (os.platform()){
    case 'win32':
    
    break;

    case 'darwin':

    default:

  }
  file = fs.createReadStream(defaultFileName);
  extract(defaultFileName, {dir: target.home}, function (err) {});
}

target.init();
