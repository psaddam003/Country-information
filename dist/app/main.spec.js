System.register(['./map-link.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var map_link_pipe_1;
    return {
        setters:[
            function (map_link_pipe_1_1) {
                map_link_pipe_1 = map_link_pipe_1_1;
            }],
        execute: function() {
            describe('MapLinkPipe', function () {
                var mapLinkPipe;
                beforeEach(function () {
                    mapLinkPipe = new map_link_pipe_1.MapLinkPipe();
                });
                it('Generates right link', function () {
                    var latlng = [20, 77];
                    var url = 'https://www.google.com/maps/place/20,77/@20,77,5z';
                    expect(mapLinkPipe.transform(latlng, [])).toEqual(url);
                });
            });
        }
    }
});
//# sourceMappingURL=main.spec.js.map