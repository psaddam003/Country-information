System.register(['angular2/core', 'angular2/router', './country.service', './country-list.component', './country-details.component', './country-cards.component', './country-dashboard.component'], function(exports_1, context_1) {
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
    var core_1, router_1, country_service_1, country_list_component_1, country_details_component_1, country_cards_component_1, country_dashboard_component_1;
    var CountriesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (country_service_1_1) {
                country_service_1 = country_service_1_1;
            },
            function (country_list_component_1_1) {
                country_list_component_1 = country_list_component_1_1;
            },
            function (country_details_component_1_1) {
                country_details_component_1 = country_details_component_1_1;
            },
            function (country_cards_component_1_1) {
                country_cards_component_1 = country_cards_component_1_1;
            },
            function (country_dashboard_component_1_1) {
                country_dashboard_component_1 = country_dashboard_component_1_1;
            }],
        execute: function() {
            CountriesComponent = (function () {
                function CountriesComponent() {
                }
                CountriesComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            name: 'CountryDashboard',
                            path: '/',
                            component: country_dashboard_component_1.CountryDashboardComponent,
                            useAsDefault: true
                        },
                        {
                            name: 'CountryList',
                            path: '/list',
                            component: country_list_component_1.CountryListComponent,
                        },
                        {
                            name: 'CountryCards',
                            path: '/cards',
                            component: country_cards_component_1.CountryCardsComponent
                        },
                        {
                            name: 'CountryDetails',
                            path: '/details/:id',
                            component: country_details_component_1.CountryDetailsComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'all-countries',
                        template: "\n        <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"/\" id=\"logo\">\n                        <img src=\"../images/app_logo_map.png\" alt=\"\" />\n                    </a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav\">\n                        <li><a href=\"#\">Countries Dashboard</a></li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <router-outlet></router-outlet>\n    ",
                        styles: ["\n        #logo img {\n            width: 40px;\n            height: 40px;\n            margin-top: -10px;\n        }\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [country_service_1.CountryService, router_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CountriesComponent);
                return CountriesComponent;
            }());
            exports_1("CountriesComponent", CountriesComponent);
        }
    }
});
//# sourceMappingURL=countries.component.js.map