System.register(['angular2/core', './country.service', './map-link.pipe', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, country_service_1, map_link_pipe_1, router_1;
    var CountryListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            },
            function (map_link_pipe_1_1) {
                map_link_pipe_1 = map_link_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CountryListComponent = (function () {
                function CountryListComponent(_countryService) {
                    this._countryService = _countryService;
                    this.countries = [];
                }
                ;
                CountryListComponent = __decorate([
                    core_1.Component({
                        selector: 'country-list',
                        templateUrl: 'app/country-list.component.html',
                        styleUrls: ['app/country-list.component.css'],
                        pipes: [map_link_pipe_1.MapLinkPipe],
                        inputs: ['countries'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [country_service_1.CountryService])
                ], CountryListComponent);
                return CountryListComponent;
            }());
            exports_1("CountryListComponent", CountryListComponent);
        }
    }
});
//# sourceMappingURL=country-list.component.js.map