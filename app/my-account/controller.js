import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  token: Ember.computed.alias('session.session.content.authenticated.token'),
  formValues: {},

  actions: {
    createRecord() {
      const car = this.store.createRecord('vehicles', this.formValues);

      car.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('my_account');
      });
    },

    deleteCar(car) {
      car.destroyRecord();
    },

    searchYear(query) {
      const filter = new RegExp(query, 'i');

      return fetch('http://localhost:8080/years', {
        headers: {
          Authorization: `Bearer ${this.get('token')}`
        },
      }).then(r => r.json())
      .then(results => results.filter(r => r.match(filter)));
    },

    searchMake(year, query) {
      const filter = new RegExp(query, 'i');

      return fetch(`http://localhost:8080/makes?year=${year}`, {
        headers: {
          Authorization: `Bearer ${this.get('token')}`
        },
      }).then(r => r.json())
      .then(results => results.filter(r => r.match(filter)));
    },

    searchModel(year, make, query) {
      const filter = new RegExp(query, 'i');

      return fetch(`http://localhost:8080/makes?year=${year}`, {
        headers: {
          Authorization: `Bearer ${this.get('token')}`
        },
      }).then(r => r.json())
      .then(results => results.filter(r => r.match(filter)));
    },

    searchOptions(year, make, model, query) {
      const filter = new RegExp(query, 'i');

      return fetch(`http://localhost:8080/makes?year=${year}`, {
        headers: {
          Authorization: `Bearer ${this.get('token')}`
        },
      }).then(r => r.json())
      .then(results => results.filter(r => r.match(filter)));
    },

  }
});
