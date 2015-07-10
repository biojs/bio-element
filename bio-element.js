var Polymer = require('polymer');

// we can't use bio-container in the name when we use systemjs mappings
require('./bio-element.html!html');

var BioElement = Polymer({

  is: 'bio-element',

  properties: {
    text: {
      type: String,
      value: 'hello'
    }
  },

  created: function() {
    console.log('<bio-element> created');
  }
});

module.exports = BioElement;
