import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    updateMe() {
      console.log("FUCK YOU HAXOR");
    },
    deleteMe() {
      console.log("FOILED AGAIN BITCH");
    }
  }
});
