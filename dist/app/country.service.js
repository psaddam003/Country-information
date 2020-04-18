System.register(['angular2/core', './mock-countries'], function(exports_1, context_1) {
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
    var core_1, mock_countries_1;
    var CountryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_countries_1_1) {
                mock_countries_1 = mock_countries_1_1;
            }],
        execute: function() {
            CountryService = (function () {
                function CountryService() {
                }
                CountryService.prototype.getCountries = function () {
                    return mock_countries_1.COUNTRIES;
                };
                CountryService.prototype.getAllRegions = function () {
                    var regions = mock_countries_1.COUNTRIES.map(function (country) { return country.region.trim(); });
                    var uniqueRegions = [];
                    regions.forEach(function (region) {
                        if (region && uniqueRegions.indexOf(region) < 0) {
                            uniqueRegions.push(region);
                        }
                    });
                    return uniqueRegions;
                };
                CountryService.prototype.getAllSubRegions = function () {
                    var subRegions = mock_countries_1.COUNTRIES.map(function (country) { return country.subregion.trim(); });
                    var uniqueSubRegions = [];
                    subRegions.forEach(function (subRegion) {
                        if (subRegion && uniqueSubRegions.indexOf(subRegion) < 0) {
                            uniqueSubRegions.push(subRegion);
                        }
                    });
                    return uniqueSubRegions;
                };
                CountryService.prototype.searchCountries = function (searchTerm) {
                    if (!searchTerm || !searchTerm.trim()) {
                        return mock_countries_1.COUNTRIES;
                    }
                    var expression = searchTerm.split('').map(function (t) { return '[^' + t + ']*' + t; }).join('');
                    var exp = new RegExp(expression, "gim");
                    return mock_countries_1.COUNTRIES.filter(function (c) { return exp.test(c.name); });
                };
                CountryService.prototype.getCountry = function (id) {
                    var code = id.trim();
                    var lookup;
                    if (code.length === 2) {
                        lookup = "cca2";
                    }
                    else if (code.length === 3) {
                        if (parseInt(id, 10)) {
                            lookup = "ccn3";
                        }
                        else {
                            lookup = "cca3";
                        }
                    }
                    else {
                        return;
                    }
                    return mock_countries_1.COUNTRIES.filter(function (country) { return country[lookup].toUpperCase() === id.toUpperCase(); })[0];
                };
                CountryService.prototype.getCountryName = function (id) {
                    var country = this.getCountry(id);
                    return country.name || "";
                };
                CountryService.prototype.getCountryByName = function (name) {
                    return mock_countries_1.COUNTRIES.filter(function (country) { return country["name"].toUpperCase() === name.trim().toUpperCase(); })[0];
                };
                CountryService.prototype.getCountriesByRegion = function (region) {
                    return mock_countries_1.COUNTRIES.filter(function (country) { return country["region"].toUpperCase() === region.trim().toUpperCase(); });
                };
                CountryService.prototype.getCountriesBySubRegion = function (subregion) {
                    return mock_countries_1.COUNTRIES.filter(function (country) { return country["subregion"].toUpperCase() === subregion.trim().toUpperCase(); });
                };
                CountryService.prototype.filter = function (filters) {
                    var countries = mock_countries_1.COUNTRIES;
                    var filteredCountries = mock_countries_1.COUNTRIES;
                    filters.forEach(function (filter) {
                        if (filter && filter.filterKey.trim() && filter.filterValue.trim()) {
                            filteredCountries = filteredCountries.filter(function (country) {
                                return country[filter.filterKey].toUpperCase() === filter.filterValue.trim().toUpperCase();
                            });
                        }
                    });
                    return filteredCountries;
                };
                CountryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CountryService);
                return CountryService;
            }());
            exports_1("CountryService", CountryService);
        }
    }
});
//# sourceMappingURL=country.service.js.map