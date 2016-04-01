import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  answer: DS.belongsTo('answer', {async: true}),
  author: DS.attr(),
  date: DS.attr()
});
