webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    width: 90px;\r\n    height: 90px;\r\n}\r\n\r\n.hardstyle\r\n{\r\n    width: 80px;\r\n    height: 90px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"row light\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n  <div class=\"col-12 col-space\">&nbsp;</div>\r\n  <div class=\"col\"></div>\r\n  <div class=\"col-md-10\">\r\n    \r\n    <div class=\"col-6\">\r\n      <h1>About me</h1>\r\n      <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>\r\n    </div>\r\n\r\n    <div class=\"row spanspace center\">\r\n        <div class=\"col-3\">\r\n          <img src=\"assets/icon-football.png\" />\r\n          <h5>Football</h5>\r\n          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</span>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n          <img src=\"assets/icon-snowboarding.png\" />\r\n          <h5>Snowboard</h5>\r\n          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</span>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n          <img src=\"assets/icon-bmx.png\" />\r\n          <h5>BMX</h5>\r\n          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</span>\r\n        </div>\r\n\r\n        <div class=\"col-3\">\r\n          <img src=\"assets/icon-hardstyle.png\" class=\"hardstyle\" />\r\n          <h5>Hardstyle</h5>\r\n          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</span>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col\"></div>\r\n  <div class=\"col-12 col-space\">&nbsp;</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', redirectTo: '/#about', pathMatch: 'full' },
    { path: 'projects', redirectTo: '/#projects', pathMatch: 'full' },
    { path: 'contact', redirectTo: '/#contact', pathMatch: 'full' },
    { path: 'skills', redirectTo: '/#skills', pathMatch: 'full' }
    // {path: 'hobbies', component: HobbiesComponent}
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    color: #FFFFFF;\t\r\n}\r\n\r\n\r\n.navbar {\r\n    padding-right: 100px;\r\n    font-size: 14px;\t\r\n    line-height: 32px;\r\n    padding-top: 100px;\r\n    background-color: #1F1D1D;\r\n}\r\n\r\n\r\n.sticky-nav\r\n{\r\n    padding-top: 0px;\r\n}\r\n\r\n\r\n.navbar-brand{\r\n    padding-left: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar \" [ngClass]=\"{'sticky-nav' : getScrollStatus() > viewportHeight}\" >\r\n\t<a class=\"navbar-brand\" href=\"/\">\r\n\t\t<img src=\"./assets/logo.png\" style=\"padding-top:10px;\"/> \r\n\t</a>\r\n\t<ul class=\"nav\">\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" pageScroll href=\"#projects\"> Projects </a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" pageScroll href=\"#skills\"> Skills </a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" pageScroll  href=\"#about\"> About </a>\r\n\t\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" pageScroll href=\"#contact\"> Contact </a>\r\n\t\t\t</li>\r\n\t</ul>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n\r\n\t<!-- Fragment: LANDING -->\r\n\t<div id=\"landing\" [ngStyle]=\"{'min-height': (viewportHeight-'1000') + 'px'}\">\r\n\t\t<app-landing></app-landing>\r\n\t</div>\r\n\r\n\t<!-- Fragment: PROJECTS -->\r\n\t<app-projects></app-projects>\r\n\r\n\t<div class=\"spacer\"></div>\r\n\r\n\t<!-- Fragment: SKILLS -->\r\n\t<app-skills></app-skills>\r\n\r\n\t<div class=\"spacer\"></div>\r\n\r\n\t<!-- Fragment: ABOUT -->\r\n\t<app-about></app-about>\r\n\t<div class=\"center\">\r\n\t\t<button mat-icon-button color=\"primary\" (click)=\"scrollToTop()\" >\r\n\t\t\t<i class=\"material-icons\">&#xE316;</i>Top <i class=\"material-icons\">&#xE316;</i>\r\n\t\t</button>\r\n\t</div>\r\n\r\n\t<div class=\"spacer\"></div>\r\n\r\n\t<!-- Fragment: CONTACT -->\r\n\t<app-contact></app-contact>\r\n\r\n</div>\r\n<router-outlet></router-outlet>\r\n<!-- <ng-snotify></ng-snotify> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.scrollstatus = window.scrollX;
        this.viewportHeight = innerHeight;
        this.scroll = function () {
            // console.log('scrollstatus : ' + window.scrollY);
            // if (window.scrollY > this.viewportHeight)
            // {
            //   console.log('CLASS is set');
            // }
            // else
            // {
            //   console.log('NO CLASS');
            // }
        };
        //scroll to fragment
        router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                var tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(true);
                    }
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.scroll, true);
        //console.log('viewportHeight :' + this.viewportHeight);
    };
    AppComponent.prototype.getScrollStatus = function () {
        return +window.scrollY;
    };
    AppComponent.prototype.scrollToTop = function () {
        window.scrollTo(0, 0);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatInputModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\ninput {\r\n  background-color: #535353;\r\n  border: 1px solid #535353; \r\n\r\n  color: #FFFFFF;\r\n}\r\n\r\nform {\r\n  color: #FFFFFF;\t\r\n  font-size: 18px;\t\r\n  font-weight: 300;\t\r\n  line-height: 32px;\r\n}\r\n\r\nbutton {\r\n  color: #BFBFBF;\r\n  font-size: 16px;\t\r\n  font-weight: 800;\t\r\n  width: 250px;\t\r\n  line-height: 32px;\t\r\n  border: 2px solid #FFFFFF;\t\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.col-space-end {\r\n  padding-top: 250px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"row dark\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n  <div class=\"col-12 col-space\">&nbsp;</div>\r\n  <div class=\"col\"></div>\r\n  <div class=\"col-md-10\">\r\n\r\n    <div class=\"col-4 offset-md-4 center\">\r\n      <h1>Hire me</h1>\r\n      <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</span>\r\n\r\n      <!-- <div class=\"fields-container\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Your Name\" [formControl]=\"name\" required>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Your E-Mail-Adress\" [formControl]=\"email\" required>\r\n        </mat-form-field>\r\n      \r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Message\"></textarea>\r\n        </mat-form-field>\r\n      </div> -->\r\n\r\n\r\n\r\n      <div class=\"container\">\r\n        <div [hidden]=\"submitted\">\r\n          <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\">\r\n              <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                Name is required\r\n              </div>\r\n            </div>\r\n       \r\n            <div class=\"form-group\">\r\n              <label for=\"alterEgo\">Alter Ego</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"alterEgo\" [(ngModel)]=\"model.alterEgo\" name=\"alterEgo\">\r\n            </div>\r\n       \r\n            <div class=\"form-group\">\r\n              <label for=\"power\">Hero Power</label>\r\n              <select class=\"form-control\" id=\"power\" required [(ngModel)]=\"model.power\" name=\"power\" #power=\"ngModel\">\r\n                <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\r\n              </select>\r\n              <div [hidden]=\"power.valid || power.pristine\" class=\"alert alert-danger\">\r\n                Power is required\r\n              </div>\r\n            </div>\r\n       \r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm.form.valid\">Submit</button>\r\n          </form>\r\n        </div>\r\n       \r\n        <div [hidden]=\"!submitted\">\r\n          <h2>You submitted the following:</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3\">Name</div>\r\n            <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3\">Alter Ego</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.alterEgo }}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3\">Power</div>\r\n            <div class=\"col-xs-9 pull-left\">{{ model.power }}</div>\r\n          </div>\r\n          <br>\r\n          <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col\"></div>\r\n  <div class=\"col-12 col-space-end\">&nbsp;</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__("../../../../../src/app/contact/contact.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */](18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    ContactComponent.prototype.onSubmit = function () { this.submitted = true; };
    ContactComponent.prototype.newHero = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */](42, '', '');
    };
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Contact;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    margin-top: -150px;\r\n}\r\n\r\n.scroll {\r\n    position: absolute;\r\n}\r\n\r\nh1 {\r\n    font-size: 47px;\t\r\n    font-weight: 600;\t\r\n    line-height: 41px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.text {\r\n    padding-top: 20%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <img src=\"./assets/phil.png\" />\r\n    <a pageScroll href=\"#projects\" class=\"scroll\"> Scroll to Projects </a>\r\n    \r\n  </div> \r\n  <div class=\"col-md-6 text\">\r\n    <h1>Hi im Phil, from <s>New York</s> hilden.<br/>Software-Engereer & Backend-Hero</h1>\r\n  </div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".showcase-pic {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.projectstext {\r\n    padding-top: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"projects\" class=\"row light\" style=\"border:1px solid #000\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n  <div class=\"col-12 col-space\">&nbsp;</div>\r\n  <div class=\"col\"></div>\r\n\r\n  <div class=\"col-10\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 projectstext\">\r\n        <h1>Projects</h1>\r\n        <span>\r\n          <p> \r\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \r\n            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, \r\n         </p>\r\n         <p>\r\n           no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet\r\n          </p>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-md-6 showcase-pic\">\r\n       <img src=\"assets/referenz1.png\"  />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 showcase-pic\">\r\n        <img src=\"assets/referenz3.png\"/>\r\n      </div>\r\n      <div class=\"col-md-6 showcase-pic\">\r\n        <img src=\"assets/referenz2.png\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col\"></div>\r\n  <div class=\"col-12 col-space\">&nbsp;</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-6 {\r\n    padding: 50px 70px 50px 70px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"skills\" class=\"row light\" [ngStyle]=\"{'min-height': viewportHeight + 'px'}\">\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n    <div class=\"col\"></div>\r\n    \r\n    <div class=\"row col-md-10\" >\r\n      <div class=\"col-md-6\" style=\"border-right: 2px solid #EDEEF1;\">\r\n        <h1>Skills</h1>\r\n        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>\r\n        <div class=\"spanspace\">\r\n          <h3>MySQL,</h3>\r\n          <h3>PHP,</h3>\r\n          <h3>CSS,</h3>\r\n          <h3>HTML,</h3>\r\n          <h3>JS,</h3>\r\n          <h3>TYPO3,</h3>\r\n          <h3>CMS-ENTWICKLUNG,</h3>\r\n          <h3>C++/C#/C,</h3>\r\n          <h3>AUTOIT,</h3>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <h1>Professional background</h1>\r\n        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>\r\n      \r\n        <div class=\"row spanspace\">\r\n          <div class=\"education\">\r\n            <small>2015-2018</small>\r\n            <h4>Ausbildung zum Fachinformatiker</h4>\r\n            <span>Anwendungsentwicklung</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-12 col-space\">&nbsp;</div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* unused harmony export ContactComponent */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
var ContactComponent = (function () {
    function ContactComponent(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map