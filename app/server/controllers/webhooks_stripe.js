WebhooksStripeController = RouteController.extend({
  get: function () {
    this.response.end('GET hello world\n');
  },

  post: function () {
    var json = this.request.body;
    this.response.end("You posted: " + JSON.stringify(json) + "\n");
  }
});
