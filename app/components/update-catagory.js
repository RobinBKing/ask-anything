import Ember from 'ember';

export default Ember.Component.extend({
  updateCatagoryForm: false,
  actions: {
    updateCatagoryForm() {
      this.set('updateCatagoryForm', true);
    },

    update(catagory) {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
      };
      this.set('updateCatagoryForm', false);
      this.sendAction('update', catagory, params);
    }
  }
});
