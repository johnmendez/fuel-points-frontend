import Ember from 'ember';
import userValidator from './validation';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  userValidator,

  actions: {
    async saveUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('You must put in valid information');
      }

      await changeset.save();

      const user = this.store.createRecord('user', this.model);

      await user.save();

      await this.get('session').authenticate('authenticator:token', {
        identification: this.get('model.name'),
        password: this.get('model.password')
      });
    }
  }
});
