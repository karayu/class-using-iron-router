Iron.Router.plugins.authorize = function (router, options) {
  router.onBeforeAction(function () {
    if (Meteor.loggingIn())
      return;
    else if (!Meteor.user())
      this.redirect(this.lookupOption('notAuthorizedRoute'));
    else
      this.next();
  }, options);
};

