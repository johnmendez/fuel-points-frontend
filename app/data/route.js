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

  // model2() {
  //   return [
  //     ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
  //       'Western', 'Literature', { role: 'annotation' }],
  //     ['2010', 10, 24, 20, 32, 18, 5, ''],
  //     ['2020', 16, 22, 23, 30, 16, 9, ''],
  //     ['2030', 28, 19, 29, 30, 12, 13, '']
  //   ];
  // },

});
