ArticleShowController = RouteController.extend({
  template: 'Article',
  data: function () {
    return Articles.findOne({_id: this.params._id});
  }
});
