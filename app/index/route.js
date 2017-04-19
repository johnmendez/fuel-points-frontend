import Ember from 'ember';
import data from './data';

export default Ember.Route.extend({
  model() {
    return this.store.queryRecord('direction-result', {
      origin: 'Nashville',
      destination: 'Atlanta',
      price: 2.25,
    });
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('formValues', {});
  }
});
