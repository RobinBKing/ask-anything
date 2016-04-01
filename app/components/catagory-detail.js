import Ember from 'ember';

export default Ember.Component.extend({
  updateCatagoryForm: false,
  actions: {
    update(catagory, params) {
      console.log('catagory-detail update');
      this.sendAction('update', catagory, params);
    }
  });
