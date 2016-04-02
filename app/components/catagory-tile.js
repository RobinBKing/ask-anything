import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(catagory) {
      if (confirm('Are you sure you want to delete this catagory?')) {
        this.sendAction('destroyCatagory', catagory);
      }
    }
  }
});
