(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-quotes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\"> <!-- bar colour blue -->\n    <ion-title>Quotes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n<ion-item button detail lines=\"inset\" *ngFor=\"let quote of quotes | async\" (click)=\"openDetails(quote)\">\n        {{ quote.quote }}\n        </ion-item>\n </ion-list>\n\n<!-- https://ionicframework.com/docs/v3/api/components/infinite-scroll/InfiniteScroll/ -->\n<!-- <ion-list></ion-list> -->\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n<ion-infinite-scroll-content\nloadingSpinner=\"bubbles\"\nloadingText=\"Loading more data...\">\n</ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/quotes/quotes-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/quotes/quotes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageRoutingModule", function() { return QuotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");




const routes = [
    {
        path: '',
        component: _quotes_page__WEBPACK_IMPORTED_MODULE_3__["QuotesPage"]
    }
];
let QuotesPageRoutingModule = class QuotesPageRoutingModule {
};
QuotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuotesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.module.ts ***!
  \***********************************************/
/*! exports provided: QuotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function() { return QuotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-routing.module */ "./src/app/pages/quotes/quotes-routing.module.ts");
/* harmony import */ var _quotes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes.page */ "./src/app/pages/quotes/quotes.page.ts");







let QuotesPageModule = class QuotesPageModule {
};
QuotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quotes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesPageRoutingModule"]
        ],
        declarations: [_quotes_page__WEBPACK_IMPORTED_MODULE_6__["QuotesPage"]]
    })
], QuotesPageModule);



/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3Rlcy9xdW90ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/quotes/quotes.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/quotes/quotes.page.ts ***!
  \*********************************************/
/*! exports provided: QuotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPage", function() { return QuotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



//import { ApiService } from '../../services/api.service';

let QuotesPage = class QuotesPage {
    // constructor(private router: Router, private api: ApiService) { }
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        //   this.episodes = this.api.getEpisodes();
        this.quotes = this.http.get('https://breakingbadapi.com/api/quotes');
        this.quotes.subscribe(data => {
            console.log('my quotes: ', data);
        });
    }
    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }
};
QuotesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
QuotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes/quotes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotes.page.scss */ "./src/app/pages/quotes/quotes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], QuotesPage);



/***/ })

}]);
//# sourceMappingURL=quotes-quotes-module-es2015.js.map