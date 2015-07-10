require('webcomponentsjs-lite');
var Polymer  = require('polymer');

// we can't use bio-container in the name when we use systemjs mappings
require('./bio-element.html!html');
module.exports = require('./bio-element');
