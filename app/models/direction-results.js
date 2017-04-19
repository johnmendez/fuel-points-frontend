import DS from 'ember-data';

export default DS.Model.extend({
  googleResult: DS.attr(),

  vehicleOneResult: DS.attr(),
  vehicleTwoResult: DS.attr(),
  vehicleThreeResult: DS.attr(),

});
