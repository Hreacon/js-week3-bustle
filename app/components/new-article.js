import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    showForm() {
      this.set('addNewArticle', true);
    },
    saveNewArticle() {
      this.set('addNewArticle', false);
    }
  }
});
