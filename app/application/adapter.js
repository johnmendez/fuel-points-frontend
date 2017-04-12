import DS from 'ember-data';
import config from 'fuel-points/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: DS.config.host
});
