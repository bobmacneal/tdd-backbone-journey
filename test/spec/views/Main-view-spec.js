'use strict';

(function () {
  describe('storyWall.Views.MainView', function () {
    var view;

    beforeEach(function () {
      view = new storyWall.Views.MainView({});
    });

    describe('initialization', function () {
      it('Handlebars template should be defined and retrievable', function () {
        expect(JST['app/scripts/templates/Main.hbs']).toBeDefined();
      });

      it('compiled template function should be set', function () {
        expect(view.template).toBe(JST['app/scripts/templates/Main.hbs']);
      });

      it('className should be set', function () {
        expect(view.className).toBe('story-wall-main-view');
      });
    });

    describe('.render', function () {
      it('invoke template function with empty context', function () {
        var spy = spyOn(view, 'template');
        view.render();
        expect(spy).toHaveBeenCalledWith({});
      });

      it('calls $el.html with output from template', function () {
        var spy = spyOn(jQuery.fn, 'html');
        view.render();
        var expectedContent = view.template({});
        expect(spy).toHaveBeenCalledWith(expectedContent);
      });

      it('returns itself', function () {
        var ref = view.render();
        expect(ref).toBe(view);
      });
    });

  });
})();
