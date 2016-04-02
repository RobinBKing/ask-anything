import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('catagory', params.catagory_id);
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      var catagory = params.catagory;
      catagory.get('questions').addObject(newQuestion);
      newQuestion.save().then(function() {
        return catagory.save();
      });
      this.transitionTo('catagory', params.catagory);
    },

    destroyCatagory(catagory) {
      var question_deletions = catagory.get('questions').map(function(question) {
        return question.destroyRecord();
      });
      Ember.RSVP.all(question_deletions).then(function() {
        return catagory.destroyRecord();
      });
      this.transitionTo('index');
      }
    }
});
