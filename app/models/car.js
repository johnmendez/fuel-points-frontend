import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr(),
  make: DS.attr(),
  model: DS.attr()
});
