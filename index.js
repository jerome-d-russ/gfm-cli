var marked = require('marked');
var program = require('commander');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var fs = require('fs');

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

var output = marked(fs.readFileSync(program.input, 'utf-8'));
fs.writeFileSync(program.output, output);