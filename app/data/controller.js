import Ember from 'ember';

export default Ember.Route.extend({

  options: {
    height: 600,
    width: 600,
    fontName: 'Roboto Mono',
    legend: 'none',
    fontSize: 20,
    // backgroundColor: 'red',
    // title: 'Simple Text',

    animation: {
      startup: true,
      easing: 'inAndOut',
    },
  },

});
