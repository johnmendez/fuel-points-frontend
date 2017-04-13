import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    createRecord() {
      const car = this.store.createRecord('vehicle', this.formValues);

      car.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('my_account');
      });
    },

    deleteCar(carRecord) {
      carRecord.destroyRecord();
    }

  }
});
