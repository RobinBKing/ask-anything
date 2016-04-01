import Ember from 'ember';

export default Ember.Component.extend({
  addNewCatgory: false,
  actions: {
    catagoryFormShow() {
      this.set('addNewCatagory', true);
    },

    saveCatagory1() {
      var params = {
        name: this.get('name'),
      };
      this.set('addNewCatagory', false);
      this.sendAction('saveCatagory2', params);
    }
  }
});
