Articles = new Meteor.Collection('articles');

Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', {name: 'home'});
Router.route('/blog/new', {name: 'article.new'});
Router.route('/blog/:_id', {name: 'article.show'});

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
