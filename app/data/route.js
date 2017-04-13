import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      ['Task', 'Hours per Day'],
      ['Blue', 2],
      ['Red', 2],
      ['Orange', 2],
      ['Green', 2],
      ['Purple', 2],
    ];
  },

});
