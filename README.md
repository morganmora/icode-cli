## ICODE-CLI

- NPM Installer for icode shell scripts, sonar flavored, code quality scanner
This installer only work with 64 bits Java for linux version.

- Some issues will be open to develop compatibility for Mac and Windows, java version 32 and 64-bit, also linux with java 32 bits.

-This first version was developed to be used in a Jenkins CI pipeline with java 64 on a linux stateless.

### How to install

npm -g icode-cli

then provide execution permisions to the bin (Unix)

chmod u-x ~/.icode/icode
( or Where the files were deplyed)


### how to use

Imagine that you want to scan you project folder that contains some shell files, so execute from icode-cli installation folder  `~/.icode/icode **/*.sh -o result.res `

Then configure you sonar-project.properties (on project root directory, for example) with ` sonar.icode.reports.path=.`,
or use `-Dsonar.icode.reports.path=.` if working with maven to execute sonar.

Be aware that if you use sonarqube, the sonar i-code pluging $ & i-code analyzer version should match.

- I-code Sonar pluging: 2.0.2
I-code Analyzer: 4.1.0

## INFORMATION

+ For more info about Icode, please visit https://github.com/lequal/i-CodeCNES
+ And https://github.com/lequal/sonar-icode-cnes-plugin

## LICENSE

MIT
