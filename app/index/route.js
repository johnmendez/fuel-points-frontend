import Ember from 'ember';
import data from './data';

export default Ember.Route.extend({
  model() {
    return data.routes;
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('formValues', {});
  }
});
