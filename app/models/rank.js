import DS from 'ember-data';

export default DS.Model.extend({
  rank: DS.attr(),
  answer: DS.belongsTo('answer', {async: true})  
});
