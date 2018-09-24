## ICODE-CLI

- NPM Installer for icode shell scripts, sonar flavored, code quality scanner
This installer only work with 64 bits Java for linux version.

- Some issues will be open to develop compatibility for Mac and Windows, java version 32 and 64-bit, also linux with java 32 bits.

-This first version was developed to be used in a Jenkins CI pipeline with java 64 on a linux stateless.

### How to install

npm -g icode

### how to use

Imagine that you want to scan you project folder that contains some shell files, so execute  ` icode **/*.sh > result.res `

Then configure you sonar-project.properties (on project root directory, for example) with ` sonar.icode.reports.path=.`,
or use `-Dsonar.icode.reports.path=.` if working with maven to execute sonar.

## INFORMATION

+ For more info about Icode, please visit https://github.com/lequal/i-CodeCNES
+ And https://github.com/lequal/sonar-icode-cnes-plugin

## LICENSE

MIT
