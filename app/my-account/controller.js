import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    createRecord() {
      const car = this.store.createRecord('vehicles', this.formValues);

      car.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('my_account');
      });
    },

    deleteCar(vehicles) {
      carRecord.destroyRecord();
    }

  }
});
