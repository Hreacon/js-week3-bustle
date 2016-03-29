import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    showForm() {
      this.addNewArticle = true;
    }
  }
});
