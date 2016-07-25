const $ = require('shelljs');
const neodoc = require('neodoc');

const help = `
Usage: nzat plan [options] FROM TO
`;

module.exports = function(errxit, args) {
  args = neodoc.run(help, {
    laxPlacement: true
  , smartOptions: true
  , argv:         ['plan'].concat(args)
  });

  $.echo(`Planning journey from ${args['FROM']} to ${args['TO']}`);
};
