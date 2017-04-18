import Ember from 'ember';
import polyUtil from 'npm:polyline-encoded';

export function polylineDecode([encoded]/*, hash*/) {
  return polyUtil.decode(encoded);
}

export default Ember.Helper.helper(polylineDecode);
