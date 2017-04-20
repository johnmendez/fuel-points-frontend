import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  lat: 35,
  lng: -85,
  zoom: 6,

  actions: {
    updateCenter(e) {
      const center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    },

    invalidateSession() {
      this.get('session').invalidate();
    },

    async search(changeset) {
      const result = await this.store.queryRecord('direction-response', {
        origin: this.formValues.origin,
        destination: this.formValues.destination,
        price: this.formValues.price,
      });

      this.set('model', result);
    }
  }
});
