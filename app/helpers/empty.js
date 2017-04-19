import Ember from 'ember';

export function empty([val]/* , hash*/) {
  return !val;
}

export default Ember.Helper.helper(empty);
