import DS from 'ember-data';

export default DS.Model.extend({
  json: DS.attr(),

  tripsWithVehicleOne: DS.attr(),
  tripsWithVehicleTwo: DS.attr(),
  tripsWithVehicleThree: DS.attr(),

});
