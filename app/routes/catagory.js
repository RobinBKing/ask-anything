import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('catagory', params.catagory_id);
  },
  actions: {
    update(catagory, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          catagory.set(key,params[key]);
        }
      });
      catagory.save();
      this.transitionTo('catagory');
    },
    destroyCatagory(catagory) {
      catagory.destroyRecord();
      this.transitionTo('index');
    }
  }
});
