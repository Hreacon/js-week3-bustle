import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  category: DS.attr(),
  time: DS.attr(),
  title: DS.attr(),
});
