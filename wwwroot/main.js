(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-menu></app-top-menu>\n<app-login></app-login>\n<router-outlet></router-outlet>\n<!-- <app-home></app-home> -->\n<!-- <app-get-info-by-email></app-get-info-by-email> -->\n<!-- <div>footerr</div> -->\n<!-- <button class=\"btn btn-primary\">Salva</button>\n<fa name=\"cog\" animation=\"spin\"></fa>\n<fa name=\"snowflake-o\" animation=\"pulse\"></fa> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componenets_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componenets/top-menu/top-menu.component */ "./src/app/componenets/top-menu/top-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _componenets_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componenets/home/home.component */ "./src/app/componenets/home/home.component.ts");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _componenets_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componenets/login/login.component */ "./src/app/componenets/login/login.component.ts");
/* harmony import */ var _componenets_login_info_for_menu_login_info_for_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componenets/login-info-for-menu/login-info-for-menu.component */ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _componenets_get_info_by_email_get_info_by_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componenets/get-info-by-email/get-info-by-email.component */ "./src/app/componenets/get-info-by-email/get-info-by-email.component.ts");
/* harmony import */ var _componenets_test_csv_test_csv_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componenets/test-csv/test-csv.component */ "./src/app/componenets/test-csv/test-csv.component.ts");
/* harmony import */ var _componenets_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componenets/not-found-component/not-found-component.component */ "./src/app/componenets/not-found-component/not-found-component.component.ts");
/* harmony import */ var _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componenets/laghi/laghi.component */ "./src/app/componenets/laghi/laghi.component.ts");
/* harmony import */ var _componenets_tecniche_tecniche_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componenets/tecniche/tecniche.component */ "./src/app/componenets/tecniche/tecniche.component.ts");
/* harmony import */ var _componenets_lago_lago_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componenets/lago/lago.component */ "./src/app/componenets/lago/lago.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _componenets_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_5__["TopMenuComponent"],
                _componenets_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _componenets_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _componenets_login_info_for_menu_login_info_for_menu_component__WEBPACK_IMPORTED_MODULE_12__["LoginInfoForMenuComponent"],
                _componenets_get_info_by_email_get_info_by_email_component__WEBPACK_IMPORTED_MODULE_14__["GetInfoByEmailComponent"],
                _componenets_test_csv_test_csv_component__WEBPACK_IMPORTED_MODULE_15__["TestCsvComponent"],
                _componenets_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponentComponent"],
                _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_17__["LaghiComponent"],
                _componenets_tecniche_tecniche_component__WEBPACK_IMPORTED_MODULE_18__["TecnicheComponent"],
                _componenets_lago_lago_component__WEBPACK_IMPORTED_MODULE_19__["LagoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: "", component: _componenets_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: "laghi", component: _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_17__["LaghiComponent"] },
                    { path: "laghi", component: _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_17__["LaghiComponent"] },
                    { path: "lago/:id", component: _componenets_lago_lago_component__WEBPACK_IMPORTED_MODULE_19__["LagoComponent"] },
                    { path: "tecniche", component: _componenets_tecniche_tecniche_component__WEBPACK_IMPORTED_MODULE_18__["TecnicheComponent"] },
                    { path: "contattaci", component: _componenets_get_info_by_email_get_info_by_email_component__WEBPACK_IMPORTED_MODULE_14__["GetInfoByEmailComponent"] },
                    { path: "**", component: _componenets_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponentComponent"] }
                ])
            ],
            providers: [
                _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_9__["GlobalRuntimeConfigService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componenets/get-info-by-email/get-info-by-email.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componenets/get-info-by-email/get-info-by-email.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL2dldC1pbmZvLWJ5LWVtYWlsL2dldC1pbmZvLWJ5LWVtYWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componenets/get-info-by-email/get-info-by-email.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componenets/get-info-by-email/get-info-by-email.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  Nome : <input type=\"text\" [(ngModel)]=\"emailMessage.fromName\" ><br>\n  Cognome : <input type=\"text\" [(ngModel)]=\"emailMessage.fromSurname\" ><br>\n  La tua Email : <input type=\"text\" [(ngModel)]=\"emailMessage.fromEmail\" ><br>\n  Numero di telefono (Opzionale, solamente se si desidera essere ricontattati con urgenza) : <input type=\"text\" [(ngModel)]=\"emailMessage.fromTelephone\" ><br>\n  Oggetto : <input type=\"text\" [(ngModel)]=\"emailMessage.subject\" ><br>\n  Contenuto : <input type=\"text\" [(ngModel)]=\"emailMessage.body\" ><br>\n  <button class=\"btn btn-success\" (click)=\"inviaEmail()\">Invia</button>\n</div>\n"

/***/ }),

/***/ "./src/app/componenets/get-info-by-email/get-info-by-email.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componenets/get-info-by-email/get-info-by-email.component.ts ***!
  \******************************************************************************/
/*! exports provided: GetInfoByEmailComponent, EMailMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInfoByEmailComponent", function() { return GetInfoByEmailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMailMessage", function() { return EMailMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




var GetInfoByEmailComponent = /** @class */ (function () {
    function GetInfoByEmailComponent(_globalRuntimeService, _api) {
        this.emailMessage = new EMailMessage("", "", "", "", "", "", "");
        this.txt = new Testi();
        this.rtmSvc = _globalRuntimeService;
        this.api = _api;
    }
    GetInfoByEmailComponent.prototype.ngOnInit = function () {
    };
    GetInfoByEmailComponent.prototype.inviaEmail = function () {
        var _this = this;
        if (!this.emailMessage.fromEmail.includes("@") || !this.emailMessage.fromEmail.includes(".")) {
            alert(this.txt.emailNonValida[this.rtmSvc.config.lang]);
            return;
        }
        this.api.SendEmailForInfo(this.emailMessage).subscribe(function (success) {
            if (success == 1)
                alert(_this.txt.messaggioInviato[_this.rtmSvc.config.lang]);
            else
                alert(_this.txt.messaggioNonInviato[_this.rtmSvc.config.lang]);
        }, function (err) { alert(_this.txt.messaggioNonInviato[_this.rtmSvc.config.lang]); }, function () { });
    };
    GetInfoByEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-info-by-email',
            template: __webpack_require__(/*! ./get-info-by-email.component.html */ "./src/app/componenets/get-info-by-email/get-info-by-email.component.html"),
            styles: [__webpack_require__(/*! ./get-info-by-email.component.css */ "./src/app/componenets/get-info-by-email/get-info-by-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], GetInfoByEmailComponent);
    return GetInfoByEmailComponent;
}());

var EMailMessage = /** @class */ (function () {
    function EMailMessage(fromName, fromSurname, fromEmail, to, fromTelephone, subject, body) {
        this.fromName = fromName;
        this.fromSurname = fromSurname;
        this.fromEmail = fromEmail;
        this.to = to;
        this.fromTelephone = fromTelephone;
        this.subject = subject;
        this.body = body;
        this.to = "mori.luca@hotmail.it";
    }
    return EMailMessage;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        //input placeholders
        this.namePlaceholder = ["Indirizzo E-Mail", "E-Mail Address"];
        this.passwordPlaceholder = ["Password", "Password"];
        this.emailNonValida = ["L'email deve contenere i caratteri '@' , '.' ed essere lunga almeno 5 caratteri.", "Your Email must contain '@' , '.' and be long at least 5 characters."];
        this.messaggioInviato = ["Il messaggio è stato inviato correttamente", "Your message has been sent."];
        this.messaggioNonInviato = ["Impossibile inviare il messaggio.", "Sorry, we are unable to send your message at the moment."];
    }
    return Testi;
}());


/***/ }),

/***/ "./src/app/componenets/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componenets/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    width: 100%;\n    height: 92.7vh;\n    overflow: hidden;\n    position: relative;\n}\n.home-background{\n    width: 100%;\n    min-height: 100%;\n}\n.cover {\n    position: absolute;\n    float: left;\n    width: 100%;\n    height: 100%;\n    background:rgba(0,0,0,0.75);\n    \n}\n.text-container{\n    position: relative;\n    margin: auto;\n    color: white;\n    width: 70%;\n    height: 50%;\n    -webkit-transform: translate(0%, -50%);\n            transform: translate(0%, -50%);\n    top: 50%;\n    text-align: center;\n    /*  border: 2px solid white; */\n}\n.title{\n    font-size: 12vw;\n    font-family: 'Luckiest Guy', cursive;\n    height: 70%;\n}\n.description{\n    font-size: 3vw;\n    font-family: 'Handlee', cursive;\n    height: 30%;\n}\nhr{\n    color: white;\n    background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7O0FBRS9CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTIuN3ZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtYmFja2dyb3VuZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY292ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNzUpO1xuICAgIFxufVxuXG4udGV4dC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsgKi9cbn1cblxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTJ2dztcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gICAgaGVpZ2h0OiA3MCU7XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IDN2dztcbiAgICBmb250LWZhbWlseTogJ0hhbmRsZWUnLCBjdXJzaXZlO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG5ocntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/componenets/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/componenets/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"cover\">\n    <div class=\"text-container\">\n        <div class=\"title\">{{txt.titolo[rtmSvc.config.lang]}}</div>\n        <hr>\n        <div class=\"description\">{{txt.descrizione[rtmSvc.config.lang]}}</div>\n    </div>\n  </div>\n  <img class=\"home-background\" [src]=\"pathBackground\" alt=\"\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/componenets/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componenets/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_globalRuntimeService) {
        this.txt = new Testi();
        this.rtmSvc = _globalRuntimeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.pathBackground = "../../../assets/media/home/home" + (Math.floor(Math.random() * 4) + 1) + ".jpg";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/componenets/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/componenets/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"]])
    ], HomeComponent);
    return HomeComponent;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        this.titolo = ["Too Ez Fish", "Too Ez Fish"];
        this.descrizione = ["Il Nuovo Portale Italiano dedicato alla Pesca Sportiva.", "The new Italian Fishing Reference."];
    }
    return Testi;
}());


/***/ }),

/***/ "./src/app/componenets/laghi/laghi.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenets/laghi/laghi.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    border: 1px solid red;\n    width: 90%;\n    margin: auto;\n    margin-top: 1em;\n    border-radius: 10px;\n    overflow: hidden;\n    position: relative;\n}\n\n.box:hover{\n    -webkit-transform : scale(1.01);\n            transform : scale(1.01);\n    box-shadow: 5px 5px 5px gray;\n}\n\n.box-body{\n    display: flex;\n}\n\n.box-nome-lago{\n    border: 0px solid green;\n    padding: 2px;\n    background: lightgreen;\n}\n\n.box-text{\n    border: 1px solid orange;\n    background: lightgoldenrodyellow;\n}\n\n.wrapper-info{\n    flex: 3;\n    padding: 5px;\n}\n\n.box-preview{\n    background: lightgoldenrodyellow;\n    margin: 3px;\n    flex: 1;\n}\n\np .not-open{\n    color: red;\n}\n\np .open{\n    color: green;\n}\n\np .half{\n    color: gold;\n}\n\n.cover {\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 232, 24, 0.164);\n    position: absolute;\n}\n\n.cover:hover{\n    background: rgba(255, 232, 24, 0.0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldHMvbGFnaGkvbGFnaGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW5ldHMvbGFnaGkvbGFnaGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94OmhvdmVye1xuICAgIHRyYW5zZm9ybSA6IHNjYWxlKDEuMDEpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyYXk7XG59XG5cbi5ib3gtYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm94LW5vbWUtbGFnb3tcbiAgICBib3JkZXI6IDBweCBzb2xpZCBncmVlbjtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbn1cblxuXG4uYm94LXRleHR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xufVxuXG4ud3JhcHBlci1pbmZve1xuICAgIGZsZXg6IDM7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmJveC1wcmV2aWV3e1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGZsZXg6IDE7XG59XG5cbnAgLm5vdC1vcGVue1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbnAgLm9wZW57XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5wIC5oYWxme1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG4uY292ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjMyLCAyNCwgMC4xNjQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNvdmVyOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMzIsIDI0LCAwLjApO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/componenets/laghi/laghi.component.html":
/*!********************************************************!*\
  !*** ./src/app/componenets/laghi/laghi.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Elenco laghi  -->\n\n<div class=\"wrpapper\">\n\n    <div class=\"elenco-container\">\n\n        <!-- inizio presentazione lago -->\n        <div class=\"box transition3\" [routerLink]=\"['/lago',l.id]\" *ngFor=\"let l of laghi\">\n            <div class=\"cover transition3\"></div>\n            <h5 class=\"box-nome-lago\">Il Murett</h5>\n            <div class=\"box-body\">\n                <p class=\"box-info\">\n                    <div class=\"wrapper-info\">\n                        <p>\n                        Giorni di Apertura :  <span class=\"day open\"> L </span>\n                                    <span class=\"day open\"> M </span>\n                                    <span class=\"day not-open\"> M </span>\n                                    <span class=\"day open\"> G </span>\n                                    <span class=\"day open\"> V </span>\n                                    <span class=\"day open\"> S </span>\n                                    <span class=\"day half\"> D </span>\n                        </p>\n                        <p><fa name=\"globe\"></fa> Indirizzo</p>\n                        <p><fa name=\"phone\"></fa> Numero di Telefono</p>\n                        <p><fa name=\"envelope-o\"></fa> Contatto E-Mail</p>\n                    \n                        <p class=\"box-text\">{{l.info[rtmSvc.config.lang]}}</p>\n                    </div>\n                    <div class=\"box-preview\"><img src=\"../../../assets/media/LaFametta.svg\" alt=\"\"></div>\n            </div>\n            \n        </div>\n        <!-- fine presentazione lago -->\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/componenets/laghi/laghi.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenets/laghi/laghi.component.ts ***!
  \******************************************************/
/*! exports provided: LaghiComponent, LakePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaghiComponent", function() { return LaghiComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LakePreview", function() { return LakePreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




var LaghiComponent = /** @class */ (function () {
    function LaghiComponent(_globalRuntimeService, _api) {
        this.laghi = [];
        this.rtmSvc = _globalRuntimeService;
        this.api = _api;
    }
    LaghiComponent.prototype.ngOnInit = function () {
        this.laghi = this.api.getLakesPreviews();
        console.log(this.laghi);
    };
    LaghiComponent.prototype.routeToLake = function () {
        console.log("vai al lago il muret");
    };
    LaghiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-laghi',
            template: __webpack_require__(/*! ./laghi.component.html */ "./src/app/componenets/laghi/laghi.component.html"),
            styles: [__webpack_require__(/*! ./laghi.component.css */ "./src/app/componenets/laghi/laghi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LaghiComponent);
    return LaghiComponent;
}());

var LakePreview = /** @class */ (function () {
    function LakePreview(id, giornoDiApertura, nome, indirizzo, telefono, email, info) {
    }
    return LakePreview;
}());



/***/ }),

/***/ "./src/app/componenets/lago/lago.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componenets/lago/lago.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL2xhZ28vbGFnby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componenets/lago/lago.component.html":
/*!******************************************************!*\
  !*** ./src/app/componenets/lago/lago.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lago works!\n</p>\n"

/***/ }),

/***/ "./src/app/componenets/lago/lago.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componenets/lago/lago.component.ts ***!
  \****************************************************/
/*! exports provided: LagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LagoComponent", function() { return LagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LagoComponent = /** @class */ (function () {
    function LagoComponent() {
    }
    LagoComponent.prototype.ngOnInit = function () {
    };
    LagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lago',
            template: __webpack_require__(/*! ./lago.component.html */ "./src/app/componenets/lago/lago.component.html"),
            styles: [__webpack_require__(/*! ./lago.component.css */ "./src/app/componenets/lago/lago.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LagoComponent);
    return LagoComponent;
}());



/***/ }),

/***/ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componenets/login-info-for-menu/login-info-for-menu.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL2xvZ2luLWluZm8tZm9yLW1lbnUvbG9naW4taW5mby1mb3ItbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componenets/login-info-for-menu/login-info-for-menu.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div *ngIf=\"!rtmSvc.config.user.isLogged && !rtmSvc.config.login.showLoginForm\" class=\"login-request\" >\n      <button (click)=\"ShowLoginRegisterForm()\" class=\"btn btn-dark\">{{txt.login[rtmSvc.config.lang]}}/{{txt.register[rtmSvc.config.lang]}}</button>\n    \n  </div>\n  <div  *ngIf=\"rtmSvc.config.user.isLogged\" class=\"info\">\n    <p>\n      {{(rtmSvc.config.user.showPrivateName)?rtmSvc.config.user.name+\" \"+rtmSvc.config.user.surname+ \" | \"+rtmSvc.config.user.nickname : rtmSvc.config.user.nickname}}\n    </p>\n    <button class=\"btn btn-dark\" (click)=\"logout()\">{{txt.logout[rtmSvc.config.lang]}}</button>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componenets/login-info-for-menu/login-info-for-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LoginInfoForMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInfoForMenuComponent", function() { return LoginInfoForMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");



var LoginInfoForMenuComponent = /** @class */ (function () {
    function LoginInfoForMenuComponent(_globalRuntimeService) {
        this.showLoginRegisterForm = false;
        this.txt = new Testi();
        this.rtmSvc = _globalRuntimeService;
    }
    LoginInfoForMenuComponent.prototype.ngOnInit = function () {
    };
    LoginInfoForMenuComponent.prototype.ShowLoginRegisterForm = function () {
        this.rtmSvc.config.login.showLoginForm = true;
    };
    LoginInfoForMenuComponent.prototype.logout = function () {
        if (confirm(this.txt.logoutConfirm[this.rtmSvc.config.lang]))
            this.rtmSvc.config.user = new _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    LoginInfoForMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-info-for-menu',
            template: __webpack_require__(/*! ./login-info-for-menu.component.html */ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.html"),
            styles: [__webpack_require__(/*! ./login-info-for-menu.component.css */ "./src/app/componenets/login-info-for-menu/login-info-for-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"]])
    ], LoginInfoForMenuComponent);
    return LoginInfoForMenuComponent;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        this.login = ["Accedi", "Login"];
        this.register = ["Registrati", "Sign Up"];
        this.logout = ["Disconnetti", "Logout"];
        this.logoutConfirm = ["Sei sicuro di volerti scollegare?", "Do you really want to logout?"];
    }
    return Testi;
}());


/***/ }),

/***/ "./src/app/componenets/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenets/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-wrapper{\n    background: #228b221f;\n\n}\n\n.exit-icon{\n    color: forestgreen;\n    position: relative;\n}\n\ninput{\n    margin: 10px, 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW5ldHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLXdyYXBwZXJ7XG4gICAgYmFja2dyb3VuZDogIzIyOGIyMjFmO1xuXG59XG5cbi5leGl0LWljb257XG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXR7XG4gICAgbWFyZ2luOiAxMHB4LCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/componenets/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/componenets/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"rtmSvc.config.login.showLoginForm && !showLoginRegisterForm\" class=\"login-form-wrapper\">\n  <div></div>\n  <fa class=\"exit-icon mr-3\" name=\"times\" size=\"2x\" (click)=\"closeForm()\"></fa>\n  <input class=\"m-1\" [(ngModel)]=\"credenzialiLogin.email\" type=\"text\" name=\"email\" id=\"email\" placeholder=\"{{txt.namePlaceholder[rtmSvc.config.lang]}}\">\n  <input class=\"m-1\" [(ngModel)]=\"credenzialiLogin.password\" (keyup.enter)=\"accedi(credenzialiLogin)\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"{{txt.passwordPlaceholder[rtmSvc.config.lang]}}\">\n  <button (click)=\"accedi(credenzialiLogin)\" class=\"btn btn-dark m-2\">{{txt.accedi[rtmSvc.config.lang]}}</button>\n  <button (click)=\"apriFormRegistrazione()\" class=\"btn btn-dark m-2\">{{txt.registrati[rtmSvc.config.lang]}}</button>\n</div>\n\n<div *ngIf=\"showLoginRegisterForm\" class=\"login-form-wrapper\">\n  <fa class=\"exit-icon\" name=\"times\" size=\"2x\" (click)=\"closeForm()\"></fa>\n\n  <input [(ngModel)]=\"nuovoUtente.name\" type=\"text\" name=\"name\" id=\"name\" placeholder=\"{{txt.regNamePh[rtmSvc.config.lang]}}\">\n  <input [(ngModel)]=\"nuovoUtente.surname\" type=\"text\" name=\"surname\" id=\"surname\" placeholder=\"{{txt.regSurnamePh[rtmSvc.config.lang]}}\">\n  <input [(ngModel)]=\"nuovoUtente.nickname\" type=\"text\" name=\"nick\" id=\"nick\" placeholder=\"{{txt.regNicknamePh[rtmSvc.config.lang]}}\">\n  <input [(ngModel)]=\"nuovoUtente.email\" type=\"text\" name=\"email\" id=\"email\" placeholder=\"{{txt.regEmailPh[rtmSvc.config.lang]}}\">\n  <input [(ngModel)]=\"nuovoUtente.password\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"{{txt.passwordPlaceholder[rtmSvc.config.lang]}}\">\n  {{txt.regShowPrivateNamePh[rtmSvc.config.lang]}}<input [(ngModel)]=\"nuovoUtente.showPrivateName\" type=\"checkbox\" name=\"showPrivateName\"\n    id=\"showPrivateName\">\n  <br>\n  <button (click)=\"confermaRegistrazione()\" class=\"btn btn-success\">{{txt.btnRegistrati[rtmSvc.config.lang]}}</button>\n  <button (click)=\"chiudiFormRegistrazione()\" class=\"btn btn-dark\">{{txt.sonoRegistrato[rtmSvc.config.lang]}}</button>\n  <button (click)=\"resetCampi()\" class=\"btn btn-warning\">{{txt.btnClearRegistrazione[rtmSvc.config.lang]}}</button>\n</div>\n"

/***/ }),

/***/ "./src/app/componenets/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenets/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent, InputCredenzialiLogin, UserForDotnet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCredenzialiLogin", function() { return InputCredenzialiLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForDotnet", function() { return UserForDotnet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_globalRuntimeService, _api) {
        this.showLoginRegisterForm = false;
        this.txt = new Testi();
        this.credenzialiLogin = new InputCredenzialiLogin("", "");
        //oggetto utilizzato come buffer per i dati in ingresso
        this.nuovoUtente = new UserForDotnet();
        this.rtmSvc = _globalRuntimeService;
        this.api = _api;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.toggle = function () {
        this.rtmSvc.config.user.isLogged = !this.rtmSvc.config.user.isLogged;
    };
    LoginComponent.prototype.closeForm = function () {
        this.rtmSvc.config.login.showLoginForm = false;
        this.showLoginRegisterForm = false;
    };
    /*return values is encoded in the user basicId
     basicId = >= 0 | OK
     basicId = > -1 | Email non registrata
     basicId = > -2 | Email trovata ma password sbagliata
   */
    LoginComponent.prototype.accedi = function (_credenziali) {
        var _this = this;
        //controllo se email e password sono validi
        if (!_credenziali.email.includes("@") || !_credenziali.email.includes(".")) {
            alert(this.txt.emailNonValida[this.rtmSvc.config.lang]);
            return;
        }
        if (_credenziali.password.trim().length < 4) {
            alert(this.txt.passNonValida[this.rtmSvc.config.lang]);
            return;
        }
        this.api.login(_credenziali).subscribe(function (success) {
            var user = success;
            if (user.basicId >= 0) {
                _this.rtmSvc.config.user = user;
                _this.rtmSvc.config.user.isLogged = true;
                console.log(_this.rtmSvc.config.user);
                _this.closeForm();
            }
            //email trovata, password sbagliata
            else if (user.basicId == -2)
                alert(_this.txt.emailOkPassNo[_this.rtmSvc.config.lang]);
            //email non trovata
            else if (user.basicId == -1)
                alert(_this.txt.emailNonTrovata[_this.rtmSvc.config.lang]);
        }, function (err) { }, function () { });
    };
    LoginComponent.prototype.apriFormRegistrazione = function () {
        this.showLoginRegisterForm = true;
    };
    LoginComponent.prototype.chiudiFormRegistrazione = function () {
        this.showLoginRegisterForm = false;
    };
    LoginComponent.prototype.resetCampi = function () {
        if (confirm(this.txt.confirmReset[this.rtmSvc.config.lang]))
            this.nuovoUtente = new _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    /*
    From the api
    return  1 | registrazione ok
    return -1 | email gia esistente
    return -2 | nickname gia esistente
    return -3 | errore salvataggio credenziale email e password
    return -4 | errore salvataggio info
    */
    LoginComponent.prototype.confermaRegistrazione = function () {
        var _this = this;
        //controllo campi vuoti per la registrazione
        if (this.nuovoUtente.name.trim().length == 0) {
            alert(this.txt.nomeNonValido[this.rtmSvc.config.lang]);
            return;
        }
        if (this.nuovoUtente.surname.trim().length == 0) {
            alert(this.txt.cognomeNonValido[this.rtmSvc.config.lang]);
            return;
        }
        if (this.nuovoUtente.nickname.trim().length == 0) {
            alert(this.txt.nicknameNonValido[this.rtmSvc.config.lang]);
            return;
        }
        if (!this.nuovoUtente.email.includes("@") || !this.nuovoUtente.email.includes(".")) {
            alert(this.txt.emailNonValida[this.rtmSvc.config.lang]);
            return;
        }
        if (this.nuovoUtente.password.trim().length < 4) {
            alert(this.txt.passNonValida[this.rtmSvc.config.lang]);
            return;
        }
        confirm(this.txt.confirmRegistration[this.rtmSvc.config.lang]);
        this.api.addNewPerson(this.nuovoUtente).subscribe(function (success) {
            if (success == 1) {
                alert(_this.txt.signupSuccess[_this.rtmSvc.config.lang]);
                var credenziali = new InputCredenzialiLogin(_this.nuovoUtente.email, _this.nuovoUtente.password);
                _this.accedi(credenziali);
            }
            else if (success == -1)
                alert(_this.txt.messaggioEmailEsistente[_this.rtmSvc.config.lang]);
            else if (success == -2)
                alert(_this.txt.messaggioNicknameEsistente[_this.rtmSvc.config.lang]);
            else if (success == -3)
                alert(_this.txt.messaggioErroreBasic[_this.rtmSvc.config.lang]);
            else if (success == -4)
                alert(_this.txt.messaggioErroreInfo[_this.rtmSvc.config.lang]);
        }, function (err) { }, function () { });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/componenets/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/componenets/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        //input placeholders
        this.namePlaceholder = ["Indirizzo E-Mail", "E-Mail Address"];
        this.passwordPlaceholder = ["Password", "Password"];
        //form di registrazione place holders
        this.regNamePh = ["Nome", "Name"];
        this.regSurnamePh = ["Cognome", "Surname"];
        this.regNicknamePh = ["Soprannome/Nickname", "Nickname"];
        this.regShowPrivateNamePh = ["Vuoi permettere agli altri utenti di vedere il tuo nome e cognome?", "Would you like other people to know your personal name and surname ?"];
        this.regEmailPh = ["Email per la registrazione", "Sign Up Email"];
        //messaggi errore del form di registrazione per campi non validi
        this.nomeNonValido = ["Il campo nome non può essere vuoto.", "Name field can not be empty."];
        this.cognomeNonValido = ["Il Cognome nome non può essere vuoto.", "Surname field can not be empty."];
        this.nicknameNonValido = ["Il campo Nickname non può essere vuoto.", "Nickname field can not be empty."];
        this.passNonValida = ["La password deve essere lunga almeno 4 caratteri", "Password must be at least 4 character."];
        this.emailNonValida = ["L'email deve contenere i caratteri '@' , '.' ed essere lunga almeno 5 caratteri.", "Your Email must contain '@' , '.' and be long at least 5 characters."];
        //form di registrazione pulsanti
        this.btnRegistrati = ["Conferma Registrazione", "Confirm and Sign Up"];
        this.sonoRegistrato = ["Sei già registrato?", "Already Signed Up?"];
        this.btnClearRegistrazione = ["Ripulisci campi", "Reset Fielsd"];
        //conferma registrazione utente
        this.confirmRegistration = ["Sei sicuro di voler confermare la registrazione?", "Continue with the Sign Up?"];
        //messagi per utente
        this.messaggioEmailEsistente = ["Impossibile completare la registrazione, l'email inserita è già stata utilizzata.", "Can not Sign Up, the Email already exists."];
        this.messaggioNicknameEsistente = ["Impossibile completare la registrazione, il nickname inserita è già stato utilizzato.", "Can not Sign Up, the Nickname already exists."];
        this.messaggioErroreBasic = ["Impossibile completare la registrazione dati base con queste credenziali.\nContattare l'amministratore dalla pagina Contatti.", "Can not Sign Up the basic, using those credentials.\nPlease get in touch from the Contact form."];
        this.messaggioErroreInfo = ["Impossibile completare la registrazione dati info con queste credenziali.\nContattare l'amministratore dalla pagina Contatti.", "Can not Sign Up the info, using those credentials.\nPlease get in touch from the Contact form."];
        this.signupSuccess = ["La registrazione è avvenuta correttamente.", "Sign Up request was succesfull."];
        this.signupError = ["", ""];
        this.confirmReset = ["Sicuro di voler cancellare i valori inseriti?", "Do you really intend to clear the registration fields?"];
        //accesso non riuscito
        this.accessoNegato = ["Email o Password non valida.", "Email or Password are incorrect."];
        this.accedi = ["Accedi", "Login"];
        this.registrati = ["Non ti sei ancora registrato?", "Not yet Signed Up?"];
        //login fallito
        this.emailOkPassNo = ["La password inserita non corrisponde all'email selezionata.", "Password incorrect.\nThe Password does not match the email inserted."];
        this.emailNonTrovata = ["L'email inserita non è mai stata registrata.", "The email inserted is not been registered yet."];
    }
    return Testi;
}());
var InputCredenzialiLogin = /** @class */ (function () {
    function InputCredenzialiLogin(email, password) {
        this.email = email;
        this.password = password;
    }
    return InputCredenzialiLogin;
}());

var UserForDotnet = /** @class */ (function () {
    function UserForDotnet() {
        this.showPrivateName = false;
        this.name = "";
        this.surname = "";
        this.nickname = "";
        this.email = "";
        this.password = "";
    }
    return UserForDotnet;
}());



/***/ }),

/***/ "./src/app/componenets/not-found-component/not-found-component.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componenets/not-found-component/not-found-component.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL25vdC1mb3VuZC1jb21wb25lbnQvbm90LWZvdW5kLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componenets/not-found-component/not-found-component.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componenets/not-found-component/not-found-component.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found-component works!\n</p>\n"

/***/ }),

/***/ "./src/app/componenets/not-found-component/not-found-component.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componenets/not-found-component/not-found-component.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NotFoundComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponentComponent", function() { return NotFoundComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponentComponent = /** @class */ (function () {
    function NotFoundComponentComponent() {
    }
    NotFoundComponentComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-component',
            template: __webpack_require__(/*! ./not-found-component.component.html */ "./src/app/componenets/not-found-component/not-found-component.component.html"),
            styles: [__webpack_require__(/*! ./not-found-component.component.css */ "./src/app/componenets/not-found-component/not-found-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponentComponent);
    return NotFoundComponentComponent;
}());



/***/ }),

/***/ "./src/app/componenets/tecniche/tecniche.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componenets/tecniche/tecniche.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL3RlY25pY2hlL3RlY25pY2hlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componenets/tecniche/tecniche.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componenets/tecniche/tecniche.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tecniche works!\n</p>\n"

/***/ }),

/***/ "./src/app/componenets/tecniche/tecniche.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componenets/tecniche/tecniche.component.ts ***!
  \************************************************************/
/*! exports provided: TecnicheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicheComponent", function() { return TecnicheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TecnicheComponent = /** @class */ (function () {
    function TecnicheComponent() {
    }
    TecnicheComponent.prototype.ngOnInit = function () {
    };
    TecnicheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tecniche',
            template: __webpack_require__(/*! ./tecniche.component.html */ "./src/app/componenets/tecniche/tecniche.component.html"),
            styles: [__webpack_require__(/*! ./tecniche.component.css */ "./src/app/componenets/tecniche/tecniche.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TecnicheComponent);
    return TecnicheComponent;
}());



/***/ }),

/***/ "./src/app/componenets/test-csv/test-csv.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componenets/test-csv/test-csv.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXRzL3Rlc3QtY3N2L3Rlc3QtY3N2LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componenets/test-csv/test-csv.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componenets/test-csv/test-csv.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"width:500px; height:500px;\" [innerHtml]=\"svg\">\n  il testo\n</div>\n"

/***/ }),

/***/ "./src/app/componenets/test-csv/test-csv.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componenets/test-csv/test-csv.component.ts ***!
  \************************************************************/
/*! exports provided: TestCsvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCsvComponent", function() { return TestCsvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestCsvComponent = /** @class */ (function () {
    function TestCsvComponent() {
    }
    TestCsvComponent.prototype.ngOnInit = function () {
    };
    TestCsvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-csv',
            template: __webpack_require__(/*! ./test-csv.component.html */ "./src/app/componenets/test-csv/test-csv.component.html"),
            styles: [__webpack_require__(/*! ./test-csv.component.css */ "./src/app/componenets/test-csv/test-csv.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestCsvComponent);
    return TestCsvComponent;
}());



/***/ }),

/***/ "./src/app/componenets/top-menu/top-menu.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componenets/top-menu/top-menu.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".langFlag{\n    width: 35px;\n    height: 50px;\n    border-radius: 100px;\n    margin-left: 10px;\n}\n\n.langFlag:hover {\n    transform: scale(1.3);\n    -webkit-transform: scale(1.3);\n    cursor: pointer;\n}\n\n.navbar-brand:hover{\n    color: forestgreen;\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);   \n}\n\n.outborder {\n    clear: both;\n    background: forestgreen;\n    height: 3px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldHMvdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbmV0cy90b3AtbWVudS90b3AtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmdGbGFne1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxhbmdGbGFnOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVye1xuICAgIGNvbG9yOiBmb3Jlc3RncmVlbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7ICAgXG59XG5cbi5vdXRib3JkZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGJhY2tncm91bmQ6IGZvcmVzdGdyZWVuO1xuICAgIGhlaWdodDogM3B4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/componenets/top-menu/top-menu.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componenets/top-menu/top-menu.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand transition3\" routerLink=\"/\">Too Ez Fish</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/laghi\">{{txt.laghi[rtmSvc.config.lang]}}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/tecniche\">{{txt.tecniche[rtmSvc.config.lang]}}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"#\">{{txt.squadre[rtmSvc.config.lang]}}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"#\">{{txt.specieIttiche[rtmSvc.config.lang]}}</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Info\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/contattaci\">{{txt.contattaci[rtmSvc.config.lang]}}</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n\n    </ul>\n    <app-login-info-for-menu></app-login-info-for-menu>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" text=\"ciao\" type=\"search\" placeholder='{{txt.placeHolderRicerca[rtmSvc.config.lang]}}'\n        aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">{{txt.pulsanteRicerca[rtmSvc.config.lang]}}</button>\n    </form>\n    <img class=\"langFlag transition3\" (click)=\"changeLang(0)\" src=\"../../../assets/media/icons/BandieraItalianaIcon.svg\" alt=\"Bandiera Italiana, Italian Flag\">\n    <img class=\"langFlag transition3\" (click)=\"changeLang(1)\" src=\"../../../assets/media/icons/BandieraIngleseIcon.svg\" alt=\"Bandiera Britannica, UK Flag\">\n  </div>\n \n</nav>\n<div class=\"outborder\"></div>\n\n"

/***/ }),

/***/ "./src/app/componenets/top-menu/top-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componenets/top-menu/top-menu.component.ts ***!
  \************************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-runtime-config.service */ "./src/app/services/global-runtime-config.service.ts");



var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent(_globalRuntimeService) {
        this.txt = new Testi();
        this.rtmSvc = _globalRuntimeService;
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    TopMenuComponent.prototype.changeLang = function (index) {
        this.rtmSvc.setLang(index);
    };
    TopMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/app/componenets/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.css */ "./src/app/componenets/top-menu/top-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_global_runtime_config_service__WEBPACK_IMPORTED_MODULE_2__["GlobalRuntimeConfigService"]])
    ], TopMenuComponent);
    return TopMenuComponent;
}());

var Testi = /** @class */ (function () {
    function Testi() {
        this.pulsanteRicerca = ["Ricerca Laghetto", "Find Lake"];
        this.placeHolderRicerca = ["Nome Laghetto", "Pound Name"];
        this.laghi = ["Laghi", "Lakes"];
        this.tecniche = ["Tecniche", "Techniques"];
        this.squadre = ["Squadre", "Teams"];
        this.specieIttiche = ["Specie Ittiche", "Fish Species"];
        this.contattaci = ["Contattaci", "Contact Us"];
    }
    return Testi;
}());


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenets/laghi/laghi.component */ "./src/app/componenets/laghi/laghi.component.ts");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.urlGidi = "http://192.168.33.200:8080/";
        this.urlHome = "http://192.168.1.200:8080/";
        this.urlToEz = "http://192.168.33.200/";
        this.endpoint = this.urlHome + 'api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    /*********************************** test ************************************ */
    ApiService.prototype.getProducts = function () {
        return this.http.get(this.endpoint + 'products').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ApiService.prototype.getProduct = function (id) {
        return this.http.get(this.endpoint + 'products/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    ApiService.prototype.updateProduct = function (id, product) {
        var body = JSON.stringify(product);
        return this.http.put(this.endpoint + 'products/' + id, body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProduct')));
    };
    ApiService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.endpoint + 'products/' + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProduct')));
    };
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /********************************** test end ********************************** */
    ApiService.prototype.addNewPerson = function (user) {
        var body = JSON.stringify(user);
        return this.http.post(this.endpoint + 'registration', body, this.httpOptions);
    };
    ApiService.prototype.login = function (credenziali) {
        var body = JSON.stringify(credenziali);
        return this.http.post(this.endpoint + 'login', body, this.httpOptions);
    };
    /*********************************** email ************************************ */
    //Invio un email da parte di un utente dalla pagina contatti   
    ApiService.prototype.SendEmailForInfo = function (mex) {
        var emailInfoForCore = JSON.stringify(mex);
        return this.http.post(this.endpoint + 'email', emailInfoForCore, this.httpOptions);
    };
    ApiService.prototype.getLakesPreviews = function () {
        var laghi = [];
        laghi.push(new _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_5__["LakePreview"](1, [1, 1, 0, 0, 2, 2, 2], "Murett", "via giusti", "3284567854", "hdasd@sssdad.23", ["tanti pesci", "lots of fishes"]));
        laghi.push(new _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_5__["LakePreview"](2, [1, 1, 0, 0, 1, 1, 2], "Coogliate", "via wqeqw", "qeqw", "hdasd@sdadss.23", ["tanti pffsci", "lots of "]));
        laghi.push(new _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_5__["LakePreview"](3, [1, 1, 0, 0, 0, 0, 2], "Monzoro", "via asd", "328456qww7854", "hdasd@ddsdad.23", ["tanffti pesci", "lots  fishes"]));
        laghi.push(new _componenets_laghi_laghi_component__WEBPACK_IMPORTED_MODULE_5__["LakePreview"](4, [0, 0, 0, 0, 0, 2, 2], "Marcellino", "via marce", "s", "hdasd@sdaddd.23", ["tanti f", " of fishes"]));
        return laghi;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/global-runtime-config.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/global-runtime-config.service.ts ***!
  \***********************************************************/
/*! exports provided: GlobalRuntimeConfigService, GlobalRuntimeConfig, User, LoginRegisterHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalRuntimeConfigService", function() { return GlobalRuntimeConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalRuntimeConfig", function() { return GlobalRuntimeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterHandler", function() { return LoginRegisterHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalRuntimeConfigService = /** @class */ (function () {
    function GlobalRuntimeConfigService() {
        this.config = new GlobalRuntimeConfig();
    }
    GlobalRuntimeConfigService.prototype.setLang = function (langIndex) {
        if (langIndex >= 0 && langIndex < 3) {
            this.config.lang = langIndex;
        }
        else {
            //In caso di errore, setto la lingua ancora in italiano
            langIndex = 0;
        }
    };
    GlobalRuntimeConfigService.prototype.getConfig = function () {
        return this.config;
    };
    GlobalRuntimeConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalRuntimeConfigService);
    return GlobalRuntimeConfigService;
}());

var GlobalRuntimeConfig = /** @class */ (function () {
    function GlobalRuntimeConfig() {
        this.lang = 0;
        this.user = new User();
        this.login = new LoginRegisterHandler();
    }
    return GlobalRuntimeConfig;
}());

var User = /** @class */ (function () {
    function User() {
        this.basicId = -1;
        this.isLogged = false;
        this.peopleId = -1;
        this.name = "";
        this.surname = "";
        this.nickname = "";
        this.showPrivateName = false;
        this.photo = "";
        this.email = "";
        this.password = "";
    }
    Object.defineProperty(User.prototype, "fullname", {
        get: function () {
            return (this.showPrivateName) ? this.name + " " + this.surname + " | " + this.nickname : this.nickname;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());

var LoginRegisterHandler = /** @class */ (function () {
    function LoginRegisterHandler() {
        this.showLoginForm = false;
        this.showRegisterForm = false;
    }
    return LoginRegisterHandler;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/luca/Documents/ezfish/ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map