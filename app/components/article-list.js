import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateMe(article) {
      this.sendAction('updateMe', article);
    },
    deleteMe(article) {
      this.sendAction('deleteMe', article);
    }
  }
});
