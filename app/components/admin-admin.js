import Ember from 'ember';

export default Ember.Component.extend({
  selectedArticle: null,
  admin: true,
  actions: {
    saveNewArticle: function(params) {
      this.sendAction('saveNewArticle', params);
    },
    updateArticle: function(article) {
      this.set('selectedArticle', null);
      this.sendAction('updateArticle', article);
    },
    updateMe: function(article) {
      this.set('selectedArticle', article);
    },
    deleteMe: function(article) {
      if(confirm("Really?..........\n\n\n ART THOU SURETH!?")) {
        article.destroyRecord();
      }
      this.transitionTo('admin');
    }
  }
});
