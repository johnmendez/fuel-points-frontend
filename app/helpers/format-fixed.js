import Ember from 'ember';

export function formatFixed([num, places]/*, hash*/) {
  const decimals = parseFloat(num).toFixed(places);

  return parseFloat(decimals).toLocaleString();
}

export default Ember.Helper.helper(formatFixed);
