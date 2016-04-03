import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    catagories: this.store.findAll('catagory'),
    questions: this.store.findAll('question')
    });
  },

  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    asveCatagory3(params) {
      var newCatagory = this.store.createRecord('catagory', params);
      newCatagory.save();
      this.transitionTo('index');
    }
    // ,
    //
    // update(question, params) {
    //   Object.keys(params).forEach(function(key) {
    //     if(params[key]!==undefined) {
    //       question.set(key,params[key]);
    //     }
    //   });
    //   question.save();
    //   this.transitionTo('index');
    // },
    //
    // destroyQuestion(question) {
    //   question.destroyRecord();
    //   this.transitionTo('index');
    // },
    //
    // update(catagory, params) {
    //   Object.keys(params).forEach(function(key) {
    //     if(params[key]!==undefined) {
    //       catagory.set(key,params[key]);
    //     }
    //   });
    //   catagory.save();
    //   this.transitionTo('index');
    // },
    //
    // destroyCatagory(catagory) {
    //   catagory.destroyRecord();
    //   this.transitionTo('index');
    // }
  }
});
