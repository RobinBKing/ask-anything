import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("catagory");
    return this.store.findRecord('catagory', params.catgory_id);
  },
  actions: {
  // save3(params) {
  //   var newQuestion = this.store.createRecord('question', params);
  //   var catgory = params.catgory;
  //   catgory.get('questions').addObject(newQuestion);
  //   newQuestion.save().then(function() {
  //     return catagory.save();
  //   });
  //   this.transitionTo('catagory', params.catagory);
  // },

  destroyCatagory(catagory) {
    // var question_deletions = catagory.get('questions').map(function(question) {
    //   return question.destroyRecord();
    // });
    // Ember.RSVP.all(question_deletions).then(function() {
      // return catagory.destroyRecord();
    // });
    catagory.destroyRecord();
    this.transitionTo('index');
    }
  }
});
