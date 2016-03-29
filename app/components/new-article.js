import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    showForm() {
      this.set('addNewArticle', true);
    },
    saveNewArticle() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        category: this.get('category'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveNewArticle', params);
    }
  }
});
