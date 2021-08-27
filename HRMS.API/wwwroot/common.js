(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "CGYE":
/*!*****************************************************!*\
  !*** ./src/app/routes/category/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







const BACKEND_URL = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/category/";
class CategoryService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.categories = [];
        this.categoriesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getCategories() {
        this.http
            .get(BACKEND_URL)
            .subscribe((categoryData) => {
            console.log(categoryData);
            this.categories = categoryData.categories;
            this.categoriesUpdated.next({
                categorys: [...this.categories],
                count: categoryData.count,
            });
        });
    }
    getCategoryUpdateListener() {
        return this.categoriesUpdated.asObservable();
    }
    getCategory(id) {
        return this.http.get(BACKEND_URL + id);
    }
    getCategoriesShort() {
        return this.http.get(BACKEND_URL + "short");
    }
    addCategory(category) {
        return this.http
            .post(BACKEND_URL, category);
    }
    updateCategory(category) {
        return this.http.put(BACKEND_URL + category.id, category);
    }
    deleteCategory(id) {
        return this.http.delete(BACKEND_URL + id);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FizE":
/*!*****************************************************!*\
  !*** ./src/app/routes/customer/customer.service.ts ***!
  \*****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







const BACKEND_URL = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/customer/";
class CustomerService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.customers = [];
        this.customersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getCustomers() {
        this.http
            .get(BACKEND_URL)
            .subscribe((customerData) => {
            this.customers = customerData.customers;
            this.customersUpdated.next({
                customers: [...this.customers]
            });
        });
    }
    getCustomerUpdateListener() {
        return this.customersUpdated.asObservable();
    }
    getCustomer(id) {
        return this.http.get(BACKEND_URL + id);
    }
    getCustomersShort(offset, count, q) {
        let queryParams = `?offset=${offset}&count=${count}`;
        if (q) {
            queryParams += `&q=${q}`;
        }
        return this.http.get(BACKEND_URL + "short" + queryParams);
    }
    addCustomer(customer) {
        return this.http
            .post(BACKEND_URL, customer);
    }
    updateCustomer(customer) {
        return this.http.put(BACKEND_URL + customer.id, customer);
    }
    deleteCustomer(id) {
        return this.http.delete(BACKEND_URL + id);
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Hk/U":
/*!***************************************************!*\
  !*** ./src/app/routes/product/product.service.ts ***!
  \***************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








const BACKEND_URL = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/product/";
class ProductService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.products = [];
        this.productsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getProducts() {
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return {
                products: data.products.map(p => {
                    return {
                        id: p.id,
                        name: p.name,
                        categoryId: p.category.id,
                        categoryName: p.category.name,
                        supplierId: p.supplier.id,
                        supplierName: p.supplier.name,
                        description: p.description,
                        stock: p.stock ? p.stock : 0,
                        unit: p.unit,
                        bprice: p.bprice,
                        price: p.price,
                        status: p.status
                    };
                }),
                count: data.count
            };
        }))
            .subscribe((productData) => {
            console.log(productData);
            this.products = productData.products;
            this.productsUpdated.next({
                products: [...this.products],
                count: productData.count,
            });
        });
    }
    getProductUpdateListener() {
        return this.productsUpdated.asObservable();
    }
    getProduct(id) {
        return this.http.get(BACKEND_URL + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            return {
                id: data.id,
                name: data.name,
                categoryId: data.category.id,
                categoryName: data.category.name,
                supplierId: data.supplier.id,
                supplierName: data.supplier.name,
                description: data.description,
                unit: data.unit,
                bprice: data.bprice,
                price: data.price
            };
        }));
    }
    addProduct(product) {
        this.http
            .post(BACKEND_URL, product)
            .subscribe((responseData) => {
            this.router.navigate(['/product/list']);
        });
    }
    updateProduct(product) {
        this.http.put(BACKEND_URL + product.id, product).subscribe((response) => {
            this.router.navigate(['/product/list']);
        });
    }
    deleteProduct(id) {
        return this.http.delete(BACKEND_URL + id);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "j0zJ":
/*!*****************************************************!*\
  !*** ./src/app/routes/supplier/supplier.service.ts ***!
  \*****************************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







const BACKEND_URL = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "/supplier/";
class SupplierService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.suppliers = [];
        this.suppliersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getSuppliers(postsPerPage, currentPage) {
        const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
        this.http
            .get(BACKEND_URL
        //+ queryParams
        )
            .subscribe((supplierData) => {
            this.suppliers = supplierData.suppliers;
            this.suppliersUpdated.next({
                suppliers: [...this.suppliers],
                count: supplierData.count,
            });
        });
    }
    getSupplierUpdateListener() {
        return this.suppliersUpdated.asObservable();
    }
    getSupplier(id) {
        return this.http.get(BACKEND_URL + id);
    }
    getSuppliersShort() {
        return this.http.get(BACKEND_URL + "short");
    }
    addSupplier(supplier) {
        return this.http
            .post(BACKEND_URL, supplier);
    }
    updateSupplier(supplier) {
        return this.http.put(BACKEND_URL + supplier.id, supplier);
    }
    deleteSupplier(id) {
        return this.http.delete(BACKEND_URL + id);
    }
}
SupplierService.ɵfac = function SupplierService_Factory(t) { return new (t || SupplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SupplierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SupplierService, factory: SupplierService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m1XX":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-print/__ivy_ngcc__/fesm2015/ngx-print.js ***!
  \*******************************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class NgxPrintDirective {
    constructor() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 0;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @param {?} values
     * @return {?}
     */
    set printStyle(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    returnStyleValues() {
        return `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }
    /**
     * \@memberof NgxPrintDirective
     * @param {?} cssList
     * @return {?}
     */
    set styleSheetFile(cssList) {
        /** @type {?} */
        let linkTagFn = (/**
         * @param {?} cssFileName
         * @return {?}
         */
        function (cssFileName) {
            return `<link rel="stylesheet" type="text/css" href="${cssFileName}">`;
        });
        if (cssList.indexOf(',') !== -1) {
            /** @type {?} */
            const valueArr = cssList.split(',');
            for (let val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        }
        else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    getElementTag(tag) {
        /** @type {?} */
        const html = [];
        /** @type {?} */
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }
    /**
     *
     * @private
     * @param {?} data the html element collection to save defaults to
     *
     * @return {?}
     */
    getFormData(data) {
        for (var i = 0; i < data.length; i++) {
            data[i].defaultValue = data[i].value;
            if (data[i].checked) {
                data[i].defaultChecked = true;
            }
        }
    }
    /**
     * @private
     * @return {?} html section to be printed along with some associated inputs
     *
     */
    getHtmlContents() {
        /** @type {?} */
        let printContents = document.getElementById(this.printSectionId);
        /** @type {?} */
        let innards = printContents.getElementsByTagName('input');
        this.getFormData(innards);
        /** @type {?} */
        let txt = printContents.getElementsByTagName('textarea');
        this.getFormData(txt);
        return printContents.innerHTML;
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print() {
        /** @type {?} */
        let printContents;
        /** @type {?} */
        let popupWin;
        /** @type {?} */
        let styles = '';
        /** @type {?} */
        let links = '';
        /** @type {?} */
        const baseTag = this.getElementTag('base');
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = this.getHtmlContents();
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>${this.printTitle ? this.printTitle : ""}</title>
          ${baseTag}
          ${this.returnStyleValues()}
          ${this.returnStyleSheetLinkTags()}
          ${styles}
          ${links}
        </head>
        <body>
          ${printContents}
          <script defer>
            function triggerPrint(event) {
              window.removeEventListener('load', triggerPrint, false);
              setTimeout(function() {
                closeWindow(window.print());
              }, ${this.printDelay});
            }
            function closeWindow(){
                window.close();
            }
            window.addEventListener('load', triggerPrint, false);
          </script>
        </body>
      </html>`);
        popupWin.document.close();
    }
}
NgxPrintDirective.ɵfac = function NgxPrintDirective_Factory(t) { return new (t || NgxPrintDirective)(); };
NgxPrintDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxPrintDirective, selectors: [["button", "ngxPrint", ""]], hostBindings: function NgxPrintDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxPrintDirective_click_HostBindingHandler() { return ctx.print(); });
    } }, inputs: { useExistingCss: "useExistingCss", printDelay: "printDelay", printStyle: "printStyle", styleSheetFile: "styleSheetFile", printSectionId: "printSectionId", printTitle: "printTitle" } });
NgxPrintDirective.propDecorators = {
    printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "button[ngxPrint]"
            }]
    }], function () { return []; }, { useExistingCss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleSheetFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], printSectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], printTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPrintModule {
}
NgxPrintModule.ɵfac = function NgxPrintModule_Factory(t) { return new (t || NgxPrintModule)(); };
NgxPrintModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPrintModule });
NgxPrintModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPrintModule, { declarations: [NgxPrintDirective], exports: [NgxPrintDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPrintModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgxPrintDirective],
                imports: [],
                exports: [NgxPrintDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ })

}]);
//# sourceMappingURL=common.js.map