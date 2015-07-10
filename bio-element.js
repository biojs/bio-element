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
