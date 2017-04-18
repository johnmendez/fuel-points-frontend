import { validateFormat, validatePresence, validateLength
} from 'ember-changeset-validations/validators';

export default {
  name: [
    validatePresence(true)
  ],

  password: [
    validatePresence(true),
    validateLength({ min: 6 }),
  ]
};
