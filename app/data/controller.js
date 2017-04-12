import Ember from 'ember';

export default Ember.Route.extend({

  options: {
    height: 600,
    width: 600,
    fontName: 'Roboto Mono',
    legend: 'none',
    fontSize: 20,
    colors: ['#dbe1d9', '#c4d7f2', '#90b6b5', '#7b8998', '#0b3c49'],
    backgroundColor: '#f0f7ee',
    // title: 'Simple Text',

    animation: {
      startup: true,
      easing: 'inAndOut',
    },
  },

});
