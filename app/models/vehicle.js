import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('integer'),
  make: DS.attr('string'),
  model: DS.attr('string')
});
