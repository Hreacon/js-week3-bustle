import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateArticle(article) {
      this.sendAction('updateArticle', article);
    }
  }
});
