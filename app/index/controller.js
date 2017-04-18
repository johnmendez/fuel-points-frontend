import Ember from 'ember';

export default Ember.Controller.extend({
  lat: 45.519743,
  lng: -122.680522,
  zoom: 6,

  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    },

    async search(changeset) {
      const result = await this.store.queryRecord('direction-results', {
        origin: this.formValues.origin,
        destination: this.formValues.destination,
        price: this.formValues.price,
      });
    }
  }
});
