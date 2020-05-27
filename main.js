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

/***/ "./src/app/allrecords/allrecords.component.css":
/*!*****************************************************!*\
  !*** ./src/app/allrecords/allrecords.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbHJlY29yZHMvYWxscmVjb3Jkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/allrecords/allrecords.component.html":
/*!******************************************************!*\
  !*** ./src/app/allrecords/allrecords.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!showMePartially\">\n  <p>yeet</p>\n  <p>yeet</p>\n  <p>yeet</p>\n  <p>yeet</p>\n  <p>yeet</p>\n  <p>yeet</p>\n\n\n\n\n\n</div> \n"

/***/ }),

/***/ "./src/app/allrecords/allrecords.component.ts":
/*!****************************************************!*\
  !*** ./src/app/allrecords/allrecords.component.ts ***!
  \****************************************************/
/*! exports provided: AllrecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllrecordsComponent", function() { return AllrecordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AllrecordsComponent = /** @class */ (function () {
    function AllrecordsComponent() {
        //Create a object for storing filter data and bind to html table.
        this.ProductDetails = [];
        // This data can be ignored for this component
        this.ProductHeader = [{ name: 'Alepo Twp' }, { name: 'Aspinwall Borough' }, { name: 'Avalon Borough' }, { name: 'Baldwin' },
            { name: 'Baldwin Twp' }, { name: 'Bell Acres Borough' }, { name: 'Bellevue Borough' }, { name: 'Ben Avon' },
            { name: 'Ben Avon Heights' }, { name: 'Bethel Park Borough' }, { name: 'Blawnox' }, { name: 'Brackenridge' },
            { name: 'Braddock Borough' }, { name: 'Braddock Hills' }, { name: 'Bradford Woods' }, { name: 'Brentwood Borough' },
            { name: 'Bridgeville' }, { name: 'Carnegie' }, { name: 'Castle Shannon' }, { name: 'Chalfant' }, { name: 'Cheswick' },
            { name: 'Churchill' }, { name: 'City of Duquesne' }, { name: 'City of McKeesport' }, { name: 'City of Pittsburgh' },
            { name: 'Clairton' }, { name: 'Collier Twp' }, { name: 'Coraopolis' }, { name: 'Crafton Borough' }, { name: 'Crescent' },
            { name: 'Dormont Borough' }, { name: 'Dravosburg' }, { name: 'East Deer Twp' }, { name: 'East Pittsburgh' }, { name: 'Edgewood' },
            { name: 'Edgeworth Borough' }, { name: 'Elizabeth' }, { name: 'Elizabeth Twp' }, { name: 'Emsworth Borough' },
            { name: 'Etna' }, { name: 'Fawn Twp' }, { name: 'Findlay Twp' }, { name: 'Forest Hills Borough' }, { name: 'Forward Twp' }, { name: 'Fox Chapel Borough' },
            { name: 'Frazer Twp' }, { name: 'Glassport' }, { name: 'Glenfield' }, { name: 'Greentree Borough' }, { name: 'Hampton Twp' },
            { name: 'Harmar Twp' }, { name: 'Harrison Twp' }, { name: 'Haysville' }, { name: 'Heidelberg' }, { name: 'Homestead Borough' },
            { name: 'Imperial Twp' }, { name: 'Indiana Twp' }, { name: 'Ingram' }, { name: 'Jefferson' }, { name: 'Kennedy Twp' },
            { name: 'Kilbuck Twp' }, { name: 'Leet Twp' }, { name: 'Leetsdale' }, { name: 'Liberty' }, { name: 'Lincoln' }, { name: 'Marshall Twp' },
            { name: 'McCandless Twp' }, { name: 'McDonald' }, { name: 'McKees Rocks' }, { name: 'Millvale' }, { name: 'Monroeville Borough' },
            { name: 'Moon Twp' }, { name: 'Mount Oliver' }, { name: 'Mt. Lebanon Twp' }, { name: 'Munhall Borough' }, { name: 'Neville Twp' },
            { name: 'North Braddock Borough' }, { name: 'North Fayette' }, { name: 'North Fayette Twp' }, { name: 'North Versailles' },
            { name: 'Oakdale' }, { name: 'Oakmont Borough' }, { name: "O'Hara Twp" }, { name: 'Ohio Twp' }, { name: 'Osborne' },
            { name: 'Penn Hills Twp' }, { name: 'Pennsbury' }, { name: 'Pine Twp' }, { name: 'Pitcarin Borough' }, { name: 'Pleasant Hills Borough' },
            { name: 'Plum' }, { name: 'Port Vue Borough' }, { name: 'Rankin' }, { name: 'Reserve Twp' }, { name: 'Richland Twp' }, { name: 'Robinson Twp' },
            { name: 'Ross Twp' }, { name: 'Rosslyn Farms' }, { name: 'Scott' }, { name: 'Sewickley Borough' }, { name: 'Sewickley Heights Borough' },
            { name: 'Sewickley Hills' }, { name: 'Shaler Twp' }, { name: 'Sharpsburg' }, { name: 'South Fayette' }, { name: 'South Park Twp' },
            { name: 'South Versailles' }, { name: 'Springdale' }, { name: 'Springdale Twp' }, { name: 'Stowe Twp' }, { name: 'Swissvale' },
            { name: 'Tarentum' }, { name: 'Thornburg' }, { name: 'Trafford' }, { name: 'Turtle Creek' }, { name: 'Upper St. Clair Twp' },
            { name: 'Verona' }, { name: 'Versailles' }, { name: 'Wall' }, { name: 'West Deer Twp' }, { name: 'West Elizabeth Twp' },
            { name: 'West Elizabeth Twp' }, { name: 'West Homestead' }, { name: 'West Mifflin Borough' }, { name: 'West View' },
            { name: 'Whitaker' }, { name: 'White Oak' }, { name: 'Whitehall' }, { name: 'Wilkins Twp' }, { name: 'Wilkinsburg Borough' },
            { name: 'Wilmerding Borough' }];
        // This data is what populates the tables for the print all feature as part of the allrecords component
        this.Products = [
            { Name: 'Alepo Twp', AttyAlepo: 'Harlan S. Stone, Esq.', AttyAlepoSD: 'John T. Vogel, Esq.',
                AffilAlepo: 'Municipality', AffilAlepoSD: 'School District (Quaker Valley)', PhoneAlepo: '412-392-5295', PhoneAlepoSD: '412-594-5622',
                FaxAlepo: '412-392-5367', FaxAlepoSD: '412-594-5619', AddAlepo: '2 PPG Place Ste 400, Pittsburgh, PA 15222', AddAlepoSD: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Aspinwall Borough', Atty1: 'Stephen L. Korbel, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: '412-394-5627', Phone2: '412-781-7900',
                Fax: '412-586-1042', Fax2: '412-781-7901', Add: '603 Stanwix Street, 6th Floor, Pittsburgh, PA 15222', Add2: '221 Commercial Avenue, Suite 220, Pittsburgh, PA 15215' },
            { Name: 'Avalon Borough', Atty1: 'Megan M. Turnbull, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Northgate)', Phone: '412-391-9890', Phone2: '412-243-9700',
                Fax: '412-391-9685', Fax2: '412-243-9660', Add: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Ste 506, Pittsburgh, PA 15221' },
            { Name: 'Baldwin', Atty1: 'Stanley Lederman, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Baldwin-Whitehall)', Phone: '412-261-5400', Phone2: '412-391-9890',
                Fax: '412-281-0313', Fax2: '412-392-9685', Add: '428 Forbes Ave, Ste 302, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Baldwin Twp', Atty1: 'Romel L. Nicholas, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Baldwin-Whitehall)', Phone: '412-391-6920', Phone2: '412-391-9890',
                Fax: '412-391-1189', Fax2: '412-391-9685', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Bell Acres Borough', Atty1: 'John P. Dohanich, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsd', Add2: 'sdfasd' },
            { Name: 'Bellevue Borough', Atty1: 'Thomas P. McDermott, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Northgate)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Ben Avon', Atty1: 'Anne Sweeney, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Ben Avon Heights', Atty1: 'John T. Vogel, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Bethel Park Borough', Atty1: 'John T. Vogel, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Bethel Park)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Blawnox', Atty1: 'John F. Cambest, Esq.', Atty2: 'Paul Guiffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Brackenridge', Atty1: 'David P. Hivzdos, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highland)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Braddock Borough', Atty1: 'Falco Muscante, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Braddock Hills', Atty1: 'Samuel P. Kamin, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Bradford Woods', Atty1: 'Kate M. Diersen, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Brentwood Borough', Atty1: 'Gavin A. Robb, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Brentwood)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Bridgeville', Atty1: 'Thomas P. McDermott, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Chartiers Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Carnegie', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Carlynton)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Castle Shannon', Atty1: 'Dennis Biondo, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Keystone Oaks)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Chalfant', Atty1: 'G N Evashavik, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Cheswick', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Allegheny Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Churchill', Atty1: 'Gavin A. Robb, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'City of Duquesne', Atty1: 'John H. Rushford, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Duquesne City)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'City of McKeesport', Atty1: 'Jason Elash, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'City of Pittsburgh', Atty1: 'Adam Rosenthal, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (City of Pittsburgh)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Clairton', Atty1: 'J. Deron Gabriel, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highland)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Collier Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Chartiers Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Coraopolis', Atty1: 'Richard F. Start, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Cornell)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Crafton Borough', Atty1: 'James Gladys, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Carlynton)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Crescent', Atty1: 'Richard F. Start, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Moon Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Dormont Borough', Atty1: 'John H. Rushford, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highland)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Dravosburg', Atty1: 'George S. Gobel, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'East Deer Twp', Atty1: 'Craig H. Alexander, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Deer Lakes)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'East McKeesport', Atty1: 'Daniel P. Beisler, Esq.', Atty2: 'Daniel P. Beisler, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (East Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'East Pittsburgh', Atty1: 'G N Evashavik, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Edgewood', Atty1: 'W. Timothy Barry, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Edgeworth Borough', Atty1: 'Philip J. Weis, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Elizabeth', Atty1: 'Matthew D. Racunas, Esq.', Atty2: 'Jennifer L. Cerce, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Elizabeth-Forward)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Elizabeth Twp', Atty1: 'Matthew D. Racunas, Esq.', Atty2: 'Jennifer L. Cerce, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Elizabeth-Forward)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Emsworth Borough', Atty1: 'John J. Edson, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Etna', Atty1: 'Ronald H. Heck, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Shaler)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Fawn Twp', Atty1: 'Stephen Yakopec Jr., Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highlands)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Findlay Twp', Atty1: 'EJ Strassburger, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Forest Hills Borough', Atty1: 'Stephen L. Korbel, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Elizabeth-Forward)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Forward Twp', Atty1: 'Matthew D. Racunas, Esq.', Atty2: 'Jennifer L. Cerce, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Elizabeth-Forward)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Fox Chapel Borough', Atty1: 'A. Bruce Bowden, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Franklin Park', Atty1: 'Robert Max Junker, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Frazer Twp', Atty1: 'Timothy J. Bish, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Deer Lakes)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Glassport', Atty1: 'John F. Cambest, Esq.', Atty2: 'George S. Gobel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Glenfield', Atty1: 'Michael D. Seymour, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Greentree Borough', Atty1: 'Peter Molinaro Jr., Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Keystone Oaks)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Hampton Twp', Atty1: 'Joseph G. Lucas, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Hampton)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Harmar Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Allegheny Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Harrison Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highlands)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Haysville', Atty1: 'Edward G. Brandens, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Heidelberg', Atty1: 'PJ Murray, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Chartiers Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Homestead Borough', Atty1: 'Bernard M. Schneider, Esq.', Atty2: 'Donald C. Fetzko, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Steel Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Imperial Twp', Atty1: 'EJ Strassburger, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Indiana Twp', Atty1: 'Irving S. Firman, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Ingram', Atty1: 'Samuel P. Kamin, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Jefferson', Atty1: 'William F. Shimko, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Jefferson Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Kennedy Twp', Atty1: 'Joseph M. Kulik, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Kilbuck Twp', Atty1: 'Richard F. Start, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Leet Twp', Atty1: 'Richard F. Start, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Leetsdale', Atty1: 'James D. Amato, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Liberty', Atty1: 'Jason Elash, Esq.', Atty2: 'George S. Gobel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Lincoln', Atty1: 'Falco Muscante, Esq.', Atty2: 'George S. Gobel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Marshall Twp', Atty1: 'Blaine Lucas, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'McCandless Twp', Atty1: 'William C. Ries, Esq.', Atty2: 'ALfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'McDonald', Atty1: 'John P. Smider, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fort Cherry)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'McKees Rocks', Atty1: 'Megan M. Turnbull, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Sto-Rox)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Millvale', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Shaler Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Monroeville Borough', Atty1: 'Robert J. Wrathcer, Esq.', Atty2: 'Bruce E. Dice, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Gateway)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Moon Twp', Atty1: 'Timothy J. Bish, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Moon Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Mount Oliver', Atty1: 'Kate M. Diersen, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Pittsburgh Schools)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Mt. Lebanon Twp', Atty1: 'Philip J. Weis, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Mt. Lebanon)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Munhall Borough', Atty1: 'G N Evashavik, Esq.', Atty2: 'Donald C. Fetzko, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Steel Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Neville Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Cornell)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'North Braddock Borough', Atty1: 'John A. Bacharach, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'North Fayette', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'North Fayette Twp', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'North Versailles', Atty1: 'G N Evashavik, Esq.', Atty2: 'Daniel P. Beisler, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (East Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Oakdale', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Oakmont Borough', Atty1: 'Kate M. Diersen, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Riverview)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: "O'Hara Twp", Atty1: 'Philip J. Weis, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Ohio Twp', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Osborne', Atty1: 'Harlan S. Stone, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Penn Hills Twp', Atty1: 'Bruce E. Dice, Esq.', Atty2: 'Bruce E. Dice, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Penn Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Pennsbury', Atty1: 'Samuel P. Kamin, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Pine Twp', Atty1: 'Gary J. Gushard, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Pine-Richland)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Pitcarin Borough', Atty1: 'Bruce E. Dice, Esq.', Atty2: 'Bruce E. Dice, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Gateway)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Pleasant Hills Borough', Atty1: 'Fred C. Jug Jr., Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Jefferson Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Plum', Atty1: 'Bruce E. Dice, Esq.', Atty2: 'Bruce E. Dice, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Plum)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Port Vue Borough', Atty1: 'Patricia L. McGrail, Esq.', Atty2: 'George S. Gobel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Rankin', Atty1: 'Charles J. Porter, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Reserve Twp', Atty1: 'Harlan S. Stone, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Shaler Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Richland Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Pine-Richland)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Robinson Twp', Atty1: 'John F. Cambest, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Ross Twp', Atty1: 'PJ Murray, Esq.', Atty2: 'Michael J. Witherel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Rosslyn Farms', Atty1: 'Peter Molinaro Jr., Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Carlynton)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Scott', Atty1: 'John T. Vogel, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Chartiers Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Sewickley Borough', Atty1: 'Richard B. Tucker, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Sewickley Heights Borough', Atty1: 'Laura Stone, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Sewickley Hills', Atty1: 'Arthur J. Leonard, Esq.', Atty2: 'Patrick Clair, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Shaler Twp', Atty1: 'Harlan S. Stone, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Shaler Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Sharpsburg', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'South Fayette', Atty1: 'Samuel P. Kamin, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Fayette)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'South Park Twp', Atty1: 'Irving S. Firman, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Park)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'South Versailles', Atty1: 'Township of South Versailles', Atty2: 'Gary J. Matta',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Springdale', Atty1: 'Craig H. Alexander, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Allegheny Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Springdale Twp', Atty1: 'Stephen Yakopec Jr., Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Allegheny Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Stowe Twp', Atty1: 'John F. Cambest, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Sto-Rox)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Swissvale', Atty1: 'Robert McTiernan, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Tarentum', Atty1: 'Charles T. Clark, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highlands)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Thornburg', Atty1: 'Charles M. Means, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Trafford', Atty1: 'Craig H. Alexander, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Penn-Trafford)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Turtle Creek', Atty1: 'G N Evashavik, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Upper St. Clair Twp', Atty1: 'Irving S. Firman, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Upper St. Clair)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Verona', Atty1: 'Bruce E. Dice, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Riverview)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Versailles', Atty1: 'Krisha Dimascio, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Wall', Atty1: 'Ronald Lawry, Esq.', Atty2: 'Daniel P. Beisler, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (East Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'West Deer Twp', Atty1: 'Michael Yukevich, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Deer Lakes)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'West Elizabeth Twp', Atty1: 'Patricia L. McGrail, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Jefferson Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'West Homestead', Atty1: 'Stanley Lederman, Esq.', Atty2: 'Donald C. Fetzko, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Steel Valley)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'West Mifflin Borough', Atty1: 'G N Evashavik, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Mifflin)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'West View', Atty1: 'Fred E. Baxter, Esq.', Atty2: 'Michael J. Witherel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Whitaker', Atty1: 'George M. Janocsko, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Mifflin)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'White Oak', Atty1: 'Krisha Dimascio, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Whitehall', Atty1: 'Irving S. Firman, Esq.', Atty2: 'Ira Weiss, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Baldwin-Whitehall)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Wilkins Twp', Atty1: 'John H. Rushford, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Wilkinsburg Borough', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Wilkinsburg)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
            { Name: 'Wilmerding Borough', Atty1: 'G N Evashavik, Esq.', Atty2: 'Daniel P. Beisler, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (East Allegheny)', Phone: 'xxx-xxx-xxxx', Phone2: 'xxx-xxx-xxxx',
                Fax: 'xxx-xxx-xxxx', Fax2: 'xxx-xxx-xxxx', Add: 'dsfsdf', Add2: 'sdfasd' },
        ];
        this.getProducts();
    }
    AllrecordsComponent.prototype.getProducts = function () {
        console.log("getProducts");
        return this.ProductHeader;
    };
    AllrecordsComponent.prototype.SearchProduct = function (name) {
        var obj = this.Products.filter(function (m) { return m.Name == name; });
        this.ProductDetails = obj;
        return this.ProductDetails;
    };
    AllrecordsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AllrecordsComponent.prototype, "showMePartially", void 0);
    AllrecordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allrecords',
            template: __webpack_require__(/*! ./allrecords.component.html */ "./src/app/allrecords/allrecords.component.html"),
            styles: [__webpack_require__(/*! ./allrecords.component.css */ "./src/app/allrecords/allrecords.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AllrecordsComponent);
    return AllrecordsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<app-dropdown></app-dropdown>\r\n"

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
        this.title = 'Muni';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/dropdown/dropdown.component.ts");
/* harmony import */ var _allrecords_allrecords_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allrecords/allrecords.component */ "./src/app/allrecords/allrecords.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"],
                _allrecords_allrecords_component__WEBPACK_IMPORTED_MODULE_7__["AllrecordsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dropdown/dropdown.component.css":
/*!*************************************************!*\
  !*** ./src/app/dropdown/dropdown.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Header{\r\n    background-color: black;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n#Selection{\r\n    background-color: lightslategray;\r\n}\r\n\r\n#Dropdown{\r\n    text-align: center;\r\n    \r\n}\r\n\r\nh3{\r\n    text-align: center;\r\n}\r\n\r\n#printbtn{\r\n    text-align: center;\r\n}\r\n\r\n/* Icon pulse */\r\n\r\n.fa-pulse {\r\n\tdisplay: inline-block;\r\n\t-webkit-animation: pulse 2s infinite linear;\r\n\tanimation: pulse 2s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n\t0% { opacity: 1; }\r\n\t50% { opacity: 0; }\r\n\t100% { opacity: 1; }\r\n}\r\n\r\n@keyframes pulse {\r\n\t0% { opacity: 1; }\r\n\t50% { opacity: 0; }\r\n\t100% { opacity: 1; }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxlQUFlOztBQUNmO0NBQ0MscUJBQXFCO0NBR3JCLDJDQUEyQztDQUMzQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxLQUFLLFVBQVUsRUFBRTtDQUNqQixNQUFNLFVBQVUsRUFBRTtDQUNsQixPQUFPLFVBQVUsRUFBRTtBQUNwQjs7QUFnQkE7Q0FDQyxLQUFLLFVBQVUsRUFBRTtDQUNqQixNQUFNLFVBQVUsRUFBRTtDQUNsQixPQUFPLFVBQVUsRUFBRTtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuI1NlbGVjdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4jRHJvcGRvd257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNwcmludGJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogSWNvbiBwdWxzZSAqL1xyXG4uZmEtcHVsc2Uge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHQtbW96LWFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGUgbGluZWFyO1xyXG5cdC1vLWFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGUgbGluZWFyO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZSBsaW5lYXI7XHJcblx0YW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XHJcblx0MCUgeyBvcGFjaXR5OiAxOyB9XHJcblx0NTAlIHsgb3BhY2l0eTogMDsgfVxyXG5cdDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHB1bHNlIHtcclxuXHQwJSB7IG9wYWNpdHk6IDE7IH1cclxuXHQ1MCUgeyBvcGFjaXR5OiAwOyB9XHJcblx0MTAwJSB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHB1bHNlIHtcclxuXHQwJSB7IG9wYWNpdHk6IDE7IH1cclxuXHQ1MCUgeyBvcGFjaXR5OiAwOyB9XHJcblx0MTAwJSB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5ALW1zLWtleWZyYW1lcyBwdWxzZSB7XHJcblx0MCUgeyBvcGFjaXR5OiAxOyB9XHJcblx0NTAlIHsgb3BhY2l0eTogMDsgfVxyXG5cdDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcblx0MCUgeyBvcGFjaXR5OiAxOyB9XHJcblx0NTAlIHsgb3BhY2l0eTogMDsgfVxyXG5cdDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dropdown/dropdown.component.html":
/*!**************************************************!*\
  !*** ./src/app/dropdown/dropdown.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark navbar-dark\">\n    <h3 style=\"color: palegreen !important;\">BOV Solicitor Info App</h3>\n    <button class=\"navbar-toggler btn btn-success\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <i class=\"fa fa-exclamation fa-pulse\" style=\"color: palegreen;\"></i>&nbsp;\n    <span style=\"color: palegreen !important;\">Helpful Links</span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"http://www2.county.allegheny.pa.us/RealEstate/Search.aspx?SearchType=3&CurrRow=0&SearchName=&SearchStreet=&SearchNum=&SearchMuni=&SearchParcel=0024p00202&pin=0024P00202000000\" target=\"_blank\">Real Estate Parcel Search</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://dcr.alleghenycounty.us/Civil/LoginSearch.aspx\" target=\"_blank\">Court Records</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://iasworld.alleghenycounty.us/iasworld/Main/Login.aspx\" target=\"_blank\">Production Sheet</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"https://www.padisciplinaryboard.org/\" target=\"_blank\">PA Disciplinary Board</a>    \n      </ul>\n    </div>  \n  </nav>\n\n<h3 class=\"hidden-print\">Select a Municipality from the drop down box to display the information.</h3>\n<hr>\n<div id=\"Dropdown\" class=\"hidden-print\"> \n    <!-- this is the data binding to the drop down selection--> \n  Select Municipality:  \n  <select  [(ngModel)]=\"ProductHeader.name\" (ngModelChange)=\"SearchProduct(ProductHeader.name)\">  \n    <option *ngFor=\"let prod of ProductHeader\">{{prod.name}}</option>\n      \n</select> \n   <br>\n   <br>\n   <!--\n       Code for future feature\n    \n    \n<h3 style=\"color: red;\">If you wish to view all records, click the button instead of making a selection in the drop down box.</h3>\n   <div class=\"allrecords\">\n    <button class=\"btn btn-primary\"  (click)=\"toggleChild()\">Click to display all records</button>\n    <div>\n        <app-allrecords [showMePartially]=\"showVar\"></app-allrecords>\n    </div>\n</div>\n\n-->\n\n\n\n\n\n  \n</div> \n\n<!-- once a choice is made from the drop down box, this section will appear on screen-->   \n<div *ngIf=\"ProductHeader.name\"> \n\n  <h1 *ngIf=\"ProductHeader.name == 'City of Pittsburgh' \" style=\"color:red\">Don't forget to add Claude C. Council Jr., Esq. to your cases if you are scheduling!</h1>\n     \n<h4>{{ProductHeader.name}} Details:</h4>  \n<div>\n<table class=\"table  table-dark table-hover table-bordered table-responsive-lg\">  \n    <tr >   \n        <th>Attorney:</th> <th>Solicitor For:</th>  <th>Phone:</th> <th>Fax:</th>   <th>Address:</th>\n    </tr>  \n    \n     <tr  *ngFor=\"let Prod of ProductDetails\">  \n        <td>{{Prod.Atty1}}</td>  \n        <td>{{Prod.Affil1}}</td>  \n        <td>{{Prod.Phone}}</td>  \n        <td>{{Prod.Fax}}</td>  \n        <td>{{Prod.Add}}</td>\n    </tr>  \n  <tr  *ngFor=\"let Prod of ProductDetails\">  \n     <td>{{Prod.Atty2}}</td>  \n     <td>{{Prod.Affil2}}</td>  \n     <td>{{Prod.Phone2}}</td>  \n     <td>{{Prod.Fax2}}</td>  \n     <td>{{Prod.Add2}}</td>\n </tr>\n\n <tr *ngIf=\"ProductHeader.name == 'Bethel Park Borough' \">\n  <td>Raymond F. Sekula, Esq.</td>\n  <td>Bethel Park School District (Residential Property Only)</td>\n  <td>412-897-8978</td>\n  <td>724-339-3414</td>\n  <td>1725 Fifth Avenue, Arnold, PA 15058</td>\n</tr>\n <!--this row of data is static and not taken from the array of objects-->\n <tr>\n     <td>Lee Dellecker, Esq.</td>\n     <td>Allegheny County</td>\n     <td>412-350-1120</td>\n     <td>412-350-1174</td>\n     <td>300 Fort Pitt Commons, 445 Fort Pitt Blvd, Pittsburgh, PA 15219</td>\n </tr>\n      \n \n</table>\n<br>\n<div id=\"printbtn\" class=\"hidden-print\">\n<button  (click)=\"Print()\" class=\"btn btn-primary\">Print This Page</button>\n</div>\n<br>\n\n\n<h3 class=\"hidden-print\">Please report any errors or outdated information <a href=\"mailto:joebarrett29@gmail.com?subject=Report&body=The following information needs changed:\">here</a>.</h3>  \n</div> \n</div>\n\n<!--\n<footer class=\"hidden-print\">\n        <h3 style=\"color: palegreen !important;\">Helpful Links</h3>\n        <p><a id=\"helplink\" href=\"http://www2.county.allegheny.pa.us/RealEstate/Search.aspx?SearchType=3&CurrRow=0&SearchName=&SearchStreet=&SearchNum=&SearchMuni=&SearchParcel=0024p00202&pin=0024P00202000000\" target=\"_blank\">Real Estate Parcel Search</a> </p>\n        <p><a id=\"helplink\" href=\"https://dcr.alleghenycounty.us/Civil/LoginSearch.aspx\" target=\"_blank\">Court Records</a></p>\n        <p><a id=\"helplink\" href=\"https://iasworld.alleghenycounty.us/iasworld/Main/Login.aspx\" target=\"_blank\">Production Sheet</a></p>\n        <p><a id=\"helplink\" href=\"https://www.padisciplinaryboard.org/\" target=\"_blank\">PA Disciplinary Board</a></p>\n      </footer>\n\n-->\n\n"

/***/ }),

/***/ "./src/app/dropdown/dropdown.component.ts":
/*!************************************************!*\
  !*** ./src/app/dropdown/dropdown.component.ts ***!
  \************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownComponent = /** @class */ (function () {
    //fetches products on load for hooking
    function DropdownComponent() {
        // boolean for child toggle component
        this.showVar = true;
        //creates and array of objects to store the drop down data
        this.ProductDetails = [];
        //this object array holds the values for the dropdown box.
        this.ProductHeader = [{ name: '' }, { name: 'Aleppo Twp' }, { name: 'Aspinwall Borough' }, { name: 'Avalon Borough' }, { name: 'Baldwin' },
            { name: 'Baldwin Twp' }, { name: 'Bell Acres Borough' }, { name: 'Bellevue Borough' }, { name: 'Ben Avon' },
            { name: 'Ben Avon Heights' }, { name: 'Bethel Park Borough' }, { name: 'Blawnox' }, { name: 'Brackenridge' },
            { name: 'Braddock Borough' }, { name: 'Braddock Hills' }, { name: 'Bradford Woods' }, { name: 'Brentwood Borough' },
            { name: 'Bridgeville' }, { name: 'Carnegie' }, { name: 'Castle Shannon' }, { name: 'Chalfant' }, { name: 'Cheswick' },
            { name: 'Churchill' }, { name: 'City of Duquesne' }, { name: 'City of McKeesport' }, { name: 'City of Pittsburgh' },
            { name: 'Clairton' }, { name: 'Collier Twp' }, { name: 'Coraopolis' }, { name: 'Crafton Borough' }, { name: 'Crescent' },
            { name: 'Dormont Borough' }, { name: 'Dravosburg' }, { name: 'East Deer Twp' }, { name: 'East McKeesport' }, { name: 'East Pittsburgh' }, { name: 'Edgewood' },
            { name: 'Edgeworth Borough' }, { name: 'Elizabeth' }, { name: 'Elizabeth Twp' }, { name: 'Emsworth Borough' },
            { name: 'Etna' }, { name: 'Fawn Twp' }, { name: 'Findlay Twp' }, { name: 'Forest Hills Borough' }, { name: 'Forward Twp' }, { name: 'Fox Chapel Borough' }, { name: 'Franklin Park' },
            { name: 'Frazer Twp' }, { name: 'Glassport' }, { name: 'Glenfield' }, { name: 'Greentree Borough' }, { name: 'Hampton Twp' },
            { name: 'Harmar Twp' }, { name: 'Harrison Twp' }, { name: 'Haysville' }, { name: 'Heidelberg' }, { name: 'Homestead Borough' },
            { name: 'Imperial Twp' }, { name: 'Indiana Twp' }, { name: 'Ingram' }, { name: 'Jefferson' }, { name: 'Kennedy Twp' },
            { name: 'Kilbuck Twp' }, { name: 'Leet Twp' }, { name: 'Leetsdale' }, { name: 'Liberty' }, { name: 'Lincoln' }, { name: 'Marshall Twp' },
            { name: 'McCandless Twp' }, { name: 'McDonald' }, { name: 'McKees Rocks' }, { name: 'Millvale' }, { name: 'Monroeville Borough' },
            { name: 'Moon Twp' }, { name: 'Mount Oliver' }, { name: 'Mt. Lebanon Twp' }, { name: 'Munhall Borough' }, { name: 'Neville Twp' },
            { name: 'North Braddock Borough' }, { name: 'North Fayette' }, { name: 'North Fayette Twp' }, { name: 'North Versailles' },
            { name: 'Oakdale' }, { name: 'Oakmont Borough' }, { name: "O'Hara Twp" }, { name: 'Ohio Twp' }, { name: 'Osborne' },
            { name: 'Penn Hills Twp' }, { name: 'Pennsbury' }, { name: 'Pine Twp' }, { name: 'Pitcarin Borough' }, { name: 'Pleasant Hills Borough' },
            { name: 'Plum' }, { name: 'Port Vue Borough' }, { name: 'Rankin' }, { name: 'Reserve Twp' }, { name: 'Richland Twp' }, { name: 'Robinson Twp' },
            { name: 'Ross Twp' }, { name: 'Rosslyn Farms' }, { name: 'Scott' }, { name: 'Sewickley Borough' }, { name: 'Sewickley Heights Borough' },
            { name: 'Sewickley Hills' }, { name: 'Shaler Twp' }, { name: 'Sharpsburg' }, { name: 'South Fayette' }, { name: 'South Park Twp' },
            { name: 'South Versailles' }, { name: 'Springdale' }, { name: 'Springdale Twp' }, { name: 'Stowe Twp' }, { name: 'Swissvale' },
            { name: 'Tarentum' }, { name: 'Thornburg' }, { name: 'Trafford' }, { name: 'Turtle Creek' }, { name: 'Upper St. Clair Twp' },
            { name: 'Verona' }, { name: 'Versailles' }, { name: 'Wall' }, { name: 'West Deer Twp' }, { name: 'West Elizabeth Twp' },
            { name: 'West Homestead' }, { name: 'West Mifflin Borough' }, { name: 'West View' },
            { name: 'Whitaker' }, { name: 'White Oak' }, { name: 'Whitehall' }, { name: 'Wilkins Twp' }, { name: 'Wilkinsburg Borough' },
            { name: 'Wilmerding Borough' }];
        // this is the product details object array used to populate the table in the html component
        this.Products = [
            { Name: 'Aleppo Twp', Atty1: 'Harlan S. Stone, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-392-5295', Phone2: '412-281-2400',
                Fax: '412-392-5367', Fax2: '412-594-5619', Add: '2 PPG Place Ste 400, Pittsburgh, PA 15222', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Aspinwall Borough', Atty1: 'Stephen L. Korbel, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: '412-394-5627', Phone2: '412-781-7900',
                Fax: '412-586-1042', Fax2: '412-781-7901', Add: '603 Stanwix Street, 6th Floor, Pittsburgh, PA 15222', Add2: '221 Commercial Avenue, Suite 220, Pittsburgh, PA 15215' },
            { Name: 'Avalon Borough', Atty1: 'Megan M. Turnbull, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Northgate)', Phone: '412-391-9890', Phone2: '412-243-9700',
                Fax: '412-391-9685', Fax2: '412-243-9660', Add: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Ste 506, Pittsburgh, PA 15221' },
            { Name: 'Baldwin', Atty1: 'Stanley Lederman, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Baldwin-Whitehall)', Phone: '412-261-5400', Phone2: '412-391-9890',
                Fax: '412-281-0313', Fax2: '412-392-9685', Add: '428 Forbes Ave, Ste 302, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Baldwin Twp', Atty1: 'Romel L. Nicholas, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Baldwin-Whitehall)', Phone: '412-391-6920', Phone2: '412-391-9890',
                Fax: '412-391-1189', Fax2: '412-391-9685', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Bell Acres Borough', Atty1: 'Robert Max Junker, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-394-5400', Phone2: '412-281-2400',
                Fax: '412-394-6576', Fax2: '412-935-4123', Add: '810 3rd Street, Beaver, PA 15009', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Bellevue Borough', Atty1: 'Thomas P. McDermott, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Northgate)', Phone: '412-391-6920', Phone2: '412-243-9700',
                Fax: '412-391-1189', Fax2: '412-243-9660', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Ben Avon', Atty1: 'Anne Sweeney, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: '412-366-3533', Phone2: '412-243-9700',
                Fax: '412-366-3334', Fax2: '412-243-9660', Add: '1004 McKnight Park Drive, Pittsburgh, PA 15237', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Ben Avon Heights', Atty1: 'John T. Vogel, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: '412-594-5622', Phone2: '412-243-9700',
                Fax: '412-594-5619', Fax2: '412-243-9660', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Bethel Park Borough', Atty1: 'John T. Vogel, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Bethel Park) (Commercial Property Only)', Phone: '412-594-5622', Phone2: '412-391-9890',
                Fax: '412-594-5619', Fax2: '412-391-9685', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '445 Fort Pitt Blvd, Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Blawnox', Atty1: 'John F. Cambest, Esq.', Atty2: 'Paul Guiffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: '412-243-1600', Phone2: '412-781-7900',
                Fax: '412-243-1643', Fax2: '412-781-7901', Add: '1900 Main Street, Suite 207, Canonsburg, PA 15317', Add2: '221 Commercial Ave, Suite 200, Pittsburgh, PA 15215' },
            { Name: 'Brackenridge', Atty1: 'David P. Hvizdos, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highlands)', Phone: '724-941-5400', Phone2: '412-243-9700',
                Fax: '724-941-8455', Fax2: '412-243-9660', Add: '505 Valleybrook Road, McMurray, PA 15317', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Braddock Borough', Atty1: 'Falco Muscante, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-242-4400', Phone2: '412-594-5622',
                Fax: '412-242-4377', Fax2: '412-594-5619', Add: '424 South 27th Street, Suite 210, Pittsburgh, PA 15203', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Braddock Hills', Atty1: 'Samuel P. Kamin, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-281-1119', Phone2: '412-594-5622',
                Fax: '412-281-1121', Fax2: '412-594-5619', Add: '437 Grant Street, Suite 1806, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Bradford Woods', Atty1: 'Kate M. Diersen, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Allegheny)', Phone: '412-281-0587', Phone2: '412-242-4400',
                Fax: '412-281-2971', Fax2: '412-242-4377', Add: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219', Add2: '424 South 27th Street, Suite 210, Pittsburgh, PA 15203' },
            { Name: 'Brentwood Borough', Atty1: 'Gavin A. Robb, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Brentwood)', Phone: '412-594-5654', Phone2: '412-594-5622',
                Fax: '412-594-5619', Fax2: '412-594-5619', Add: 'One PPG Place, Suite 1500, Pittsburgh, PA 15222', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Bridgeville', Atty1: 'Thomas P. McDermott, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Chartiers Valley)', Phone: '412-391-6920', Phone2: '412-281-2400',
                Fax: '412-391-1189', Fax2: '412-935-4123', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Carnegie', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Carlynton)', Phone: '412-391-6920', Phone2: '412-243-9700',
                Fax: '412-391-1189', Fax2: '412-243-9660', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Castle Shannon', Atty1: 'Dennis Biondo, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Keystone Oaks)', Phone: '412-350-1151', Phone2: '412-242-4400',
                Fax: '412-350-1174', Fax2: '412-242-4377', Add: '300 Fort Pitt Commons, 445 Fort Pitt Blvd., Pittsburgh, PA 15219', Add2: '424 South 27th Street, Suite 210, Pittsburgh, PA 15203' },
            { Name: 'Chalfant', Atty1: 'G N Evashavik, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-261-2813', Phone2: '412-594-5622',
                Fax: '412-261-5905', Fax2: '412-594-5619', Add: '310 Grant Street, Suite 1801, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Cheswick', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Allegheny Valley)', Phone: '412-391-6920', Phone2: '412-594-5622',
                Fax: '412-391-1189', Fax2: '412-594-5619', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Churchill', Atty1: 'Gavin A. Robb, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-594-5654', Phone2: '412-594-5622',
                Fax: '412-594-5654', Fax2: '412-594-5619', Add: 'One PPG Place, Suite 1500, Pittsburgh, PA 15222', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'City of Duquesne', Atty1: 'John H. Rushford, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Duquesne City)', Phone: '412-515-8900', Phone2: '412-243-9700',
                Fax: '412-515-8901', Fax2: '412-243-9660', Add: '2605 Nicholson Road, Suite 2201, Sewickley, PA 15143', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'City of McKeesport', Atty1: 'Jason Elash, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: '412-670-9025', Phone2: '412-243-1600',
                Fax: '412-675-5049', Fax2: '412-243-1643', Add: '500 5th Avenue, Suite 305, McKeesport, PA 15132', Add2: '1900 Main Street, Suite 207, Canonsburg, PA 15317' },
            { Name: 'City of Pittsburgh', Atty1: 'Jack H. Miller, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (City of Pittsburgh)', Phone: '412-255-2015', Phone2: '412-391-9890',
                Fax: '412-255-2285', Fax2: '412-391-9685', Add: '414 Grant Street, Room 313 City-County Bldg., Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Clairton', Atty1: 'J. Deron Gabriel, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highlands)', Phone: '412-261-6124', Phone2: '412-243-9700',
                Fax: '412-355-0241', Fax2: '412-243-9660', Add: '445 Fort Pitt Blvd., Ste LL 500, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Collier Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Chartiers Valley)', Phone: '412-281-0587', Phone2: '412-281-2400',
                Fax: '412-281-2971', Fax2: '412-935-4123', Add: '437 Grant Street, Pittsburgh, PA 15219', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Coraopolis', Atty1: 'Richard F. Start, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Cornell)', Phone: '412-749-1000', Phone2: '412-243-9700',
                Fax: '412-749-0330', Fax2: '412-243-9660', Add: '601 Broadstreet, Sewcikley, PA 15143', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Crafton Borough', Atty1: 'James Gladys, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Carlynton)', Phone: '412-391-1014', Phone2: '412-243-9700',
                Fax: '412-471-9510', Fax2: '412-243-9660', Add: '428 Forbes Ave, Suite 1240, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Crescent', Atty1: 'Richard F. Start, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Moon Area)', Phone: '412-749-1000', Phone2: '412-391-9890',
                Fax: '412-749-0330', Fax2: '412-391-9685', Add: '601 Broadstreet, Sewcikley, PA 15143', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Dormont Borough', Atty1: 'John H. Rushford, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Keystone Oaks)', Phone: '412-515-8900', Phone2: '412-242-4400',
                Fax: '412-515-8901', Fax2: '412-242-4377', Add: '2605 Nicholson Road, Suite 2201, Sewickley, PA 15143', Add2: '424 South 27th Street, Suite 210, Pittsburgh, PA 15203' },
            { Name: 'Dravosburg', Atty1: 'George S. Gobel, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: '412-672-2311', Phone2: '412-243-1600',
                Fax: '412-672-8237', Fax2: '412-243-1643', Add: '502 Fifth Ave, Suite 305, McKeesport, PA 15132', Add2: '1900 Main Street, Suite 207, Canonsburg, PA 15317' },
            { Name: 'East Deer Twp', Atty1: 'Craig H. Alexander, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Deer Lakes)', Phone: '724-733-3080', Phone2: '412-391-9890',
                Fax: '724-327-9659', Fax2: '412-391-9685', Add: '787 Pine Valley Drive, Suite E, Pittsburgh, PA 15239', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'East McKeesport', Atty1: 'Daniel P. Beisler, Esq. ***Send a copy of notice to Scott Zegeer***', Atty2: 'Daniel P. Beisler, Esq. ***Send a copy of notice to Scott Zegeer***',
                Affil1: 'Municipality', Affil2: 'School District (East Allegheny)', Phone: '724-978-0500', Phone2: '724-978-0500',
                Fax: '724-978-0504', Fax2: '724-978-0504', Add: '41 Robbins Station Road, North Huntingdon, PA 15642', Add2: '41 Robbins Station Road, North Huntingdon, PA 15642' },
            { Name: 'East Pittsburgh', Atty1: 'G N Evashavik, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-261-2813', Phone2: '412-594-5622',
                Fax: '412-261-5905', Fax2: '412-594-5619', Add: '310 Grant Street, Suite 1801, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Edgewood', Atty1: 'W. Timothy Barry, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-224-2669', Phone2: '412-594-5622',
                Fax: '412-945-6042', Fax2: '412-594-5619', Add: '1103 E Carson Street, Pittsburgh, PA 15203', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Edgeworth Borough', Atty1: 'Philip J. Weis, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-562-8800', Phone2: '412-281-2400',
                Fax: '412-562-1041', Fax2: '412-935-4123', Add: '501 Grant Street, Suite 200, Pittsburgh, PA 15219', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Elizabeth', Atty1: 'Matthew D. Racunas, Esq.', Atty2: 'Jennifer L. Cerce, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Elizabeth-Forward)', Phone: '412-301-2400', Phone2: '412-242-4400',
                Fax: '412-301-2401', Fax2: '412-242-4377', Add: '2611 Hayden Blvd., Suite 2, Elizabeth, PA 15037', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Elizabeth Twp', Atty1: 'Matthew D. Racunas, Esq.', Atty2: 'Jennifer L. Cerce, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Elizabeth-Forward)', Phone: '412-301-2400', Phone2: '412-242-4400',
                Fax: '412-301-2401', Fax2: '412-242-4377', Add: '2611 Hayden Blvd., Suite 2, Elizabeth, PA 15037', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Emsworth Borough', Atty1: 'John J. Edson, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: '412-259-8868', Phone2: '412-243-9700',
                Fax: '412-259-8892', Fax2: '412-243-9660', Add: '100 Hazel Lane, Suite 300, Sewickley, PA 15143', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Etna', Atty1: 'Ronald H. Heck, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Shaler)', Phone: '412-281-2100', Phone2: '412-594-5622',
                Fax: '412-281-2555', Fax2: '412-594-5619', Add: '429 4th Ave, Suite 1801, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Fawn Twp', Atty1: 'Stephen Yakopec Jr., Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highlands)', Phone: '724-339-3377', Phone2: '412-243-9700',
                Fax: '724-339-3414', Fax2: '412-243-9660', Add: '1725 Fifth Ave, Arnold, PA 15068', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Findlay Twp', Atty1: 'Alan T. Shuckrow, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: '412-281-5423', Phone2: '412-243-9700',
                Fax: '412-281-8264', Fax2: '412-243-9660', Add: '444 Liberty Ave, Suite 2200, Pittsburgh, PA 15222', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Forest Hills Borough', Atty1: 'Stephen L. Korbel, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Elizabeth-Forward)', Phone: '412-394-5627', Phone2: '412-594-5622',
                Fax: '412-586-1042', Fax2: '412-594-5619', Add: '603 Stanwix Street, 6th Floor, Pittsburgh, PA 15222', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Forward Twp', Atty1: 'Matthew D. Racunas, Esq.', Atty2: 'Jennifer L. Cerce, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Elizabeth-Forward)', Phone: '412-301-2400', Phone2: '412-242-4400',
                Fax: '412-301-2401', Fax2: '412-242-4377', Add: '2611 Hayden Blvd., Suite 2, Elizabeth, PA 15037', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Fox Chapel Borough', Atty1: 'A. Bruce Bowden, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel Area)', Phone: '412-261-2085', Phone2: '412-781-7900',
                Fax: '412-227-5551', Fax2: '412-781-7901', Add: '525 William Penn Place, 28th Floor, Pittsburgh, PA 15219', Add2: '221 Commercial Avenue, Suite 200, Pittsburgh, PA 15215' },
            { Name: 'Franklin Park', Atty1: 'Robert Max Junker, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Allegheny)', Phone: '412-394-5400', Phone2: '412-242-4400',
                Fax: '412-394-6576', Fax2: '412-242-4377', Add: '2 Gateway Ctr, 6th Floor, Pittsburgh, PA 15222', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Frazer Twp', Atty1: 'Matthew F. Marshall, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Deer Lakes)', Phone: '724-776-6644', Phone2: '412-391-9890',
                Fax: '724-776-6608', Fax2: '412-391-9685', Add: '600 Cranberry Woods Drive, Suite 175, Cranberry Twp, PA 16066', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Glassport', Atty1: 'John F. Cambest, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Allegheny)', Phone: '412-243-1600', Phone2: '412-242-4400',
                Fax: '412-243-1643', Fax2: '412-242-4377', Add: '1900 Main Street, Suite 207, Canonsbrug, PA 15317', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Glenfield', Atty1: 'Michael D. Seymour, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-261-4970', Phone2: '412-281-2400',
                Fax: '412-341-2046', Fax2: '412-935-4123', Add: '1431 Potomac Ave, Pittsburgh, PA 15216', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Greentree Borough', Atty1: 'Peter Molinaro Jr., Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Keystone Oaks)', Phone: '412-471-1180', Phone2: '412-242-4400',
                Fax: '412-471-9012', Fax2: '412-242-4377', Add: '2 Chatham Ctr, Suite 1500, Pittsburgh, PA 15219', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Hampton Twp', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Hampton)', Phone: '412-391-6920', Phone2: '412-281-2400',
                Fax: '412-391-1189', Fax2: '412-935-4123', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Harmar Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Allegheny Valley)', Phone: '412-281-0587', Phone2: '412-594-5622',
                Fax: '412-281-2971', Fax2: '412-594-5619', Add: '437 Grant Street, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Harrison Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highlands)', Phone: '412-281-0587', Phone2: '412-243-9700',
                Fax: '412-281-2971', Fax2: '412-243-9660', Add: '437 Grant Street, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Haysville', Atty1: 'Edward G. Brandenstein, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-553-7037', Phone2: '412-281-2400',
                Fax: '412-471-2754', Fax2: '412-935-4123', Add: '600 Grant Street, Suite 4850, Pittsburgh, PA 15219', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Heidelberg', Atty1: 'PJ Murray, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Chartiers Valley)', Phone: '412-736-7834', Phone2: '412-281-2400',
                Fax: '412-471-2754', Fax2: '412-935-4123', Add: '1558 Tiffany Drive, Pittsburgh, PA 15241', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Homestead Borough', Atty1: 'Joseph G. Heminger, Esq.', Atty2: 'Donald C. Fetzko, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Steel Valley)', Phone: '412-881-6620', Phone2: '412-464-9997',
                Fax: '412-881-6637', Fax2: '412-464-9970', Add: '180 Fort Couch Road, Suite 410, Pittsburgh, PA 15241', Add2: '714 Lebanon Road, West Mifflin, PA 15122' },
            { Name: 'Imperial Twp', Atty1: 'EJ Strassburger, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: '412-281-5423', Phone2: '412-243-9700',
                Fax: '412-281-8264', Fax2: '412-243-9660', Add: '444 Liberty Ave, Suite 2200, Pittsburgh, PA 15222', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Indiana Twp', Atty1: 'Irving S. Firman, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: '412-594-5557', Phone2: '412-781-7900',
                Fax: '412-594-5619', Fax2: '412-781-7901', Add: 'One PPG Place, Suite 1500, Pittsburgh, PA 15222', Add2: '221 Commercial Avenue, Suite 200, Pittsburgh, PA 15215' },
            { Name: 'Ingram', Atty1: 'Samuel P. Kamin, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: '412-281-1119', Phone2: '412-391-9890',
                Fax: '412-281-1121', Fax2: '412-391-9685', Add: '437 Grant Street, Suite 1806, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Jefferson', Atty1: 'J. Deron Gabriel, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Jefferson Hills)', Phone: '412-261-6124', Phone2: '412-594-5622',
                Fax: '412-355-0241', Fax2: '412-594-5619', Add: '445 Fort Pitt Blvd, Ste LL 500, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Kennedy Twp', Atty1: 'Joseph M. Kulik, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: '412-787-5422', Phone2: '412-391-9890',
                Fax: '412-787-9146', Fax2: '412-391-9685', Add: '127 Lorish Road, McKees Rocks, PA 15136', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Kilbuck Twp', Atty1: 'Richard F. Start, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: '412-749-1000', Phone2: '412-243-9700',
                Fax: '412-749-0330', Fax2: '412-243-9660', Add: '601 Broadstreet, Sewcikley, PA 15143', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Leet Twp', Atty1: 'Richard F. Start, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-749-1000', Phone2: '412-281-2400',
                Fax: '412-749-0330', Fax2: '412-935-4123', Add: '601 Broadstreet, Sewcikley, PA 15143', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Leetsdale', Atty1: 'James D. Amato, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-749-1000', Phone2: '412-281-2400',
                Fax: '412-749-0330', Fax2: '412-935-4123', Add: '601 Broad Street, Sewickley, PA 15143', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Liberty', Atty1: 'Jason Elash, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Allegheny)', Phone: '412-670-9025', Phone2: '412-242-4400',
                Fax: '412-675-5049', Fax2: '412-242-4377', Add: '500 5th Avenue, Suite 305, McKeesport, PA 15132', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Lincoln', Atty1: 'Falco Muscante, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Allegheny)', Phone: '412-242-4400', Phone2: '412-242-4400',
                Fax: '412-242-4377', Fax2: '412-242-4377', Add: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Marshall Twp', Atty1: 'Blaine Lucas, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Allegheny)', Phone: '412-394-5400', Phone2: '412-242-4400',
                Fax: '412-586-1074', Fax2: '412-242-4377', Add: '2 Gateway Ctr, 6th Floor, Pittsburgh, PA 15222', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'McCandless Twp', Atty1: 'Gavin A. Robb, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Allegheny)', Phone: '412-594-5646', Phone2: '412-242-4400',
                Fax: '412-594-5619', Fax2: '412-242-4377', Add: 'One PPG Place, Suite 1500, Pittsburgh, PA 15222', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'McDonald', Atty1: 'John P. Smider, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fort Cherry)', Phone: '724-228-6000', Phone2: '412-243-9700',
                Fax: '724-225-2730', Fax2: '412-243-9660', Add: '30 South Main Street, Suite 102, Washington, PA 15301', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'McKees Rocks', Atty1: 'Megan M. Turnbull, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Sto-Rox)', Phone: '412-391-9890', Phone2: '412-391-9890',
                Fax: '412-391-9685', Fax2: '412-391-9685', Add: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Millvale', Atty1: 'John F. Cambest, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Shaler Area)', Phone: '412-243-1600', Phone2: '412-594-5622',
                Fax: '412-243-1643', Fax2: '412-594-5619', Add: '1900 Main Street, Suite 207, Canonsburg, PA 15317', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Monroeville Borough', Atty1: 'Robert J. Wrathcer, Esq.', Atty2: 'Bruce E. Dice, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Gateway)', Phone: '412-904-1875', Phone2: '724-733-3080',
                Fax: '412-904-2680', Fax2: '724-327-9659', Add: '3824 Northern Pk, Ste 925, Monroeville, PA 15146', Add2: '787 Pine Valley Drive, Ste E, Pittsburgh, PA 15239' },
            { Name: 'Moon Twp', Atty1: 'Donald P. Graham, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Moon Area)', Phone: '724-776-6644', Phone2: '412-391-9890',
                Fax: '724-776-6608', Fax2: '412-391-9685', Add: '600 Cranberry Woods Drive, Suite 175, Cranberry Twp, PA 16066', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Mount Oliver', Atty1: 'Kate M. Diersen, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Pittsburgh Schools)', Phone: '412-281-0587', Phone2: '412-391-9890',
                Fax: '412-281-2971', Fax2: '412-391-9685', Add: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Mt. Lebanon Twp', Atty1: 'Philip J. Weis, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Mt. Lebanon)', Phone: '412-562-8800', Phone2: '412-594-5622',
                Fax: '412-562-1041', Fax2: '412-594-5619', Add: '501 Grant Street, Suite 200, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Munhall Borough', Atty1: 'G N Evashavik, Esq.', Atty2: 'Donald C. Fetzko, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Steel Valley)', Phone: '412-261-2813', Phone2: '412-464-9997',
                Fax: '412-261-5905', Fax2: '412-464-9970', Add: '310 Grant Street, Suite 1801, Pittsburgh, PA 15219', Add2: '714 Lebanon Road, West Mifflin, PA 15122' },
            { Name: 'Neville Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Cornell)', Phone: '412-281-0587', Phone2: '412-243-9700',
                Fax: '412-281-2971', Fax2: '412-243-9660', Add: '437 Grant Street, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'North Braddock Borough', Atty1: 'John A. Bacharach, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-391-8713', Phone2: '412-594-5622',
                Fax: '412-391-8583', Fax2: '412-594-5619', Add: '564 Forbes Avenue, Ste 1113, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'North Fayette', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: '412-391-6920', Phone2: '412-243-9700',
                Fax: '412-391-1189', Fax2: '412-243-9660', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'North Fayette Twp', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: '412-391-6920', Phone2: '412-243-9700',
                Fax: '412-391-1189', Fax2: '412-243-9660', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'North Versailles', Atty1: 'G N Evashavik, Esq.', Atty2: 'Daniel P. Beisler, Esq. ***Send a copy of notice to Scott Zegeer***',
                Affil1: 'Municipality', Affil2: 'School District (East Allegheny)', Phone: '412-261-2813', Phone2: '724-978-0500',
                Fax: '412-261-5905', Fax2: '724-978-0504', Add: '310 Grant Street, Suite 1801, Pittsburgh, PA 15219', Add2: '41 Robbins Station Road, North Huntingdon, PA 15642' },
            { Name: 'Oakdale', Atty1: 'Vincent A. Tucceri, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Allegheny)', Phone: '412-391-6920', Phone2: '412-243-9700',
                Fax: '412-391-1189', Fax2: '412-243-9660', Add: '519 Court Place, Pittsburgh, PA 15219', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Oakmont Borough', Atty1: 'Kate M. Diersen, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Riverview)', Phone: '412-281-0587', Phone2: '412-391-9890',
                Fax: '412-281-2971', Fax2: '412-391-9685', Add: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: "O'Hara Twp", Atty1: 'Philip J. Weis, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: '412-562-8800', Phone2: '412-781-7900',
                Fax: '412-562-1041', Fax2: '412-781-7901', Add: '501 Grant Street, Suite 200, Pittsburgh, PA 15219', Add2: '221 Commercial Avenue, Suite 200, Pittsburgh, PA 15215' },
            { Name: 'Ohio Twp', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Avonworth)', Phone: '412-366-6629', Phone2: '412-243-9700',
                Fax: '412-366-3329', Fax2: '412-243-9660', Add: '966 Perry Highway, Pittsburgh, PA 15237', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Osborne', Atty1: 'Harlan S. Stone, Esq.', Atty2: 'Kate M, Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-392-5295', Phone2: '412-281-2400',
                Fax: '412-392-5367', Fax2: '412-935-4123', Add: '2 PPG Place Ste 400, Pittsburgh, PA 15222', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Penn Hills Twp', Atty1: 'Bruce E. Dice, Esq.', Atty2: 'Bruce E. Dice, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Penn Hills)', Phone: '724-733-3080', Phone2: '724-733-3080',
                Fax: '724-327-9659', Fax2: '724-327-9659', Add: '787 Pine Valley Drive, Ste E, Pittsburgh, PA 15239', Add2: '787 Pine Valley Drive, Ste E, Pittsburgh, PA 15239' },
            { Name: 'Pennsbury', Atty1: 'Samuel P. Kamin, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: '412-281-1119', Phone2: '412-391-9890',
                Fax: '412-281-1121', Fax2: '412-391-9685', Add: '437 Grant Street, Suite 1806, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Pine Twp', Atty1: 'Gary J. Gushard, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Pine-Richland)', Phone: '412-56-1212', Phone2: '412-281-2400',
                Fax: '412-594-5619', Fax2: '412-935-4123', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Pitcarin Borough', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'Bruce E. Dice, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Gateway)', Phone: '412-366-6629', Phone2: '724-733-3080',
                Fax: '412-366-3329', Fax2: '724-327-9659', Add: '966 Perry Highway, Pittsburgh, PA 15237', Add2: '787 Pine Valley Drive, Ste E, Pittsburgh, PA 15239' },
            { Name: 'Pleasant Hills Borough', Atty1: 'Fred C. Jug Jr., Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Jefferson Hills)', Phone: '412-255-6500', Phone2: '412-594-5622',
                Fax: '412-255-6504', Fax2: '412-594-5619', Add: '330 Grant Street, Ste 1109, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Plum', Atty1: 'Bruce E. Dice, Esq.', Atty2: 'Bruce E. Dice, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Plum)', Phone: '724-733-3080', Phone2: '724-733-3080',
                Fax: '724-327-9659', Fax2: '724-327-9659', Add: '787 Pine Valley Drive, Ste E, Pittsburgh, PA 15239', Add2: '787 Pine Valley Drive, Ste E, Pittsburgh, PA 15239' },
            { Name: 'Port Vue Borough', Atty1: 'Patricia L. McGrail, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Allegheny)', Phone: '412-664-4433', Phone2: '412-242-4400',
                Fax: '412-664-4525', Fax2: '412-242-4377', Add: '1714 Lincoln Highway, White Oak, PA 15131', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Rankin', Atty1: 'Joseph G. Heminger, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-881-6620', Phone2: '412-594-5622',
                Fax: '412-881-6637', Fax2: '412-594-5619', Add: '436 Seventh Ave, Ste 300, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Reserve Twp', Atty1: 'Harlan S. Stone, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Shaler Area)', Phone: '412-392-5295', Phone2: '412-594-5622',
                Fax: '412-392-5367', Fax2: '412-594-5619', Add: '2 PPG Place Ste 400, Pittsburgh, PA 15222', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Richland Twp', Atty1: 'Charles M. Means, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Pine-Richland)', Phone: '412-281-0587', Phone2: '412-281-2400',
                Fax: '412-281-2971', Fax2: '412-935-4123', Add: '437 Grant Street, Pittsburgh, PA 15219', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Robinson Twp', Atty1: 'John F. Cambest, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: '412-243-1600', Phone2: '412-391-9890',
                Fax: '412-243-1643', Fax2: '412-391-9685', Add: '1900 Main Street, Suite 207, Canonsbrug, PA 15317', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Ross Twp', Atty1: 'PJ Murray, Esq.', Atty2: 'Michael J. Witherel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Hills)', Phone: '412-736-7834', Phone2: '412-366-6629',
                Fax: '412-471-2754', Fax2: '412-366-3329', Add: '1558 Tiffany Drive, Pittsburgh, PA 15241', Add2: '966 Perry Highway, Pittsburgh, PA 15237' },
            { Name: 'Rosslyn Farms', Atty1: 'Daniel C. Conlon, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Carlynton)', Phone: '412-566-1212', Phone2: '412-243-9700',
                Fax: '412-594-5619', Fax2: '412-243-9660', Add: 'One PPG Place, Suite 1500, Pittsburgh, PA 15222', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Scott', Atty1: 'John T. Vogel, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Chartiers Valley)', Phone: '412-594-5622', Phone2: '412-281-2400',
                Fax: '412-594-5619', Fax2: '412-935-4123', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Sewickley Borough', Atty1: 'Richard B. Tucker, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-594-5622', Phone2: '412-281-2400',
                Fax: '412-594-5619', Fax2: '412-935-4123', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Sewickley Heights Borough', Atty1: 'Laura Stone, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-394-5420', Phone2: '412-281-2400',
                Fax: '412-586-1050', Fax2: '412-935-4123', Add: '2 Gateway Center, 6th Floor, Pittsburgh, PA 15222', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Sewickley Hills', Atty1: 'Arthur J. Leonard, Esq.', Atty2: 'Kate M. Diersen, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Quaker Valley)', Phone: '412-281-5431', Phone2: '412-281-2400',
                Fax: '412-281-3711', Fax2: '412-935-4123', Add: '500 Grant Street, Ste 2300, Pittsburgh, PA 15219', Add2: '437 Grant Street, 14th Floor, Pittsburgh, PA 15219' },
            { Name: 'Shaler Twp', Atty1: 'Harlan S. Stone, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Shaler Area)', Phone: '412-392-5295', Phone2: '412-594-5622',
                Fax: '412-392-5367', Fax2: '412-594-5619', Add: '2 PPG Place Ste 400, Pittsburgh, PA 15222', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Sharpsburg', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'Paul Giuffre, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Fox Chapel)', Phone: '412-366-6629', Phone2: '412-781-7900',
                Fax: '412-366-3329', Fax2: '412-781-7901', Add: '966 Perry Highway, Pittsburgh, PA 15237', Add2: '221 Commercial Avenue, Suite 200, Pittsburgh, PA 15215' },
            { Name: 'South Fayette', Atty1: 'Samuel P. Kamin, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Fayette)', Phone: '412-281-1119', Phone2: '412-594-5622',
                Fax: '412-281-1121', Fax2: '412-594-5619', Add: '437 Grant Street, Suite 1806, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'South Park Twp', Atty1: 'Irving S. Firman, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (South Park)', Phone: '412-594-5557', Phone2: '412-243-9700',
                Fax: '412-594-5619', Fax2: '412-243-9660', Add: 'One PPG Place, Suite 1500, Pittsburgh, PA 15222', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'South Versailles', Atty1: 'Richard Cromer', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: '412-261-1600', Phone2: '412-243-1600',
                Fax: '412-227-5551', Fax2: '412-243-1943', Add: '525 William Penn Place, Floor 28, Pittsburgh, PA 15219', Add2: '1900 Main Street, Suite 207, Canonsburg, PA 15317' },
            { Name: 'Springdale', Atty1: 'Craig H. Alexander, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Allegheny Valley)', Phone: '724-733-3080', Phone2: '412-594-5622',
                Fax: '724-327-9659', Fax2: '412-594-5619', Add: '787 Pine Valley Drive, Suite E, Pittsburgh, PA 15239', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Springdale Twp', Atty1: 'Stephen Yakopec Jr., Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Allegheny Valley)', Phone: '724-339-3377', Phone2: '412-594-5622',
                Fax: '724-339-3414', Fax2: '412-594-5619', Add: '1725 Fifth Ave, Arnold, PA 15068', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Stowe Twp', Atty1: 'John F. Cambest, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Sto-Rox)', Phone: '412-243-1600', Phone2: '412-391-9890',
                Fax: '412-243-1643', Fax2: '412-391-9685', Add: '1900 Main Street, Suite 207, Canonsbrug, PA 15317', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Swissvale', Atty1: 'Robert McTiernan, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-594-5622', Phone2: '412-594-5622',
                Fax: '412-594-5619', Fax2: '412-594-5619', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Tarentum', Atty1: 'Charles T. Clark, Esq.', Atty2: 'Anthony Giglio, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Highlands)', Phone: '724-224-3165', Phone2: '412-243-9700',
                Fax: '724-224-3166', Fax2: '412-243-9660', Add: '210 Fifth Avenue, Tarentum, PA 15084', Add2: '1500 Ardmore Blvd., Suite 506, Pittsburgh, PA 15221' },
            { Name: 'Thornburg', Atty1: 'Charles M. Means, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Montour)', Phone: '412-281-0587', Phone2: '412-391-9890',
                Fax: '412-281-2971', Fax2: '412-391-9685', Add: '437 Grant Street, Pittsburgh, PA 15219', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Trafford', Atty1: 'Craig H. Alexander, Esq.', Atty2: 'Alfred C. Maiello, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Penn-Trafford)', Phone: '724-733-3080', Phone2: '412-242-4400',
                Fax: '724-327-9659', Fax2: '412-242-4377', Add: '787 Pine Valley Drive, Suite E, Pittsburgh, PA 15239', Add2: '424 South 27th Street, Suite 210, Pittsurgh, PA 15203' },
            { Name: 'Turtle Creek', Atty1: 'G N Evashavik, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-261-2813', Phone2: '412-594-5622',
                Fax: '412-261-5905', Fax2: '412-594-5619', Add: '310 Grant Street, Suite 1801, Pittsburgh, PA 15219', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Upper St. Clair Twp', Atty1: 'Irving S. Firman, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Upper St. Clair)', Phone: '412-594-5557', Phone2: '412-391-9890',
                Fax: '412-594-5619', Fax2: '412-391-9685', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Verona', Atty1: 'Bruce E. Dice, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Riverview)', Phone: '724-733-3080', Phone2: '412-391-9890',
                Fax: '724-327-9659', Fax2: '412-391-9685', Add: '787 Pine Valley Drive, Ste E, Pittsburgh, PA 15239', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Versailles', Atty1: 'Krisha Dimascio, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: '412-243-1600', Phone2: '412-243-1600',
                Fax: '412-243-1643', Fax2: '412-243-1943', Add: '1900 Main Street, Suite 207, Canonsburg, PA 15317', Add2: '1900 Main Street, Suite 207, Canonsburg, PA 15317' },
            { Name: 'Wall', Atty1: 'Ronald Lawry, Esq.', Atty2: 'Daniel P. Beisler, Esq. ***Send a copy of notice to Scott Zegeer***',
                Affil1: 'Municipality', Affil2: 'School District (East Allegheny)', Phone: '412-445-2272', Phone2: '724-978-0500',
                Fax: '412-734-1001', Fax2: '724-978-0504', Add: '8306 Ohio River Blvd., Pittsburgh, PA 15202', Add2: '41 Robbins Station Road, North Huntingdon, PA 15642' },
            { Name: 'West Deer Twp', Atty1: 'Gavin A. Robb, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Deer Lakes)', Phone: '412-594-5654', Phone2: '412-391-9890',
                Fax: '412-594-5619', Fax2: '412-391-9685', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'West Elizabeth Twp', Atty1: 'Patricia L. McGrail, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Jefferson Hills)', Phone: '412-664-4433', Phone2: '412-594-5622',
                Fax: '412-664-4525', Fax2: '412-594-5619', Add: '1714 Lincoln Highway, White Oak, PA 15131', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'West Homestead', Atty1: 'Stanley Lederman, Esq.', Atty2: 'Donald C. Fetzko, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Steel Valley)', Phone: '412-261-5400', Phone2: '412-464-9997',
                Fax: '412-281-0313', Fax2: '412-464-9970', Add: '428 Forbes Ave, Ste 302, Pittsburgh, PA 15219', Add2: '714 Lebanon Road, West Mifflin, PA 15122' },
            { Name: 'West Mifflin Borough', Atty1: 'G N Evashavik, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Mifflin)', Phone: '412-261-2813', Phone2: '412-243-1600',
                Fax: '412-261-5905', Fax2: '412-243-1943', Add: '310 Grant Street, Suite 1801, Pittsburgh, PA 15219', Add2: '1900 Main Street, Suite 207, Canonsburg, PA 15317' },
            { Name: 'West View', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'Michael J. Witherel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (North Hills)', Phone: '412-366-6629', Phone2: '412-366-6629',
                Fax: '412-366-3329', Fax2: '412-366-3329', Add: '966 Perry Highway, Pittsburgh, PA 15237', Add2: '966 Perry Highway, Pittsburgh, PA 15237' },
            { Name: 'Whitaker', Atty1: 'George M. Janocsko, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (West Mifflin)', Phone: '412-350-1132', Phone2: '412-243-1600',
                Fax: '412-350-1174', Fax2: '412-243-1943', Add: '300 Fort Pitt Commons, 445 Fort Pitt Blvd., Pittsburgh, PA 15219', Add2: '1900 Main Street, Suite 207, Canonsburg, PA 15317' },
            { Name: 'White Oak', Atty1: 'Krisha Dimascio, Esq.', Atty2: 'Gary J. Matta, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (McKeesport Area)', Phone: '412-243-1600', Phone2: '412-243-1600',
                Fax: '412-243-1643', Fax2: '412-243-1943', Add: '1900 Main Street, Suite 207, Canonsburg, PA 15317', Add2: '1900 Main Street, Suite 207, Canonsburg, PA 15317' },
            { Name: 'Whitehall', Atty1: 'Irving S. Firman, Esq.', Atty2: 'Janet Burkardt, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Baldwin-Whitehall)', Phone: '412-594-5557', Phone2: '412-391-9890',
                Fax: '412-594-5619', Fax2: '412-391-9685', Add: '1500 One PPG Place, Pittsburgh, PA 15222', Add2: '445 Fort Pitt Blvd., Suite 503, Pittsburgh, PA 15219' },
            { Name: 'Wilkins Twp', Atty1: 'John H. Rushford, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Woodland Hills)', Phone: '412-515-8900', Phone2: '412-594-5622',
                Fax: '412-515-8901', Fax2: '412-594-5619', Add: '2605 Nicholson Road, Suite 2201, Sewickley, PA 15143', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Wilkinsburg Borough', Atty1: 'Michael J. Witherel, Esq.', Atty2: 'John T. Vogel, Esq.',
                Affil1: 'Municipality', Affil2: 'School District (Wilkinsburg)', Phone: '412-366-6629', Phone2: '412-594-5622',
                Fax: '412-366-3329', Fax2: '412-594-5619', Add: '966 Perry Highway, Pittsburgh, PA 15237', Add2: '1500 One PPG Place, Pittsburgh, PA 15222' },
            { Name: 'Wilmerding Borough', Atty1: 'G N Evashavik, Esq.', Atty2: 'Daniel P. Beisler, Esq. ***Send a copy of notice to Scott Zegeer***',
                Affil1: 'Municipality', Affil2: 'School District (East Allegheny)', Phone: '412-261-2813', Phone2: '724-978-0500',
                Fax: '412-261-5905', Fax2: '724-978-0504', Add: '310 Grant Street, Suite 1801, Pittsburgh, PA 15219', Add2: '41 Robbins Station Road, North Huntingdon, PA 15642' },
        ];
        this.getProducts();
    }
    // toggels child by setting the boolean value
    DropdownComponent.prototype.toggleChild = function () {
        this.showVar = !this.showVar;
    };
    // constructor function
    DropdownComponent.prototype.getProducts = function () {
        console.log("getProducts");
        return this.ProductHeader;
    };
    //this is used to match the chosen dropdown selection with the corresponding data in product details
    DropdownComponent.prototype.SearchProduct = function (name) {
        var obj = this.Products.filter(function (m) { return m.Name == name; });
        this.ProductDetails = obj;
        return this.ProductDetails;
    };
    // print button function
    DropdownComponent.prototype.Print = function () {
        window.print();
    };
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/dropdown/dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
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

module.exports = __webpack_require__(/*! C:\Users\joeba\Desktop\BOV_SolicitorDropDown\Muni\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map