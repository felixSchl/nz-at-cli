const $ = require('shelljs');
const neodoc = require('neodoc');

const help = `
Usage: nzat [-h] <command> [ARGS...]

Options:
  -h, -?, --help  Show this help and exit

Available commands are:
  plan  Plan a route
`;

const args = neodoc.run(help, {
  optionsFirst: true
, smartOptions: true
, laxPlacement: true
});

function errxit(msg) {
  $.echo(`nzat: ${msg}. Use 'nzat -?' for help.`);
  process.exit(1);
}

if (args['-h']) {
  $.echo(help);
  process.exit(0);
}

switch (args['<command>']) {
  case 'plan':
    require('./plan')(errxit, args['ARGS']);
    break;
  default:
    errxit(`'${args['<command>']}' is not a known nzat command`);
    break;
}

