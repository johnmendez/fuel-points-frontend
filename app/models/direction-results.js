import DS from 'ember-data';

export default DS.Model.extend({
          origin: DS.attr('string'),
          destination: DS.attr('string'),
          price: DS.attr('string')

});
