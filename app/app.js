Articles = new Meteor.Collection('articles');

Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', {
  name: 'home',
  template: 'Blog'
});

Router.route('/blog/new', {
  name: 'article.new'
});

Router.route('/blog/:_id', {
  name: 'article.show',
  template: 'Article',
  data: function () {
    return Articles.findOne({_id: this.params._id});
  }
});

if (Meteor.isClient) {
  Template.Blog.articles = function () { return Articles.find(); };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Articles.find().count() > 0)
      return;

    for (var i = 0; i < 3; i++) {
      Articles.insert({
        title: 'Blog Article ' + i,
        body: 'This is the text body for the article I want to show.',
        createdAt: new Date,
        author: 'Chris Mather'
      });
    }
  });
}
