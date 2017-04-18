import Ember from 'ember';
import userValidator from './validation';

export default Ember.Controller.extend({
  formValues: {},
  session: Ember.inject.service(),
  // validator: userValidator,

  actions: {
    async login(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('You must put in valid information');
      }

      await changeset.save();

      await this.get('session').authenticate('authenticator:token', {
        identification: this.get('model.username'),
        password: this.get('model.password')
      });

      this.transitionToRoute('index');
    }
  }
});
