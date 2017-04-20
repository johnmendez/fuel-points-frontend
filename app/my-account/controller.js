import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  token: Ember.computed.alias('session.session.content.authenticated.token'),
  formValues: {},

  actions: {
    createRecord(changeset) {
      changeset.save();

      const car = this.store.createRecord('vehicle', {
        year: this.formValues.year,
        make: this.formValues.make,
        model: this.formValues.model,
        options: this.formValues.options.text,
        fuelEconomyId: this.formValues.options.value,
      });

      car.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('my_account');
      });
    },

    delete(car) {
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

      return fetch(`http://localhost:8080/models?make=${make}&year=${year}`, {
        headers: {
          Authorization: `Bearer ${this.get('token')}`
        },
      }).then(r => r.json())
      .then(results => results.filter(r => r.match(filter)));
    },

    searchOptions(year, make, model, query) {
      const filter = new RegExp(query, 'i');

      return fetch(`http://localhost:8080/options?make=${make}&year=${year}&model=${model}`, {
        headers: {
          Authorization: `Bearer ${this.get('token')}`
        },
      }).then(r => r.json());
    },

  }
});
