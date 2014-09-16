HomeController = RouteController.extend({
  template: 'Blog',

  waitOn: function () {
    return [Meteor.subscribe('articles')];
  },

  articles: function () {
    return Articles.find();
  }
});
