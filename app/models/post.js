import DS from 'ember-data';

const { attr } = DS;
export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  name: attr('string'),
  phoneNumber: attr('string'),
});
