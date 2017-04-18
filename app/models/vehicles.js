import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('string'),
  make: DS.attr('string'),
  model: DS.attr('string'),
  option: DS.attr('string'),
  fuelEconomyId: DS.attr('string'),
});
