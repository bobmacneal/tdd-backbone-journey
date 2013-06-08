/*global storyWall, $*/
'use strict';


window.storyWall = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
};

$(document).ready(function () {

  var mainView = new storyWall.Views.MainView({});
  $('.container').html(mainView.render().el);

});
