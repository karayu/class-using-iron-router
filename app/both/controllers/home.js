HomeController = RouteController.extend({
  template: 'Blog',

  waitOn: function () {
    return [Meteor.subscribe('articles')];
  }
});

HomeController.helpers({
	articles: function () {
    return Articles.find();
  }
})
