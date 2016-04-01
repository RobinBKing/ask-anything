import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('catagory');
  // return Ember.RSVP.hash({
  //   catagories: this.store.findAll('catagory');
    // question: this.store.findAll('question')
    // answer: this.store.findAll('answer')
    // comment: this.store.findAll('comment')
    // rank: this.store.findAll('rank')
    // });
  },

  actions: {
    saveCatagory3(params) {
      console.log("saveCatagory3");
      var newCatagory = this.store.createRecord('catagory', params);
      newCatagory.save();
      this.transitionTo('index');
    },
    // saveCatagory(params) {
    //   var newCatagory = this.store.createRecord('catagory', params);
    //   newCatagory.save();
    //   this.transitionTo('index');
    // },
    // update(catagory, params) {
    //     Object.keys(params).forEach(function(key) {
    //       if(params[key]!==undefined) {
    //         catagory.set(key,params[key]);
    //       }
    //     });
    //     catagory.save();
    //     this.transitionTo('index');
    //   },
      destroyCatagory(catagory) {
        catagory.destroyRecord();
        this.transitionTo('index');
      }
    }
  });
