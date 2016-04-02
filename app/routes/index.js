import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('catagory');
  },

  actions: {
   saveQuestion3(params) {
     var newCatagory = this.store.createRecord('catagory', params);
     newCatagory.save();
     this.transitionTo('index');
   },

  //  update(catagory, params) {
  //     Object.keys(params).forEach(function(key) {
  //       if(params[key]!==undefined) {
  //         catagory.set(key,params[key]);
  //       }
  //     });
  //     catagory.save();
  //     this.transitionTo('index');
  //   },

    saveCatagory3(params) {
      var newCatagory = this.store.createRecord('catagory', params);
      newCatagory.save();
      this.transitionTo('index');
    }
 }
});
