import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  author: DS.attr(),
  date: DS.attr(),
  comments: DS.hasMany('comment', {async: true})  
});
