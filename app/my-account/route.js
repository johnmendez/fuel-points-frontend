import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
},

  model() {
    return this.store.findAll('vehicle');
  }
});
