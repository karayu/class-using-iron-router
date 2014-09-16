HomeController = RouteController.extend({
  template: 'Blog',

  articles: function () {
    return Articles.find();
  }
});
