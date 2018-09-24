
# ICODE-CLI

NPM Installer for icode shell scripts, sonar flavored, code quality scanner
This installer, deploy the x64 linux version.

## How to install

npm -g icode

## how to use

Imagine that you want to scan you project folder that contains some shell files, so execute  ` icode **/*.sh > result.res `

Then configure you sonar-project.properties (on project root directory, for example) with ` sonar.icode.reports.path=.`,
or use `-Dsonar.icode.reports.path=.` if working with maven to execute sonar.

# INFORMATION

+ For more info about Icode, please visit https://github.com/lequal/i-CodeCNES
+ and https://github.com/lequal/sonar-icode-cnes-plugin

# LICENSE

MIT
