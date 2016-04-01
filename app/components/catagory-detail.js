import Ember from 'ember';

export default Ember.Component.extend({
  updateCatagoryForm: false,
  actions: {
    update(catagory, params) {
      this.sendAction('update', catagory, params);
    }
  }
});
