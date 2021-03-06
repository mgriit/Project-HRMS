(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-report-module"],{

/***/ "3HI6":
/*!***********************************************************************!*\
  !*** ./src/app/routes/reports/report-stock/report-stock.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReportStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportStockComponent", function() { return ReportStockComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var app_routes_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/routes/product/product.service */ "Hk/U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-print */ "m1XX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");














function ReportStockComponent_div_7_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ReportStockComponent_div_7_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", i_r17 + 1, " ");
} }
function ReportStockComponent_div_7_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ReportStockComponent_div_7_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r18.name, " ");
} }
function ReportStockComponent_div_7_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ReportStockComponent_div_7_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r19.categoryName, " ");
} }
function ReportStockComponent_div_7_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Supplier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ReportStockComponent_div_7_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r20.supplierName, " ");
} }
function ReportStockComponent_div_7_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ReportStockComponent_div_7_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r21.unit, " ");
} }
function ReportStockComponent_div_7_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ReportStockComponent_div_7_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r22.stock, " ");
} }
function ReportStockComponent_div_7_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "tr", 20);
} }
function ReportStockComponent_div_7_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "tr", 21);
} }
function ReportStockComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Dream Masroom Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Stock Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, ReportStockComponent_div_7_th_10_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](11, ReportStockComponent_div_7_td_11_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, ReportStockComponent_div_7_th_13_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, ReportStockComponent_div_7_td_14_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](15, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, ReportStockComponent_div_7_th_16_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, ReportStockComponent_div_7_td_17_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](18, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](19, ReportStockComponent_div_7_th_19_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, ReportStockComponent_div_7_td_20_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](21, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, ReportStockComponent_div_7_th_22_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, ReportStockComponent_div_7_td_23_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](24, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, ReportStockComponent_div_7_th_25_Template, 2, 0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, ReportStockComponent_div_7_td_26_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, ReportStockComponent_div_7_tr_27_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, ReportStockComponent_div_7_tr_28_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
class ReportStockComponent {
    constructor(productService, translate) {
        this.productService = productService;
        this.translate = translate;
        this.isLoading = false;
        this.dataList = [];
        this.displayedColumns = ['sl', 'name', 'categoryName', 'supplierName', 'unit', 'stock'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.dataList);
    }
    ngOnInit() {
        this.isLoading = true;
        this.productService.getProducts();
        this.productsSub = this.productService
            .getProductUpdateListener()
            .subscribe((productData) => {
            this.dataList = productData.products;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.dataList);
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.productsSub.unsubscribe();
    }
}
ReportStockComponent.??fac = function ReportStockComponent_Factory(t) { return new (t || ReportStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](app_routes_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
ReportStockComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: ReportStockComponent, selectors: [["app-report-stock"]], decls: 8, vars: 3, consts: [["name", "form", "fxLayout", "row", "fxLayoutAlign", "end center"], ["f", "ngForm"], ["printSectionId", "mytodosItemsId", "ngxPrint", "", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "disabled", "useExistingCss"], ["id", "mytodosItemsId", 4, "ngIf"], ["id", "mytodosItemsId"], [2, "text-align", "center"], ["src", "assets/images/dmc_logo.jpg", "height", "50"], ["mat-table", "", 1, "mat-elevation-z8", "w-full", 3, "dataSource"], ["matColumnDef", "sl"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "categoryName"], ["matColumnDef", "supplierName"], ["matColumnDef", "unit"], ["matColumnDef", "stock"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ReportStockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, ReportStockComponent_div_7_Template, 29, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.dataSource.data.length < 1)("useExistingCss", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.dataSource.data.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], ngx_print__WEBPACK_IMPORTED_MODULE_7__["NgxPrintDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 12px;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-header-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\n.mat-column-sl[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 22% !important;\n  width: 22% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-categoryName[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 22% !important;\n  width: 22% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-supplierName[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 22% !important;\n  width: 22% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-unit[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stock[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11% !important;\n  width: 11% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVwb3J0LXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTs7O0VBR0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InJlcG9ydC1zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbnRyLm1hdC1yb3csXHJcbnRyLm1hdC1oZWFkZXItcm93LFxyXG50ci5tYXQtZm9vdGVyLXJvdyB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zbCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1uYW1lIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMjIlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIyJSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWNhdGVnb3J5TmFtZSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDIyJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMiUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdXBwbGllck5hbWUge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAyMiUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMjIlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdW5pdCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdG9jayB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDExJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "4txs":
/*!**************************************************!*\
  !*** ./src/app/routes/reports/report.service.ts ***!
  \**************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const BACKEND_URL = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + "/report/";
class ReportService {
    constructor(http) {
        this.http = http;
    }
    getStockDetail(from, to) {
        let queryParams = `?from=${from.toISOString()}&to=${to.toISOString()}`;
        return this.http
            .get(BACKEND_URL + 'stock-detail/' + queryParams);
    }
    getSales(from, to, id) {
        let queryParams = `?count=all`;
        if (from) {
            queryParams += `&from=${from.toISOString()}`;
        }
        if (to) {
            queryParams += `&to=${to.toISOString()}`;
        }
        if (id) {
            queryParams += `&id=${id}`;
        }
        return this.http
            .get(BACKEND_URL + 'sales/' + queryParams);
    }
    getDue(from, to, id, type) {
        let queryParams = `?type=${type}`;
        if (from) {
            queryParams += `&from=${from.toISOString()}`;
        }
        if (to) {
            queryParams += `&to=${to.toISOString()}`;
        }
        if (id) {
            queryParams += `&id=${id}`;
        }
        return this.http
            .get(BACKEND_URL + 'due/' + queryParams);
    }
}
ReportService.??fac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReportService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: ReportService, factory: ReportService.??fac, providedIn: 'root' });


/***/ }),

/***/ "6/oo":
/*!*************************************************************************!*\
  !*** ./src/app/routes/reports/report-return/report-return.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReportReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportReturnComponent", function() { return ReportReturnComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_routes_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/routes/customer/customer.service */ "FizE");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../report.service */ "4txs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-matero/extensions/select */ "YKwE");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-print */ "m1XX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");





















function ReportReturnComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.item;
    const search_r8 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngOptionHighlight", search_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](item_r6.name);
} }
function ReportReturnComponent_div_25_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", i_r40 + 1, " ");
} }
function ReportReturnComponent_div_25_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r41.name, " ");
} }
function ReportReturnComponent_div_25_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r42.phone, " ");
} }
function ReportReturnComponent_div_25_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r43.address, " ");
} }
function ReportReturnComponent_div_25_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r44.date, " ");
} }
function ReportReturnComponent_div_25_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r45.total, " ");
} }
function ReportReturnComponent_div_25_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"]("", ctx_r26.totalCol.totalTotal, " ");
} }
function ReportReturnComponent_div_25_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r46.discount, " ");
} }
function ReportReturnComponent_div_25_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r29.totalCol.totalDiscount);
} }
function ReportReturnComponent_div_25_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Due ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r47.due, " ");
} }
function ReportReturnComponent_div_25_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r32.totalCol.totalDue);
} }
function ReportReturnComponent_div_25_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Paid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportReturnComponent_div_25_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r48.paid, " ");
} }
function ReportReturnComponent_div_25_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r35.totalCol.totalPaid);
} }
function ReportReturnComponent_div_25_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 38);
} }
function ReportReturnComponent_div_25_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 39);
} }
function ReportReturnComponent_div_25_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 40);
} }
function ReportReturnComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "Dream Masroom Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "Sales Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](9, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, ReportReturnComponent_div_25_th_10_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](11, ReportReturnComponent_div_25_td_11_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, ReportReturnComponent_div_25_td_12_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](13, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, ReportReturnComponent_div_25_th_14_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](15, ReportReturnComponent_div_25_td_15_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](16, ReportReturnComponent_div_25_td_16_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](17, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](18, ReportReturnComponent_div_25_th_18_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](19, ReportReturnComponent_div_25_td_19_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, ReportReturnComponent_div_25_td_20_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](21, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, ReportReturnComponent_div_25_th_22_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, ReportReturnComponent_div_25_td_23_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, ReportReturnComponent_div_25_td_24_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](25, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, ReportReturnComponent_div_25_th_26_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, ReportReturnComponent_div_25_td_27_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, ReportReturnComponent_div_25_td_28_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](29, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, ReportReturnComponent_div_25_th_30_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, ReportReturnComponent_div_25_td_31_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, ReportReturnComponent_div_25_td_32_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](33, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](34, ReportReturnComponent_div_25_th_34_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](35, ReportReturnComponent_div_25_td_35_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](36, ReportReturnComponent_div_25_td_36_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](37, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](38, ReportReturnComponent_div_25_th_38_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](39, ReportReturnComponent_div_25_td_39_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](40, ReportReturnComponent_div_25_td_40_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](41, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](42, ReportReturnComponent_div_25_th_42_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, ReportReturnComponent_div_25_td_43_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](44, ReportReturnComponent_div_25_td_44_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](45, ReportReturnComponent_div_25_tr_45_Template, 1, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](46, ReportReturnComponent_div_25_tr_46_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](47, ReportReturnComponent_div_25_tr_47_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dataSource", ctx_r5.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matHeaderRowDef", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matRowDefColumns", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matFooterRowDef", ctx_r5.displayedColumns);
} }
class ReportReturnComponent {
    constructor(reportService, customerService) {
        this.reportService = reportService;
        this.customerService = customerService;
        this.dueData = [];
        this.customerBuffer = [];
        this.bufferSize = 20;
        this.loading = false;
        this.input$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.displayedColumns = ['sl', 'name', 'phone', 'address', 'date', 'total', 'discount', 'due', 'paid'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.dueData);
    }
    ngOnInit() {
        this.from = null;
        this.to = null;
        this.id = null;
        this.customerService.getCustomersShort(0, this.bufferSize, null).subscribe(data => {
            this.customerBuffer = data;
        });
        this.onSearch();
    }
    fetchMore(term) {
        const len = this.customerBuffer.length;
        this.loading = true;
        this.customerService.getCustomersShort(len, this.bufferSize + len, term).subscribe(data => {
            this.customerBuffer = this.customerBuffer.concat(data);
            this.loading = false;
        });
    }
    onSearch() {
        this.input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(term => this.customerService.getCustomersShort(0, this.bufferSize, term)))
            .subscribe(data => {
            this.customerBuffer = data;
            this.loading = false;
        });
    }
    search(f) {
        this.reportService.getDue(this.from, this.to, this.id, 3).subscribe(res => {
            this.dueData = res.dueData;
            this.totalCol = res.summary;
            console.log(this.totalCol);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.dueData);
        });
    }
}
ReportReturnComponent.??fac = function ReportReturnComponent_Factory(t) { return new (t || ReportReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](app_routes_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"])); };
ReportReturnComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: ReportReturnComponent, selectors: [["app-report-return"]], decls: 26, vars: 14, consts: [["name", "form", "fxLayout", "row", "fxLayoutAlign", "start center"], ["f", "ngForm"], ["fxFlex", ""], ["name", "customer", "bindLabel", "name", "bindValue", "id", "placeholder", "Select a customer", 3, "items", "virtualScroll", "loading", "ngModel", "typeahead", "ngModelChange", "scrollToEnd"], ["select", ""], ["ng-option-tmp", ""], ["fxFlex", "20", "fxFlexOffset", "2"], ["matInput", "", "name", "from", "placeholder", "From", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], ["matInput", "", "name", "to", "placeholder", "To", 3, "ngModel", "matDatepicker", "ngModelChange"], ["pickerTo", ""], ["fxFlexOffset", ".5", "type", "submit", "aria-label", "from", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "click"], ["printSectionId", "mytodosItemsId", "ngxPrint", "", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "disabled", "useExistingCss"], ["id", "mytodosItemsId", 4, "ngIf"], [3, "ngOptionHighlight"], ["id", "mytodosItemsId"], [2, "text-align", "center"], ["src", "assets/images/dmc_logo.jpg", "height", "50"], ["mat-table", "", 1, "mat-elevation-z8", "w-full", 3, "dataSource"], ["matColumnDef", "sl"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "name"], ["matColumnDef", "phone"], ["matColumnDef", "address"], ["matColumnDef", "date"], ["matColumnDef", "total"], ["matColumnDef", "discount"], ["matColumnDef", "due"], ["matColumnDef", "paid"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function ReportReturnComponent_Template(rf, ctx) { if (rf & 1) {
        const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "mtx-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportReturnComponent_Template_mtx_select_ngModelChange_4_listener($event) { return ctx.id = $event; })("scrollToEnd", function ReportReturnComponent_Template_mtx_select_scrollToEnd_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r50); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](5); return ctx.fetchMore(_r1.ngSelect.searchTerm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, ReportReturnComponent_ng_template_6_Template, 2, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportReturnComponent_Template_input_ngModelChange_8_listener($event) { return ctx.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](9, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](10, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportReturnComponent_Template_input_ngModelChange_13_listener($event) { return ctx.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](14, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](15, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ReportReturnComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r50); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](2); return ctx.search(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](25, ReportReturnComponent_div_25_Template, 48, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx.customerBuffer)("virtualScroll", true)("loading", ctx.loading)("ngModel", ctx.id)("typeahead", ctx.input$);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.from)("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.to)("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.dataSource.data.length < 1)("useExistingCss", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.dataSource.data.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_10__["MtxSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_10__["MtxSelectOptionTemplateDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["??f"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexOffsetDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], ngx_print__WEBPACK_IMPORTED_MODULE_16__["NgxPrintDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 12px;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-header-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-column-sl[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 19% !important;\n  width: 19% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-category[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 19% !important;\n  width: 19% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-supplier[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-unit[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stockIn[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stockOut[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stock[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVwb3J0LXJldHVybi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InJlcG9ydC1yZXR1cm4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG50ci5tYXQtcm93LFxyXG50ci5tYXQtaGVhZGVyLXJvdyxcclxudHIubWF0LWZvb3Rlci1yb3cge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxudHIubWF0LWZvb3Rlci1yb3cge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zbCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbmFtZSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDE5JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxOSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1jYXRlZ29yeSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDE5JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxOSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdXBwbGllciB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi11bml0IHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogOCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdG9ja0luIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogOCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdG9ja091dCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3RvY2sge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "6fgS":
/*!***********************************************************************!*\
  !*** ./src/app/routes/reports/report-sales/report-sales.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReportSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSalesComponent", function() { return ReportSalesComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_routes_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/routes/customer/customer.service */ "FizE");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../report.service */ "4txs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-matero/extensions/select */ "YKwE");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-print */ "m1XX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");





















function ReportSalesComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.item;
    const search_r8 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngOptionHighlight", search_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](item_r6.name);
} }
function ReportSalesComponent_div_25_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", i_r40 + 1, " ");
} }
function ReportSalesComponent_div_25_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r41.name, " ");
} }
function ReportSalesComponent_div_25_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r42.phone, " ");
} }
function ReportSalesComponent_div_25_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r43.address, " ");
} }
function ReportSalesComponent_div_25_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r44.date, " ");
} }
function ReportSalesComponent_div_25_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Cost Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r45.btotal, " ");
} }
function ReportSalesComponent_div_25_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", ctx_r26.totalCol.totalBtotal, "");
} }
function ReportSalesComponent_div_25_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r46.total, " ");
} }
function ReportSalesComponent_div_25_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"]("", ctx_r29.totalCol.totalTotal, " ");
} }
function ReportSalesComponent_div_25_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r47.discount, " ");
} }
function ReportSalesComponent_div_25_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r32.totalCol.totalDiscount);
} }
function ReportSalesComponent_div_25_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Profit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportSalesComponent_div_25_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r48.profit, " ");
} }
function ReportSalesComponent_div_25_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r35.totalCol.totalProfit);
} }
function ReportSalesComponent_div_25_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 38);
} }
function ReportSalesComponent_div_25_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 39);
} }
function ReportSalesComponent_div_25_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 40);
} }
function ReportSalesComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "Dream Masroom Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "Sales Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](9, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, ReportSalesComponent_div_25_th_10_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](11, ReportSalesComponent_div_25_td_11_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, ReportSalesComponent_div_25_td_12_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](13, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, ReportSalesComponent_div_25_th_14_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](15, ReportSalesComponent_div_25_td_15_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](16, ReportSalesComponent_div_25_td_16_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](17, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](18, ReportSalesComponent_div_25_th_18_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](19, ReportSalesComponent_div_25_td_19_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, ReportSalesComponent_div_25_td_20_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](21, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, ReportSalesComponent_div_25_th_22_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, ReportSalesComponent_div_25_td_23_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, ReportSalesComponent_div_25_td_24_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](25, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, ReportSalesComponent_div_25_th_26_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, ReportSalesComponent_div_25_td_27_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, ReportSalesComponent_div_25_td_28_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](29, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, ReportSalesComponent_div_25_th_30_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, ReportSalesComponent_div_25_td_31_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, ReportSalesComponent_div_25_td_32_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](33, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](34, ReportSalesComponent_div_25_th_34_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](35, ReportSalesComponent_div_25_td_35_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](36, ReportSalesComponent_div_25_td_36_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](37, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](38, ReportSalesComponent_div_25_th_38_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](39, ReportSalesComponent_div_25_td_39_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](40, ReportSalesComponent_div_25_td_40_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](41, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](42, ReportSalesComponent_div_25_th_42_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, ReportSalesComponent_div_25_td_43_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](44, ReportSalesComponent_div_25_td_44_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](45, ReportSalesComponent_div_25_tr_45_Template, 1, 0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](46, ReportSalesComponent_div_25_tr_46_Template, 1, 0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](47, ReportSalesComponent_div_25_tr_47_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dataSource", ctx_r5.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matHeaderRowDef", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matRowDefColumns", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matFooterRowDef", ctx_r5.displayedColumns);
} }
class ReportSalesComponent {
    constructor(reportService, customerService) {
        this.reportService = reportService;
        this.customerService = customerService;
        this.salesData = [];
        this.customerBuffer = [];
        this.bufferSize = 20;
        this.loading = false;
        this.input$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.displayedColumns = ['sl', 'name', 'phone', 'address', 'date', 'btotal', 'total', 'discount', 'profit'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.salesData);
    }
    ngOnInit() {
        this.from = null;
        this.to = null;
        this.id = null;
        this.customerService.getCustomersShort(0, this.bufferSize, null).subscribe(data => {
            this.customerBuffer = data;
        });
        this.onSearch();
    }
    fetchMore(term) {
        const len = this.customerBuffer.length;
        this.loading = true;
        this.customerService.getCustomersShort(len, this.bufferSize + len, term).subscribe(data => {
            this.customerBuffer = this.customerBuffer.concat(data);
            this.loading = false;
        });
    }
    onSearch() {
        this.input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(term => this.customerService.getCustomersShort(0, this.bufferSize, term)))
            .subscribe(data => {
            this.customerBuffer = data;
            this.loading = false;
        });
    }
    search(f) {
        this.reportService.getSales(this.from, this.to, this.id).subscribe(res => {
            this.salesData = res.salesData;
            this.totalCol = res.summary;
            console.log(this.totalCol);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.salesData);
        });
    }
}
ReportSalesComponent.??fac = function ReportSalesComponent_Factory(t) { return new (t || ReportSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](app_routes_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"])); };
ReportSalesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: ReportSalesComponent, selectors: [["app-report-sales"]], decls: 26, vars: 14, consts: [["name", "form", "fxLayout", "row", "fxLayoutAlign", "start center"], ["f", "ngForm"], ["fxFlex", ""], ["name", "customer", "bindLabel", "name", "bindValue", "id", "placeholder", "Select a customer", 3, "items", "virtualScroll", "loading", "ngModel", "typeahead", "ngModelChange", "scrollToEnd"], ["select", ""], ["ng-option-tmp", ""], ["fxFlex", "20", "fxFlexOffset", "2"], ["matInput", "", "name", "from", "placeholder", "From", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], ["matInput", "", "name", "to", "placeholder", "To", 3, "ngModel", "matDatepicker", "ngModelChange"], ["pickerTo", ""], ["fxFlexOffset", ".5", "type", "submit", "aria-label", "from", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "click"], ["printSectionId", "mytodosItemsId", "ngxPrint", "", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "disabled", "useExistingCss"], ["id", "mytodosItemsId", 4, "ngIf"], [3, "ngOptionHighlight"], ["id", "mytodosItemsId"], [2, "text-align", "center"], ["src", "assets/images/dmc_logo.jpg", "height", "50"], ["mat-table", "", 1, "mat-elevation-z8", "w-full", 3, "dataSource"], ["matColumnDef", "sl"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "name"], ["matColumnDef", "phone"], ["matColumnDef", "address"], ["matColumnDef", "date"], ["matColumnDef", "btotal"], ["matColumnDef", "total"], ["matColumnDef", "discount"], ["matColumnDef", "profit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function ReportSalesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "mtx-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportSalesComponent_Template_mtx_select_ngModelChange_4_listener($event) { return ctx.id = $event; })("scrollToEnd", function ReportSalesComponent_Template_mtx_select_scrollToEnd_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r50); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](5); return ctx.fetchMore(_r1.ngSelect.searchTerm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, ReportSalesComponent_ng_template_6_Template, 2, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportSalesComponent_Template_input_ngModelChange_8_listener($event) { return ctx.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](9, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](10, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportSalesComponent_Template_input_ngModelChange_13_listener($event) { return ctx.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](14, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](15, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ReportSalesComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r50); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](2); return ctx.search(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](25, ReportSalesComponent_div_25_Template, 48, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx.customerBuffer)("virtualScroll", true)("loading", ctx.loading)("ngModel", ctx.id)("typeahead", ctx.input$);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.from)("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.to)("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.dataSource.data.length < 1)("useExistingCss", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.dataSource.data.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_10__["MtxSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_10__["MtxSelectOptionTemplateDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["??f"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexOffsetDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], ngx_print__WEBPACK_IMPORTED_MODULE_16__["NgxPrintDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 12px;\r\n}\r\n\r\ntr.mat-row[_ngcontent-%COMP%], tr.mat-header-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\r\n  height: 32px;\r\n}\r\n\r\ntr.mat-footer-row[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.mat-column-sl[_ngcontent-%COMP%] {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 8% !important;\r\n  width: 8% !important;\r\n  overflow-wrap: break-word;\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-column-name[_ngcontent-%COMP%] {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 19% !important;\r\n  width: 19% !important;\r\n  overflow-wrap: break-word;\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-column-category[_ngcontent-%COMP%] {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 19% !important;\r\n  width: 19% !important;\r\n  overflow-wrap: break-word;\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-column-supplier[_ngcontent-%COMP%] {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 20% !important;\r\n  width: 20% !important;\r\n  overflow-wrap: break-word;\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-column-unit[_ngcontent-%COMP%] {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 8% !important;\r\n  width: 8% !important;\r\n  overflow-wrap: break-word;\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-column-stockIn[_ngcontent-%COMP%] {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 8% !important;\r\n  width: 8% !important;\r\n  overflow-wrap: break-word;\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-column-stockOut[_ngcontent-%COMP%] {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 8% !important;\r\n  width: 8% !important;\r\n  overflow-wrap: break-word;\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\r\n\r\n.mat-column-stock[_ngcontent-%COMP%] {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 10% !important;\r\n  width: 10% !important;\r\n  overflow-wrap: break-word;\r\n  word-break: break-word;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1zYWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBR3RCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUd0QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFHdEIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBR3RCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUd0QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFHdEIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBR3RCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUd0QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmIiwiZmlsZSI6InJlcG9ydC1zYWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxudHIubWF0LXJvdyxcclxudHIubWF0LWhlYWRlci1yb3csXHJcbnRyLm1hdC1mb290ZXItcm93IHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbnRyLm1hdC1mb290ZXItcm93IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc2wge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLW5hbWUge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxOSUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTklICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tY2F0ZWdvcnkge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxOSUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTklICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3VwcGxpZXIge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAyMCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdW5pdCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3RvY2tJbiB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3RvY2tPdXQge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXN0b2NrIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "8FIT":
/*!***********************************************************************************!*\
  !*** ./src/app/routes/reports/report-stock-sales/report-stock-sales.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ReportStockSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportStockSalesComponent", function() { return ReportStockSalesComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../report.service */ "4txs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-print */ "m1XX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");















function ReportStockSalesComponent_div_21_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReportStockSalesComponent_div_21_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", i_r23 + 1, " ");
} }
function ReportStockSalesComponent_div_21_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReportStockSalesComponent_div_21_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r24.name, " ");
} }
function ReportStockSalesComponent_div_21_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReportStockSalesComponent_div_21_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r25.category, " ");
} }
function ReportStockSalesComponent_div_21_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Supplier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReportStockSalesComponent_div_21_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r26.supplier, " ");
} }
function ReportStockSalesComponent_div_21_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReportStockSalesComponent_div_21_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r27.unit, " ");
} }
function ReportStockSalesComponent_div_21_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReportStockSalesComponent_div_21_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r28.stockIn, " ");
} }
function ReportStockSalesComponent_div_21_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Sale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReportStockSalesComponent_div_21_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r29.stockOut, " ");
} }
function ReportStockSalesComponent_div_21_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Remain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReportStockSalesComponent_div_21_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r30.stock, " ");
} }
function ReportStockSalesComponent_div_21_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 31);
} }
function ReportStockSalesComponent_div_21_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 32);
} }
function ReportStockSalesComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Dream Masroom Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Sales Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](18, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, ReportStockSalesComponent_div_21_th_19_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, ReportStockSalesComponent_div_21_td_20_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](21, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, ReportStockSalesComponent_div_21_th_22_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](23, ReportStockSalesComponent_div_21_td_23_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](24, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](25, ReportStockSalesComponent_div_21_th_25_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](26, ReportStockSalesComponent_div_21_td_26_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](27, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](28, ReportStockSalesComponent_div_21_th_28_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](29, ReportStockSalesComponent_div_21_td_29_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](30, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](31, ReportStockSalesComponent_div_21_th_31_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](32, ReportStockSalesComponent_div_21_td_32_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](33, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](34, ReportStockSalesComponent_div_21_th_34_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](35, ReportStockSalesComponent_div_21_td_35_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](36, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](37, ReportStockSalesComponent_div_21_th_37_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](38, ReportStockSalesComponent_div_21_td_38_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](39, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](40, ReportStockSalesComponent_div_21_th_40_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](41, ReportStockSalesComponent_div_21_td_41_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](42, ReportStockSalesComponent_div_21_tr_42_Template, 1, 0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](43, ReportStockSalesComponent_div_21_tr_43_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](12, 5, ctx_r3.from, "YYYY-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind2"](16, 8, ctx_r3.to, "YYYY-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx_r3.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx_r3.displayedColumns);
} }
class ReportStockSalesComponent {
    constructor(reportService) {
        this.reportService = reportService;
        this.listData = [];
        this.displayedColumns = ['sl', 'name', 'category', 'supplier', 'unit', 'stockIn', 'stockOut', 'stock'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.listData);
    }
    ngOnInit() {
        this.from = null;
        this.to = null;
    }
    search(f) {
        this.reportService.getStockDetail(this.from, this.to).subscribe(data => {
            this.listData = data.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.listData);
        });
    }
}
ReportStockSalesComponent.??fac = function ReportStockSalesComponent_Factory(t) { return new (t || ReportStockSalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"])); };
ReportStockSalesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ReportStockSalesComponent, selectors: [["app-report-stock-sales"]], decls: 22, vars: 9, consts: [["name", "form", "fxLayout", "row", "fxLayoutAlign", "start center"], ["f", "ngForm"], ["fxFlex", "20"], ["matInput", "", "name", "from", "placeholder", "From", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], ["fxFlex", "20", "fxFlexOffset", "2"], ["matInput", "", "name", "to", "placeholder", "To", 3, "ngModel", "matDatepicker", "ngModelChange"], ["pickerTo", ""], ["fxFlexOffset", ".5", "type", "submit", "aria-label", "from", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "click"], ["fxFlex", ""], ["printSectionId", "mytodosItemsId", "ngxPrint", "", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "disabled", "useExistingCss"], ["id", "mytodosItemsId", 4, "ngIf"], ["id", "mytodosItemsId"], [2, "text-align", "center"], ["src", "assets/images/dmc_logo.jpg", "height", "50"], ["mat-table", "", 1, "mat-elevation-z8", "w-full", 3, "dataSource"], ["matColumnDef", "sl"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "category"], ["matColumnDef", "supplier"], ["matColumnDef", "unit"], ["matColumnDef", "stockIn"], ["matColumnDef", "stockOut"], ["matColumnDef", "stock"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ReportStockSalesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ReportStockSalesComponent_Template_input_ngModelChange_4_listener($event) { return ctx.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "mat-datepicker-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "mat-datepicker", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ReportStockSalesComponent_Template_input_ngModelChange_9_listener($event) { return ctx.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "mat-datepicker-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReportStockSalesComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r32); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](2); return ctx.search(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, ReportStockSalesComponent_div_21_Template, 44, 11, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.from)("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.to)("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.dataSource.data.length < 1)("useExistingCss", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.dataSource.data.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexOffsetDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], ngx_print__WEBPACK_IMPORTED_MODULE_11__["NgxPrintDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 12px;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-header-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\n.mat-column-sl[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 19% !important;\n  width: 19% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-category[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 19% !important;\n  width: 19% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-supplier[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-unit[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stockIn[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stockOut[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stock[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVwb3J0LXN0b2NrLXNhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTs7O0VBR0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJyZXBvcnQtc3RvY2stc2FsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG50ci5tYXQtcm93LFxyXG50ci5tYXQtaGVhZGVyLXJvdyxcclxudHIubWF0LWZvb3Rlci1yb3cge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc2wge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLW5hbWUge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxOSUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTklICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tY2F0ZWdvcnkge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxOSUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTklICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3VwcGxpZXIge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAyMCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdW5pdCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3RvY2tJbiB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3RvY2tPdXQge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCA4JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA4JSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXN0b2NrIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "MuSv":
/*!*************************************************!*\
  !*** ./src/app/routes/reports/report.module.ts ***!
  \*************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ "M0ag");
/* harmony import */ var _report_sales_report_sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-sales/report-sales.component */ "6fgS");
/* harmony import */ var _report_stock_report_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-stock/report-stock.component */ "3HI6");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-routing.module */ "Ukqx");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-print */ "m1XX");
/* harmony import */ var _report_stock_sales_report_stock_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-stock-sales/report-stock-sales.component */ "8FIT");
/* harmony import */ var _report_due_report_due_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-due/report-due.component */ "vJZk");
/* harmony import */ var _report_return_report_return_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report-return/report-return.component */ "6/oo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class ReportModule {
}
ReportModule.??fac = function ReportModule_Factory(t) { return new (t || ReportModule)(); };
ReportModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: ReportModule });
ReportModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportRoutingModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_4__["NgxPrintModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](ReportModule, { declarations: [_report_sales_report_sales_component__WEBPACK_IMPORTED_MODULE_1__["ReportSalesComponent"],
        _report_stock_report_stock_component__WEBPACK_IMPORTED_MODULE_2__["ReportStockComponent"],
        _report_stock_sales_report_stock_sales_component__WEBPACK_IMPORTED_MODULE_5__["ReportStockSalesComponent"],
        _report_due_report_due_component__WEBPACK_IMPORTED_MODULE_6__["ReportDueComponent"],
        _report_return_report_return_component__WEBPACK_IMPORTED_MODULE_7__["ReportReturnComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        _report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportRoutingModule"],
        ngx_print__WEBPACK_IMPORTED_MODULE_4__["NgxPrintModule"]] }); })();


/***/ }),

/***/ "Ukqx":
/*!*********************************************************!*\
  !*** ./src/app/routes/reports/report-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_due_report_due_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-due/report-due.component */ "vJZk");
/* harmony import */ var _report_return_report_return_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-return/report-return.component */ "6/oo");
/* harmony import */ var _report_sales_report_sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-sales/report-sales.component */ "6fgS");
/* harmony import */ var _report_stock_sales_report_stock_sales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-stock-sales/report-stock-sales.component */ "8FIT");
/* harmony import */ var _report_stock_report_stock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-stock/report-stock.component */ "3HI6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: "sales",
        component: _report_sales_report_sales_component__WEBPACK_IMPORTED_MODULE_3__["ReportSalesComponent"]
    },
    {
        path: "stock",
        component: _report_stock_report_stock_component__WEBPACK_IMPORTED_MODULE_5__["ReportStockComponent"]
    },
    {
        path: "stock-detail",
        component: _report_stock_sales_report_stock_sales_component__WEBPACK_IMPORTED_MODULE_4__["ReportStockSalesComponent"]
    },
    {
        path: "payment",
        component: _report_due_report_due_component__WEBPACK_IMPORTED_MODULE_1__["ReportDueComponent"]
    },
    {
        path: "return",
        component: _report_return_report_return_component__WEBPACK_IMPORTED_MODULE_2__["ReportReturnComponent"]
    }
];
class ReportRoutingModule {
}
ReportRoutingModule.??fac = function ReportRoutingModule_Factory(t) { return new (t || ReportRoutingModule)(); };
ReportRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: ReportRoutingModule });
ReportRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](ReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vJZk":
/*!*******************************************************************!*\
  !*** ./src/app/routes/reports/report-due/report-due.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReportDueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDueComponent", function() { return ReportDueComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var app_routes_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/routes/customer/customer.service */ "FizE");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../report.service */ "4txs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-matero/extensions/select */ "YKwE");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-print */ "m1XX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");























function ReportDueComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.item;
    const search_r8 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngOptionHighlight", search_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](item_r6.name);
} }
function ReportDueComponent_div_33_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", i_r40 + 1, " ");
} }
function ReportDueComponent_div_33_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r41.name, " ");
} }
function ReportDueComponent_div_33_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r42.phone, " ");
} }
function ReportDueComponent_div_33_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r43.address, " ");
} }
function ReportDueComponent_div_33_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " -- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r44.date, " ");
} }
function ReportDueComponent_div_33_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r45.total, " ");
} }
function ReportDueComponent_div_33_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"]("", ctx_r26.totalCol.totalTotal, " ");
} }
function ReportDueComponent_div_33_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r46.discount, " ");
} }
function ReportDueComponent_div_33_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r29.totalCol.totalDiscount);
} }
function ReportDueComponent_div_33_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Due ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r47.due, " ");
} }
function ReportDueComponent_div_33_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r32.totalCol.totalDue);
} }
function ReportDueComponent_div_33_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Paid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function ReportDueComponent_div_33_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", element_r48.paid, " ");
} }
function ReportDueComponent_div_33_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r35.totalCol.totalPaid);
} }
function ReportDueComponent_div_33_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 44);
} }
function ReportDueComponent_div_33_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 45);
} }
function ReportDueComponent_div_33_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "tr", 46);
} }
function ReportDueComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "Dream Masroom Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "Sales Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](9, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, ReportDueComponent_div_33_th_10_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](11, ReportDueComponent_div_33_td_11_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, ReportDueComponent_div_33_td_12_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](13, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, ReportDueComponent_div_33_th_14_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](15, ReportDueComponent_div_33_td_15_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](16, ReportDueComponent_div_33_td_16_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](17, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](18, ReportDueComponent_div_33_th_18_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](19, ReportDueComponent_div_33_td_19_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, ReportDueComponent_div_33_td_20_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](21, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, ReportDueComponent_div_33_th_22_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, ReportDueComponent_div_33_td_23_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, ReportDueComponent_div_33_td_24_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](25, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, ReportDueComponent_div_33_th_26_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, ReportDueComponent_div_33_td_27_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, ReportDueComponent_div_33_td_28_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](29, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, ReportDueComponent_div_33_th_30_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, ReportDueComponent_div_33_td_31_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, ReportDueComponent_div_33_td_32_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](33, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](34, ReportDueComponent_div_33_th_34_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](35, ReportDueComponent_div_33_td_35_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](36, ReportDueComponent_div_33_td_36_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](37, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](38, ReportDueComponent_div_33_th_38_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](39, ReportDueComponent_div_33_td_39_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](40, ReportDueComponent_div_33_td_40_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](41, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](42, ReportDueComponent_div_33_th_42_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, ReportDueComponent_div_33_td_43_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](44, ReportDueComponent_div_33_td_44_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](45, ReportDueComponent_div_33_tr_45_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](46, ReportDueComponent_div_33_tr_46_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](47, ReportDueComponent_div_33_tr_47_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dataSource", ctx_r5.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matHeaderRowDef", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matRowDefColumns", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("matFooterRowDef", ctx_r5.displayedColumns);
} }
class ReportDueComponent {
    constructor(reportService, customerService) {
        this.reportService = reportService;
        this.customerService = customerService;
        this.dueData = [];
        this.customerBuffer = [];
        this.bufferSize = 20;
        this.loading = false;
        this.input$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.displayedColumns = ['sl', 'name', 'phone', 'address', 'date', 'total', 'discount', 'due', 'paid'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.dueData);
    }
    ngOnInit() {
        this.from = null;
        this.to = null;
        this.id = null;
        this.type = 0;
        this.customerService.getCustomersShort(0, this.bufferSize, null).subscribe(data => {
            this.customerBuffer = data;
        });
        this.onSearch();
    }
    fetchMore(term) {
        const len = this.customerBuffer.length;
        this.loading = true;
        this.customerService.getCustomersShort(len, this.bufferSize + len, term).subscribe(data => {
            this.customerBuffer = this.customerBuffer.concat(data);
            this.loading = false;
        });
    }
    onSearch() {
        this.input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(term => this.customerService.getCustomersShort(0, this.bufferSize, term)))
            .subscribe(data => {
            this.customerBuffer = data;
            this.loading = false;
        });
    }
    search(f) {
        this.reportService.getDue(this.from, this.to, this.id, this.type).subscribe(res => {
            this.dueData = res.dueData;
            this.totalCol = res.summary;
            console.log(this.totalCol);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.dueData);
        });
    }
}
ReportDueComponent.??fac = function ReportDueComponent_Factory(t) { return new (t || ReportDueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](app_routes_customer_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"])); };
ReportDueComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: ReportDueComponent, selectors: [["app-report-due"]], decls: 34, vars: 15, consts: [["name", "form", "fxLayout", "row", "fxLayoutAlign", "start center"], ["f", "ngForm"], ["fxFlex", "20"], ["name", "status", "placeholder", "Status", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "1"], ["value", "2"], ["fxFlex", "", "fxFlexOffset", "2"], ["name", "customer", "bindLabel", "name", "bindValue", "id", "placeholder", "Select a customer", 3, "items", "virtualScroll", "loading", "ngModel", "typeahead", "ngModelChange", "scrollToEnd"], ["select", ""], ["ng-option-tmp", ""], ["fxFlex", "20", "fxFlexOffset", "2"], ["matInput", "", "name", "from", "placeholder", "From", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerFrom", ""], ["matInput", "", "name", "to", "placeholder", "To", 3, "ngModel", "matDatepicker", "ngModelChange"], ["pickerTo", ""], ["fxFlexOffset", ".5", "type", "submit", "aria-label", "from", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "click"], ["fxFlex", ""], ["printSectionId", "mytodosItemsId", "ngxPrint", "", "mat-raised-button", "", 2, "margin-bottom", "10px", 3, "disabled", "useExistingCss"], ["id", "mytodosItemsId", 4, "ngIf"], [3, "ngOptionHighlight"], ["id", "mytodosItemsId"], [2, "text-align", "center"], ["src", "assets/images/dmc_logo.jpg", "height", "50"], ["mat-table", "", 1, "mat-elevation-z8", "w-full", 3, "dataSource"], ["matColumnDef", "sl"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "name"], ["matColumnDef", "phone"], ["matColumnDef", "address"], ["matColumnDef", "date"], ["matColumnDef", "total"], ["matColumnDef", "discount"], ["matColumnDef", "due"], ["matColumnDef", "paid"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function ReportDueComponent_Template(rf, ctx) { if (rf & 1) {
        const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportDueComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](10, "Due");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "mtx-select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportDueComponent_Template_mtx_select_ngModelChange_12_listener($event) { return ctx.id = $event; })("scrollToEnd", function ReportDueComponent_Template_mtx_select_scrollToEnd_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r50); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](13); return ctx.fetchMore(_r1.ngSelect.searchTerm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, ReportDueComponent_ng_template_14_Template, 2, 2, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportDueComponent_Template_input_ngModelChange_16_listener($event) { return ctx.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](17, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function ReportDueComponent_Template_input_ngModelChange_21_listener($event) { return ctx.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](22, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](23, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ReportDueComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r50); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](2); return ctx.search(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](31, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](32, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](33, ReportDueComponent_div_33_Template, 48, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](19);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx.customerBuffer)("virtualScroll", true)("loading", ctx.loading)("ngModel", ctx.id)("typeahead", ctx.input$);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.from)("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.to)("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.dataSource.data.length < 1)("useExistingCss", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.dataSource.data.length > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexOffsetDirective"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_12__["MtxSelectComponent"], _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_12__["MtxSelectOptionTemplateDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["??f"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], ngx_print__WEBPACK_IMPORTED_MODULE_18__["NgxPrintDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatFooterRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 12px;\n}\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-header-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-column-sl[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 19% !important;\n  width: 19% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-category[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 19% !important;\n  width: 19% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-supplier[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-unit[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stockIn[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stockOut[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 8% !important;\n  width: 8% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-stock[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVwb3J0LWR1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUdBLHFCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InJlcG9ydC1kdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG50ci5tYXQtcm93LFxyXG50ci5tYXQtaGVhZGVyLXJvdyxcclxudHIubWF0LWZvb3Rlci1yb3cge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxudHIubWF0LWZvb3Rlci1yb3cge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zbCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbmFtZSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDE5JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxOSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1jYXRlZ29yeSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDE5JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxOSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdXBwbGllciB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi11bml0IHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogOCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdG9ja0luIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgOCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogOCUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuICBoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zdG9ja091dCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDglICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDglICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc3RvY2sge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=reports-report-module.js.map