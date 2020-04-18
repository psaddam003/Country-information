System.register(['angular2/core', 'angular2/router', './country.service', './map-link.pipe'], function(exports_1, context_1) {
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
    var core_1, router_1, country_service_1, router_2, map_link_pipe_1;
    var CountryDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            },
            function (map_link_pipe_1_1) {
                map_link_pipe_1 = map_link_pipe_1_1;
            }],
        execute: function() {
            CountryDetailsComponent = (function () {
                function CountryDetailsComponent(_countryService, _routeParams) {
                    this._countryService = _countryService;
                    this._routeParams = _routeParams;
                }
                CountryDetailsComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    this.country = this._countryService.getCountry(id);
                    console.log(this.country);
                };
                CountryDetailsComponent.prototype.goBack = function () {
                    window.history.back();
                };
                CountryDetailsComponent.prototype.getCountryName = function (id) {
                    return this._countryService.getCountryName(id);
                };
                CountryDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'country-details',
                        templateUrl: 'app/country-details.component.html',
                        styleUrls: ['app/country-details.component.css'],
                        directives: [router_2.ROUTER_DIRECTIVES],
                        pipes: [map_link_pipe_1.MapLinkPipe]
                    }), 
                    __metadata('design:paramtypes', [country_service_1.CountryService, router_1.RouteParams])
                ], CountryDetailsComponent);
                return CountryDetailsComponent;
            }());
            exports_1("CountryDetailsComponent", CountryDetailsComponent);
        }
    }
});
//# sourceMappingURL=country-details.component.js.map