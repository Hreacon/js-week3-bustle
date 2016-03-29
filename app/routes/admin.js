import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('article'),
    });
  },
  actions: {
    saveNewArticle: function(params) {
      console.log(params);
      var date = new Date();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var year = date.getFullYear();
      params.time = month+"/"+day+"/"+year;
      this.store.createRecord('article', params).save();
      this.transitionTo('admin');
    },
    updateArticle: function(article) {
      console.log('test');
      article.save();
      this.set('selectedArticle', null);
      this.transitionTo('admin');
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
