/*global storyWall, Backbone, JST*/

storyWall.Views.MainView = Backbone.View.extend({

  template: JST['app/scripts/templates/Main.hbs'],
  className: 'story-wall-main-view',

  render: function () {
    $(this.el).html(this.template({}));
    return this;
  }

});
