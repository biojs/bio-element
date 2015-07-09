var _ = require('lodash');
var Polymer  = require('polymer');

// we can't use bio-container in the name when we use systemjs mappings
require('./bio-element.html!html');
//require('./bio-element.css!css');

var Bioelement = Polymer({

  is: 'bio-element',

  properties: {
    text: {
      type: String,
      value: 'Hello'
    }
  },
  
  created: function() {
    console.log('bio-element created');
  }
});

module.exports = Bioelement;
