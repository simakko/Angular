webpackJsonp([1,4],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDialogComponent = (function () {
    function ContactDialogComponent(dialog) {
        this.dialog = dialog;
        this.title = "Edit contact";
    }
    ContactDialogComponent.prototype.ngOnInit = function () {
        if (!this.contact) {
            this.title = "Add contact";
            this.contact = new __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]();
        }
    };
    ContactDialogComponent.prototype.saveContact = function () {
        this.dialog.close(this.contact);
    };
    return ContactDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactDialogComponent.prototype, "contact", void 0);
ContactDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-contact-dialog',
        template: __webpack_require__(280),
        styles: [__webpack_require__(272)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */]) === "function" && _b || Object])
], ContactDialogComponent);

var _a, _b;
//# sourceMappingURL=contact-dialog.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, firstName, lastName, phoneNumber, address, city) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
    }
    return Contact;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapDialogComponent = (function () {
    function MapDialogComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MapDialogComponent.prototype.ngOnInit = function () {
    };
    return MapDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], MapDialogComponent.prototype, "address", void 0);
MapDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-map-dialog',
        template: __webpack_require__(284),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _a || Object])
], MapDialogComponent);

var _a;
//# sourceMappingURL=map-dialog.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactApiService = (function () {
    function ContactApiService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpointUrl + '/contacts';
    }
    ContactApiService.prototype.findContacts = function () {
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    ContactApiService.prototype.saveContacts = function (contact) {
        return contact.id ? this.updateContact(contact) : this.createContact(contact);
    };
    ContactApiService.prototype.createContact = function (contact) {
        return this.http.post(this.url, contact);
    };
    ContactApiService.prototype.updateContact = function (contact) {
        return this.http.put(this.url + '/' + contact.id, contact);
    };
    ContactApiService.prototype.removeContact = function (contact) {
        return this.http.delete(this.url + '/' + contact.id, contact);
    };
    return ContactApiService;
}());
ContactApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContactApiService);

var _a;
//# sourceMappingURL=contact-api.service.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactLocalstorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactLocalstorageService = (function () {
    function ContactLocalstorageService() {
        this.key = "localStorageKey";
        if (!localStorage.getItem(this.key)) {
            localStorage.setItem(this.key, JSON.stringify([]));
        }
    }
    ContactLocalstorageService.prototype.saveContacts = function (contact) {
        return contact.id ? this.editContact(contact) : this.addNewContact(contact);
    };
    ContactLocalstorageService.prototype.findContacts = function () {
        var contacts = this.readLocalStorage();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(contacts);
    };
    ContactLocalstorageService.prototype.readLocalStorage = function () {
        var data = localStorage.getItem(this.key);
        return JSON.parse(data);
    };
    ContactLocalstorageService.prototype.addNewContact = function (contact) {
        var contacts = this.readLocalStorage();
        contact.id = contacts.length ? contacts[contacts.length - 1].id + 1 : 0;
        contacts.push(contact);
        localStorage.setItem(this.key, JSON.stringify(contacts));
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(contact);
    };
    ContactLocalstorageService.prototype.editContact = function (contact) {
        var contacts = this.readLocalStorage();
        contacts[contact.id] = contact;
        localStorage.setItem(this.key, JSON.stringify(contacts));
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(contact);
    };
    ContactLocalstorageService.prototype.removeContact = function (contact) {
        var contacts = this.readLocalStorage();
        var index = contacts.findIndex(function (id) { return contact.id == id.id; });
        var contactList = [];
        for (var i = 0; i < contacts.length; i++) {
            if (i != index) {
                contactList.push(contacts[i]);
            }
        }
        localStorage.setItem(this.key, JSON.stringify(contactList));
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(contactList);
    };
    return ContactLocalstorageService;
}());
ContactLocalstorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ContactLocalstorageService);

//# sourceMappingURL=contact-localstorage.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_api_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_localstorage_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(contactApiService, contactLocalStorage) {
        this.contactApiService = contactApiService;
        this.contactLocalStorage = contactLocalStorage;
        this.contactStorage = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpointUrl ? contactApiService : contactLocalStorage;
    }
    ContactService.prototype.findAllContacts = function () {
        return this.contactStorage.findContacts();
    };
    ContactService.prototype.editContact = function (contact) {
        return this.contactStorage.saveContacts(contact);
    };
    ContactService.prototype.removeContact = function (contact) {
        return this.contactStorage.removeContact(contact);
    };
    ContactService.prototype.addNewContact = function (contact) {
        return this.contactStorage.saveContacts(contact);
    };
    return ContactService;
}());
ContactService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact_api_service__["a" /* ContactApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact_api_service__["a" /* ContactApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__contact_localstorage_service__["a" /* ContactLocalstorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__contact_localstorage_service__["a" /* ContactLocalstorageService */]) === "function" && _b || Object])
], ContactService);

var _a, _b;
//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceService = (function () {
    function DeviceService() {
        var _this = this;
        this.cordova = false;
        document.addEventListener('deviceready', function () {
            _this.cordova = true;
        }, false);
    }
    DeviceService.prototype.vibration = function () {
        if (this.cordova) {
            navigator.vibrate(100);
        }
    };
    return DeviceService;
}());
DeviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DeviceService);

//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_dialog_contact_dialog_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_dialog_map_dialog_component__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.contactDialog = function (contact) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */]);
        dialogRef.componentInstance.contact = contact;
        return dialogRef.afterClosed();
    };
    DialogService.prototype.mapDialog = function (address) {
        console.log(address);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__map_dialog_map_dialog_component__["a" /* MapDialogComponent */]);
        dialogRef.componentInstance.address = address;
        return dialogRef.afterClosed();
    };
    return DialogService;
}());
DialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header.ffcaaf4fe06f8e0aa03a.jpg";

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 186;


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(75);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
        this.onWindowResize(null);
    }
    AppComponent.prototype.onWindowResize = function (event) {
        var width = event ? event.target.innerWidth : window.innerWidth;
        this.sidenavMode = width >= 600 ? 'side' : 'over';
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.sidenav);
        this.onWindowResize(null);
        this.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](event.urlAfterRedirects, '/') || __WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](event.urlAfterRedirects, '/login')) {
                    _this.toolbarDisabled = true;
                    return;
                }
                _this.toolbarDisabled = false;
            }
        });
    };
    AppComponent.prototype.sidenavToggle = function () {
        navigator.vibrate(100);
        this.sidenav.toggle(!this.sidenav._isOpened);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('sidenav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdSidenav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdSidenav */]) === "function" && _a || Object)
], AppComponent.prototype, "sidenav", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onWindowResize", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(279),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_list_contact_list_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_list_contact_list_item_contact_list_item_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_services_contact_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_services_dialog_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_dialog_contact_dialog_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_map_dialog_map_dialog_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_pipes_contact_address_pipe__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_services_contact_api_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contact_services_contact_localstorage_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_services_vibration_directive__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_services_device_service__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contact_contact_list_contact_list_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_contact_list_contact_list_item_contact_list_item_component__["a" /* ContactListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__contact_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__contact_map_dialog_map_dialog_component__["a" /* MapDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__contact_pipes_contact_address_pipe__["a" /* ContactAddressPipe */],
            __WEBPACK_IMPORTED_MODULE_20__contact_services_vibration_directive__["a" /* VibrationDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__contact_services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_10__contact_services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_18__contact_services_contact_api_service__["a" /* ContactApiService */], __WEBPACK_IMPORTED_MODULE_19__contact_services_contact_localstorage_service__["a" /* ContactLocalstorageService */], __WEBPACK_IMPORTED_MODULE_21__contact_services_device_service__["a" /* DeviceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_13__contact_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */], __WEBPACK_IMPORTED_MODULE_14__contact_map_dialog_map_dialog_component__["a" /* MapDialogComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactListItemComponent = (function () {
    function ContactListItemComponent() {
    }
    ContactListItemComponent.prototype.ngOnInit = function () {
    };
    ContactListItemComponent.prototype.onEdit = function (contact) {
        return this.edit.emit(contact);
    };
    ContactListItemComponent.prototype.onDelete = function (contact) {
        return this.remove.emit(contact);
    };
    ContactListItemComponent.prototype.onMap = function (contact) {
        return this.showOnMap.emit(contact);
    };
    return ContactListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__contact__["a" /* Contact */]) === "function" && _a || Object)
], ContactListItemComponent.prototype, "contact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _b || Object)
], ContactListItemComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _c || Object)
], ContactListItemComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _d || Object)
], ContactListItemComponent.prototype, "showOnMap", void 0);
ContactListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-contact-list-item',
        template: __webpack_require__(281),
        styles: [__webpack_require__(273)]
    }),
    __metadata("design:paramtypes", [])
], ContactListItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-list-item.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = (function () {
    function ContactListComponent() {
        this.editContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.removeContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.showContactOnMap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    ContactListComponent.prototype.ngOnInit = function () {
    };
    return ContactListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Array)
], ContactListComponent.prototype, "contacts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _a || Object)
], ContactListComponent.prototype, "editContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _b || Object)
], ContactListComponent.prototype, "removeContact", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _c || Object)
], ContactListComponent.prototype, "showContactOnMap", void 0);
ContactListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-contact-list',
        template: __webpack_require__(282),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [])
], ContactListComponent);

var _a, _b, _c;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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
    function ContactComponent(contactService, dialogService) {
        this.contactService = contactService;
        this.dialogService = dialogService;
        this.reloadContacts();
    }
    ContactComponent.prototype.reloadContacts = function () {
        var _this = this;
        return this.contactService.findAllContacts().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    ContactComponent.prototype.dialogShow = function (contact) {
        this.dialog = this.dialogService.contactDialog(contact);
    };
    ContactComponent.prototype.contactEdit = function (contact) {
        var _this = this;
        return this.dialogService.contactDialog(contact).subscribe(function (contact) {
            if (contact) {
                _this.contactService.editContact(contact).subscribe(function (edit) {
                    _this.reloadContacts();
                });
            }
        });
    };
    ContactComponent.prototype.contactRemove = function (contact) {
        var _this = this;
        this.contactService.removeContact(contact).subscribe(function (remove) {
            _this.reloadContacts();
        });
        return;
    };
    ContactComponent.prototype.contactShowOnMap = function (contact) {
        var address = contact.address + "," + contact.city;
        var httpUrl = "http://www.google.com/maps?output=embed&q=";
        return this.dialogService.mapDialog(httpUrl + address.replace(" ", ""));
    };
    ContactComponent.prototype.addContact = function () {
        var _this = this;
        return this.dialogService.contactDialog().subscribe(function (contact) {
            console.log("subscribe");
            if (contact) {
                _this.contactService.addNewContact(contact).subscribe(function (add) {
                    _this.reloadContacts();
                });
            }
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(283),
        styles: [__webpack_require__(275)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAddressPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ContactAddressPipe = (function () {
    function ContactAddressPipe() {
    }
    ContactAddressPipe.prototype.transform = function (contact, args) {
        if (!contact)
            return "";
        var addressParts = [contact.address || null, contact.city || null];
        addressParts = __WEBPACK_IMPORTED_MODULE_1_lodash__["reject"](addressParts, __WEBPACK_IMPORTED_MODULE_1_lodash__["isNull"]);
        return addressParts.join(", ");
    };
    return ContactAddressPipe;
}());
ContactAddressPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'contactAddress'
    })
], ContactAddressPipe);

//# sourceMappingURL=contact-address.pipe.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VibrationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VibrationDirective = (function () {
    function VibrationDirective(deviceService) {
        this.deviceService = deviceService;
    }
    VibrationDirective.prototype.onClick = function () {
        this.deviceService.vibration();
    };
    return VibrationDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VibrationDirective.prototype, "onClick", null);
VibrationDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Directive */])({
        selector: '[vibration]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */]) === "function" && _a || Object])
], VibrationDirective);

var _a;
//# sourceMappingURL=vibration.directive.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.navigateToListing = function () {
        this.router.navigate(['/contact']);
    };
    LoginComponent.prototype.buttonClick = function () {
        if (this.username == "qwerty" || this.password == "qwerty") {
            this.navigateToListing();
        }
        else {
            this.navigateToListing();
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(285),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "html{\r\n  color: inherit;\r\n}\r\n\r\n.container{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n#content{\r\n  position: relative;\r\n  height: 100vh;\r\n}\r\n\r\n.router-container{\r\n  overflow-y: auto;\r\n}\r\n\r\n.md-toolbar{\r\n  height: 50px;\r\n}\r\n\r\n.ca-sidenav{\r\n  width: 200px;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #283593;\r\n}\r\n\r\n #sidenav-img{\r\n   background-image: url(" + __webpack_require__(185) + ");\r\n   position: absolute;\r\n   width: 100%;\r\n   height: 64px;\r\n   margin: 0;\r\n\r\n }\r\n\r\n #sidenavHeader{\r\n   position: absolute;\r\n   margin-top: 70px;\r\n   padding-left: 10px;\r\n }\r\n\r\nh3{\r\n  margin: 2px;\r\n  float: left;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#buttons{\r\n  width: 100px;\r\n  height: 60px;\r\n\r\n  position: relative;\r\n  top:0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: auto;\r\n}\r\n\r\nmd-card-title{\r\n  font-family: \"Gill Sans MT\", \"courier\", \"arial\";\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "md-card{\r\n  margin-bottom: 15px;\r\n  color: #283593;\r\n}\r\n\r\nmd-card-actions{\r\n  padding: 10px;\r\n}\r\n\r\nmd-card-title{\r\n  color: #5c6bc0;\r\n  margin-bottom: auto;\r\n}\r\n\r\n#mapButton{\r\n  float: right;\r\n}\r\n\r\n#card-headerbox{\r\n  margin-top: 15px;\r\n  background-color: #3F51B5;\r\n  text-align: center;\r\n  height: 50px;\r\n}\r\n\r\na{\r\n  background-color: #3584EB;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#container{\r\n  width: 240px;\r\n  height: 280px;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  border-radius: 10px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#header{\r\n  background-image: url(" + __webpack_require__(185) + ");\r\n  color: white;\r\n  width: 200px;\r\n  height: 80px;\r\n  padding: 10px 20px;\r\n  border-radius: 5px 5px 0 0;\r\n  font-size: 34px;\r\n  z-index: 1;\r\n}\r\n\r\nmd-card-title{\r\nmargin: 50px 20px 10px;\r\n}\r\n\r\nmd-card{\r\n  border-radius: 5px;\r\n  margin: 0px;\r\n  padding: 0px 0px 50px;\r\n}\r\n\r\n\r\nmd-card-actions{\r\n  display: block;\r\n  width: 90px;\r\n  height: 60px;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\nmd-card-content{\r\n  margin: 30px 40px 10px;\r\n}\r\n\r\nbutton{\r\n  background-color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"container\">\n  <md-sidenav *ngIf=\"!toolbarDisabled\" class=\"ca-sidenav\" name=\"sidenav\" #sidenav [mode]=\"sidenavMode\"\n              [opened]=\"sidenavMode=='side'\">\n    <div><img id=\"sidenav-img\" src=\"../assets/header.jpg\"></div>\n    <div id=\"sidenavHeader\">\n      <md-grid-list cols=\"4\" rowHeight=\"30px\">\n        <h3>Username</h3>\n      </md-grid-list>\n    </div>\n  </md-sidenav>\n  <div id=\"content\">\n    <md-toolbar *ngIf=\"!toolbarDisabled\" class=\"mat-elevation-z5\" color=\"primary\">\n      <button vibration md-fab (click)=\"sidenavToggle()\" color=\"primary\">\n        <md-icon>menu</md-icon>\n      </button>\n    </md-toolbar>\n    <div class=\"router-container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = "<md-card-title>{{title}}</md-card-title>\n<md-card-content>\n  <md-input-container>\n    <label>Firstname</label>\n    <input mdInput type=\"text\" id=\"firstnameInput\" required [(ngModel)]=\"contact.firstName\">\n  </md-input-container>\n  <br>\n  <md-input-container>\n    <label>Lastname</label>\n    <input mdInput type=\"text\" id=\"lastnameInput\" required [(ngModel)]=\"contact.lastName\">\n  </md-input-container>\n  <br>\n  <md-input-container>\n    <label>Address</label>\n    <input mdInput type=\"text\" id=\"addressInput\" required [(ngModel)]=\"contact.address\">\n  </md-input-container>\n  <br>\n  <md-input-container>\n    <label>City</label>\n    <input mdInput type=\"text\" id=\"cityInput\" required [(ngModel)]=\"contact.city\">\n  </md-input-container>\n  <br>\n  <md-input-container>\n    <label>Phonenumber</label>\n    <input mdInput type=\"text\" id=\"phonenumberInput\" required [(ngModel)]=\"contact.phoneNumber\">\n  </md-input-container>\n  <br>\n</md-card-content>\n<md-card-actions>\n  <div id=\"buttons\">\n    <button md-mini-fab vibration color=\"primary\" (click)=\"saveContact()\">\n      <md-icon class=\"md-18\">check</md-icon>\n    </button>\n    <button md-mini-fab vibration color=\"accent\" md-dialog-close>\n      <md-icon class=\"md-18\">clear</md-icon>\n    </button>\n  </div>\n</md-card-actions>\n"

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "<div id=\"card-headerbox\">\n</div>\n<md-card>\n  <table>\n    <md-card-title>{{contact.firstName}} {{contact.lastName}}\n    </md-card-title>\n    <div>\n      <md-card-content>\n        <br>{{contact | contactAddress}}\n        <br>{{contact.phoneNumber}}\n        <br>{{contact.id}}\n      </md-card-content>\n    </div>\n  </table>\n\n  <md-card-actions>\n    <div>\n      <a md-mini-fab vibration (click)=\"onEdit(contact)\">\n        <md-icon>edit</md-icon>\n      </a>\n      <a md-mini-fab vibration (click)=\"onDelete(contact)\">\n        <md-icon>delete</md-icon>\n      </a>\n      <div id=\"mapButton\">\n        <a md-mini-fab vibration (click)=\"onMap(contact)\">\n          <md-icon>room</md-icon>\n        </a>\n      </div>\n    </div>\n  </md-card-actions>\n\n</md-card>\n"

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let contact of contacts\" fxFlexAlign=\"center stretch\">\n  <app-contact-list-item\n    [contact]=\"contact\"\n    [edit]=\"editContact\"\n    [remove]=\"removeContact\"\n    [showOnMap]=\"showContactOnMap\"\n    ></app-contact-list-item>\n</div>\n\n"

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex.gt-lg=\"30%\" fxFlex=\"100\" fxFlexOffset.gt-sm=\"35%\"\n       fxFlexOffset.sm=\"20%\">\n    <app-contact-list\n      [contacts]=\"contacts\"\n      (editContact)=\"contactEdit($event)\"\n      (removeContact)=\"contactRemove($event)\"\n      (showContactOnMap)=\"contactShowOnMap($event)\"\n    ></app-contact-list>\n    <md-card-title-group>\n      <a md-fab vibration routerLink=\".\" (click)=\"addContact()\" color=\"primary\">\n        <md-icon >add</md-icon>\n      </a>\n    </md-card-title-group>\n  </div>\n  <div fxLayout=\"column\" fxFlex.gt-sm=\"35%\" fxFlex.sm=\"20%\" fxFlex=\"0\"></div>\n</div>\n"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<div md-dialog-content>\n  <iframe [src]=\"sanitizer.bypassSecurityTrustResourceUrl(this.address)\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n</div>\n\n"

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <md-card>\n    <div id=\"header\">\n    <md-card-title id=\"card-header\">\n      Login\n    </md-card-title>\n    </div>\n   <md-card-content>\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"Username\" required [(ngModel)]=\"username\">\n      </md-input-container>\n      <br>\n      <md-input-container>\n        <input mdInput type=\"text\" type=\"password\" placeholder=\"Password\" required [(ngModel)]=\"password\">\n      </md-input-container>\n       <br>\n         </md-card-content>\n        <md-card-actions>\n          <button vibration md-button (click)=\"buttonClick()\">\n            Sign in\n          </button>\n        </md-card-actions>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(187);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    endpointUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ })

},[538]);
//# sourceMappingURL=main.bundle.js.map