var marked = require('marked');
var program = require('commander');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var fs = require('fs');
var style = require('./style.js');

program
  .version('0.0.1')
  .option('-i, --input [path]', 'Path of input file')
  .option('-o, --output [path]', 'Path of output file')
  .parse(process.argv);

if (!program.input) {
  console.log('Need to pass -i or --input!');
  throw error;
}
if (!program.output){
  console.log('Need to pass -o or --output!');
  throw error;
}

var md = fs.readFileSync(program.input, 'utf-8');
var output = marked(md);
var html = style.getStart() + output + style.getEnd();
fs.writeFileSync(program.output, html);