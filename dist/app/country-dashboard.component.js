System.register(['angular2/core', './country.service', './map-link.pipe', 'angular2/router', './country-cards.component', './country-list.component'], function(exports_1, context_1) {
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
    var core_1, country_service_1, map_link_pipe_1, router_1, country_cards_component_1, country_list_component_1;
    var CountryDashboardComponent;
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
            },
            function (country_cards_component_1_1) {
                country_cards_component_1 = country_cards_component_1_1;
            },
            function (country_list_component_1_1) {
                country_list_component_1 = country_list_component_1_1;
            }],
        execute: function() {
            CountryDashboardComponent = (function () {
                function CountryDashboardComponent(_countryService) {
                    this._countryService = _countryService;
                    this.countries = [];
                    this.view = "cards";
                    this.regions = [];
                    this.subregions = [];
                    this.regionFilter = "";
                    this.subregionFilter = "";
                }
                ;
                CountryDashboardComponent.prototype.ngOnInit = function () {
                    this.countries = this._countryService.getCountries();
                    this.regions = this._countryService.getAllRegions();
                    this.subregions = this._countryService.getAllSubRegions();
                };
                CountryDashboardComponent.prototype.onSearch = function () {
                    this.countries = this._countryService.searchCountries(this.searchTerm);
                };
                CountryDashboardComponent.prototype.onRegionFilterChange = function (event) {
                    var filterValue = event.target.value;
                    //this.countries = this._countryService.getCountriesByRegion(filter);
                    this.countries = this._countryService.filter([{ filterKey: 'region', filterValue: filterValue }]);
                };
                CountryDashboardComponent.prototype.onSubRegionFilterChange = function (event) {
                    var filter = event.target.value;
                    this.countries = this._countryService.getCountriesBySubRegion(filter);
                };
                CountryDashboardComponent.prototype.setView = function (value) {
                    this.view = value;
                };
                CountryDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'country-dashboard',
                        templateUrl: 'app/country-dashboard.component.html',
                        pipes: [map_link_pipe_1.MapLinkPipe],
                        directives: [country_cards_component_1.CountryCardsComponent, country_list_component_1.CountryListComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [country_service_1.CountryService])
                ], CountryDashboardComponent);
                return CountryDashboardComponent;
            }());
            exports_1("CountryDashboardComponent", CountryDashboardComponent);
        }
    }
});
//# sourceMappingURL=country-dashboard.component.js.map