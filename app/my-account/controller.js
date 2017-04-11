import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    make: '',
    model: '',
    year: '',
  },

  actions: {
    deleteCar(carRecord) {
      carRecord.destroyRecord();
    }
  }
});
