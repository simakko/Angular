webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(138);
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
        this.isShadowClassVisible = false;
        this.user = { id: 1, userName: "Local", password: "Password", email: "local@email.com" };
        this.onWindowResize(null);
    }
    AppComponent.prototype.onWindowResize = function (event) {
        var width = event ? event.target.innerWidth : window.innerWidth;
        this.sidenavMode = width >= 600 ? 'side' : 'over';
        if (this.sidenavMode == 'over') {
            this.isShadowClassVisible = false;
        }
        else {
            this.isShadowClassVisible = true;
        }
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
        template: __webpack_require__(283),
        styles: [__webpack_require__(275)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(54);
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
        template: __webpack_require__(284),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */]) === "function" && _b || Object])
], ContactDialogComponent);

var _a, _b;
//# sourceMappingURL=contact-dialog.component.js.map

/***/ }),

/***/ 118:
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

/***/ 119:
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
        template: __webpack_require__(288),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _a || Object])
], MapDialogComponent);

var _a;
//# sourceMappingURL=map-dialog.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_services_http_service__ = __webpack_require__(55);
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
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].endpointUrl + '/contacts';
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_services_http_service__["a" /* HTTPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_services_http_service__["a" /* HTTPService */]) === "function" && _a || Object])
], ContactApiService);

var _a;
//# sourceMappingURL=contact-api.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(140);
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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_api_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_localstorage_service__ = __webpack_require__(121);
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

/***/ 123:
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_dialog_contact_dialog_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_dialog_map_dialog_component__ = __webpack_require__(119);
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].endpointUrl + '/authentication';
    }
    AuthenticationService.prototype.authenticate = function (userName, password) {
        var _this = this;
        return this.http.post(this.url, { Username: userName, Password: password }).map(function (response) {
            var responseData = response.json();
            _this.http.saveToken(responseData.token);
            return responseData.userId;
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HTTPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HTTPService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(authentication, http) {
        this.authentication = authentication;
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].endpointUrl + '/user';
    }
    UserService.prototype.signIn = function (username, password) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].endpointUrl == null) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(null);
        }
        else {
            return this.authentication.authenticate(username, password).flatMap(function () {
                return _this.http.put(_this.url, null);
            })._catch(function (error) {
                console.log("Täällä ollaan " + error.status + " " + error.statusMessage);
                return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
            });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HTTPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HTTPService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header.ffcaaf4fe06f8e0aa03a.jpg";

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 191;


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(39);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_login_login_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_list_contact_list_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_list_contact_list_item_contact_list_item_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_services_contact_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_services_dialog_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_flex_layout__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_dialog_contact_dialog_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_map_dialog_map_dialog_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_pipes_contact_address_pipe__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_services_contact_api_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contact_services_contact_localstorage_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_services_vibration_directive__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_services_device_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_services_user_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_services_authentication_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__user_services_http_service__ = __webpack_require__(55);
/* unused harmony export getHttp */
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
        component: __WEBPACK_IMPORTED_MODULE_5__user_login_login_component__["a" /* LoginComponent */]
    }
];
function getHttp(backend, options) {
    return new __WEBPACK_IMPORTED_MODULE_24__user_services_http_service__["a" /* HTTPService */](backend, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__user_login_login_component__["a" /* LoginComponent */],
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
        providers: [__WEBPACK_IMPORTED_MODULE_9__contact_services_contact_service__["a" /* ContactService */], __WEBPACK_IMPORTED_MODULE_10__contact_services_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_18__contact_services_contact_api_service__["a" /* ContactApiService */], __WEBPACK_IMPORTED_MODULE_19__contact_services_contact_localstorage_service__["a" /* ContactLocalstorageService */], __WEBPACK_IMPORTED_MODULE_21__contact_services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_22__user_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__user_services_authentication_service__["a" /* AuthenticationService */], { provide: __WEBPACK_IMPORTED_MODULE_24__user_services_http_service__["a" /* HTTPService */], useFactory: getHttp, deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_13__contact_contact_dialog_contact_dialog_component__["a" /* ContactDialogComponent */], __WEBPACK_IMPORTED_MODULE_14__contact_map_dialog_map_dialog_component__["a" /* MapDialogComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact__ = __webpack_require__(118);
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
        template: __webpack_require__(285),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [])
], ContactListItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact-list-item.component.js.map

/***/ }),

/***/ 216:
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
        template: __webpack_require__(286),
        styles: [__webpack_require__(278)]
    }),
    __metadata("design:paramtypes", [])
], ContactListComponent);

var _a, _b, _c;
//# sourceMappingURL=contact-list.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__ = __webpack_require__(124);
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
        template: __webpack_require__(287),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(138);
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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__(123);
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

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(116);
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
    function LoginComponent(router, userService, app) {
        this.router = router;
        this.userService = userService;
        this.app = app;
        this.signInButton = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.navigateToContactListing = function () {
        this.router.navigate(['/contact']);
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.userService.signIn(this.username, this.password).subscribe(function (data) {
            console.log("data " + data.json());
            _this.app.user = data.json();
            _this.navigateToContactListing();
        }, function (error) {
            _this.signInButton = true;
            _this.error = "Oh no, error occurred. Your screwed!";
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(289),
        styles: [__webpack_require__(281)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "html{\r\n  color: inherit;\r\n}\r\n\r\n.container{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n#content{\r\n  position: relative;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.router-container{\r\n  height: calc(100vh - 60px);\r\n  overflow-y: auto;\r\n}\r\n\r\n.md-toolbar{\r\n  height: 50px;\r\n}\r\n\r\n.ca-sidenav{\r\n  width: 200px;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #283593;\r\n  overflow: visible;\r\n}\r\n\r\n #sidenav-img{\r\n   background-image: url(" + __webpack_require__(190) + ");\r\n   position: absolute;\r\n   width: 100%;\r\n   height: 110px;\r\n   margin: 0;\r\n }\r\n\r\n .sidenavHeaderShadow{\r\n   box-shadow: 5px 5px 10px lightgray;\r\n }\r\n\r\n#sidenavHeader{\r\n  position: absolute;\r\n  margin-top: 64px;\r\n  height: 100%;\r\n  width: 200px;\r\n}\r\n\r\nh3{\r\n  margin-top: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\np{\r\n  margin-top: 0;\r\n}\r\n\r\n.ca-sidenavUserImg{\r\n  background-image: url(" + __webpack_require__(538) + ");\r\n  background-position: center;\r\n  background-size: 110px;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 35px;\r\n}\r\n\r\n.userInfo{\r\n  width: 180px;\r\n  height: auto;\r\n  margin-top: -45px;\r\n  padding: 45px 10px 10px 10px;\r\n  background: -webkit-linear-gradient(top,  rgba(63,81,181,0) 0%,rgba(63,81,181,1) 31%,rgba(63,81,181,1) 100%);\r\n  background: linear-gradient(to bottom,  rgba(63,81,181,0) 0%,rgba(63,81,181,1) 31%,rgba(63,81,181,1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#003f51b5', endColorstr='#3f51b5',GradientType=0 );\r\n  color: white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#buttons{\r\n  width: 100px;\r\n  height: 60px;\r\n\r\n  position: relative;\r\n  top:0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: auto;\r\n}\r\n\r\nmd-card-title{\r\n  font-family: \"Gill Sans MT\", \"courier\", \"arial\";\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "md-card{\r\n  margin-bottom: 40px;\r\n  color: white;\r\n  padding: 0;\r\n  background: #4d7ae4;\r\n}\r\n\r\n.ca-listItemButtons{\r\n  clear: both;\r\n  margin: 0;\r\n  padding: 0 5%;\r\n  width: 90%;\r\n  background-color: #ffffff;\r\n}\r\n\r\nmd-card-title{\r\n  margin-top: 20px;\r\n  color: #ffffff;\r\n  margin-bottom: auto;\r\n}\r\n\r\n#mapButton{\r\n  float: right;\r\n}\r\n\r\na{\r\n  color: #9E9E9E;\r\n  margin: 5px;\r\n  box-shadow: 0px 2px 1px lightgray;\r\n  background: rgb(255,255,255);\r\n  background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) 48%,rgba(226,226,226,1) 89%,rgba(226,226,226,1) 89%);\r\n  background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) 48%,rgba(226,226,226,1) 89%,rgba(226,226,226,1) 89%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e2e2e2',GradientType=0 );\r\n\r\n}\r\n\r\n.ca-listItemText{\r\n  margin-left: 10px;\r\n  width: 60%;\r\n  float: left;\r\n}\r\n\r\n.ca-listItemContactIcon {\r\n  font-size: 100px;\r\n}\r\n\r\n.ca-contactIconDiv{\r\nfloat: right;\r\n}\r\nmd-card-content{\r\n  color: gainsboro;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".ca-listContainer{\r\n  margin-top: 10px;\r\n}\r\n\r\n.bottomMargin{\r\n  height: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "md-card-title-group{\r\n  position: absolute;\r\n  top: calc(100vh - 80px);\r\n  right: 5vw;\r\n}\r\n\r\na{\r\n  position: relative;\r\n  top: 15px;\r\n  left: 12px;\r\n  z-index: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#container{\r\n  width: 240px;\r\n  height: 280px;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  border-radius: 10px;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#header{\r\n  background-image: url(" + __webpack_require__(190) + ");\r\n  color: white;\r\n  width: 200px;\r\n  height: 80px;\r\n  padding: 10px 20px;\r\n  border-radius: 5px 5px 0 0;\r\n  font-size: 34px;\r\n  z-index: 1;\r\n}\r\n\r\nmd-card-title{\r\nmargin: 50px 20px 10px;\r\n}\r\n\r\nmd-card{\r\n  border-radius: 5px;\r\n  margin: 0px;\r\n  padding: 0px 0px 50px;\r\n}\r\n\r\n\r\nmd-card-actions{\r\n  display: block;\r\n  width: 90px;\r\n  height: 60px;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\nmd-card-content{\r\n  margin: 30px 40px 10px;\r\n}\r\n\r\nbutton{\r\n  background-color: white;\r\n}\r\n\r\n.alert{\r\n  position: absolute;\r\n  top: 100px;\r\n  width: 100%;\r\n  padding: 5px 0px;\r\n  text-align: center;\r\n  color: white;\r\n  background-color: red;\r\n  font-size: x-small;\r\n  font-stretch: extra-expanded;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"container\">\n  <md-sidenav *ngIf=\"!toolbarDisabled\" class=\"ca-sidenav\" name=\"sidenav\" #sidenav [mode]=\"sidenavMode\"\n              [opened]=\"sidenavMode=='side'\">\n    <div id=\"sidenav-img\"></div>\n    <div id=\"sidenavHeader\" [ngClass]=\"{'sidenavHeaderShadow': isShadowClassVisible}\">\n      <div class=\"userInfo\">\n        <div class=\"ca-sidenavUserImg\"></div>\n        <h3>{{user.userName}}</h3>\n      <p>{{user.email}}</p></div>\n    </div>\n    <button vibration (click)=\"sidenavToggle()\" color=\"primary\"></button>\n  </md-sidenav>\n  <div id=\"content\">\n    <md-toolbar *ngIf=\"!toolbarDisabled\" class=\"mat-elevation-z5\" color=\"primary\">\n      <button vibration md-fab (click)=\"sidenavToggle()\" color=\"primary\">\n        <md-icon>menu</md-icon>\n      </button>\n    </md-toolbar>\n    <div class=\"router-container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<md-card-title>{{title}}</md-card-title>\n<md-card-content>\n  <md-input-container>\n    <label>Firstname</label>\n    <input mdInput type=\"text\" id=\"firstnameInput\" required [(ngModel)]=\"contact.firstName\">\n  </md-input-container>\n  <br>\n  <md-input-container>\n    <label>Lastname</label>\n    <input mdInput type=\"text\" id=\"lastnameInput\" required [(ngModel)]=\"contact.lastName\">\n  </md-input-container>\n  <br>\n  <md-input-container>\n    <label>Address</label>\n    <input mdInput type=\"text\" id=\"addressInput\" required [(ngModel)]=\"contact.address\">\n  </md-input-container>\n  <br>\n  <md-input-container>\n    <label>City</label>\n    <input mdInput type=\"text\" id=\"cityInput\" required [(ngModel)]=\"contact.city\">\n  </md-input-container>\n  <br>\n  <md-input-container>\n    <label>Phonenumber</label>\n    <input mdInput type=\"text\" id=\"phonenumberInput\" required [(ngModel)]=\"contact.phoneNumber\">\n  </md-input-container>\n  <br>\n</md-card-content>\n<md-card-actions>\n  <div id=\"buttons\">\n    <button md-mini-fab vibration color=\"primary\" (click)=\"saveContact()\">\n      <md-icon class=\"md-18\">check</md-icon>\n    </button>\n    <button md-mini-fab vibration color=\"accent\" md-dialog-close>\n      <md-icon class=\"md-18\">clear</md-icon>\n    </button>\n  </div>\n</md-card-actions>\n"

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <table class=\"ca-listItemText\">\n    <md-card-title>{{contact.firstName}} {{contact.lastName}}\n    </md-card-title>\n    <div>\n      <md-card-content>\n        <br>{{contact | contactAddress}}\n        <br>{{contact.phoneNumber}}\n      </md-card-content>\n    </div>\n  </table>\n  <div class=\"ca-contactIconDiv\">\n  <i class=\"material-icons ca-listItemContactIcon\">&#xE851;</i>\n  </div>\n  <md-card-actions class=\"ca-listItemButtons\">\n      <a md-mini-fab vibration (click)=\"onEdit(contact)\">\n        <md-icon>edit</md-icon>\n      </a>\n      <a md-mini-fab vibration (click)=\"onDelete(contact)\">\n        <md-icon>delete</md-icon>\n      </a>\n      <div id=\"mapButton\">\n        <a md-mini-fab vibration (click)=\"onMap(contact)\">\n          <md-icon>room</md-icon>\n        </a>\n      </div>\n  </md-card-actions>\n\n</md-card>\n"

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<div class=\"ca-listContainer\" *ngFor=\"let contact of contacts\" fxFlexAlign=\"center stretch\">\n  <app-contact-list-item\n    [contact]=\"contact\"\n    [edit]=\"editContact\"\n    [remove]=\"removeContact\"\n    [showOnMap]=\"showContactOnMap\"\n    ></app-contact-list-item>\n</div>\n<div class=\"bottomMargin\"></div>\n\n"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex.gt-lg=\"40%\" fxFlex=\"100\" fxFlexOffset.gt-sm=\"30%\"\n       fxFlexOffset.sm=\"14%\">\n    <app-contact-list\n      [contacts]=\"contacts\"\n      (editContact)=\"contactEdit($event)\"\n      (removeContact)=\"contactRemove($event)\"\n      (showContactOnMap)=\"contactShowOnMap($event)\"\n    ></app-contact-list>\n<!--    <div class=\"gradientBottom\"></div>-->\n    <md-card-title-group>\n      <a md-fab vibration routerLink=\".\" (click)=\"addContact()\" color=\"primary\">\n        <md-icon >add</md-icon>\n      </a>\n    </md-card-title-group>\n  </div>\n  <div fxLayout=\"column\" fxFlex.gt-lg=\"40%\" fxFlex.gt-sm=\"30%\" fxFlex.sm=\"14%\" fxFlex=\"0\"></div>\n</div>\n"

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "<div md-dialog-content>\n  <iframe [src]=\"sanitizer.bypassSecurityTrustResourceUrl(this.address)\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n</div>\n\n"

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <md-card>\n    <div id=\"header\">\n    <md-card-title id=\"card-header\">\n      Login\n    </md-card-title>\n    </div>\n    <div *ngIf=\"signInButton\" class=\"alert\">{{error}}</div>\n   <md-card-content>\n      <md-input-container>\n        <input mdInput placeholder=\"Username\" required [(ngModel)]=\"username\">\n      </md-input-container>\n      <br>\n      <md-input-container>\n        <input mdInput type=\"password\" placeholder=\"Password\" required [(ngModel)]=\"password\">\n      </md-input-container>\n       <br>\n         </md-card-content>\n        <md-card-actions>\n          <button vibration md-button (click)=\"signIn()\">\n            Sign in\n          </button>\n        </md-card-actions>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    environmentName: '',
    endpointUrl: 'http://localhost:49537/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "face.eed8594cd58a4b096dd1.jpg";

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(192);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTPService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HTTPService = (function (_super) {
    __extends(HTTPService, _super);
    function HTTPService(backend, options) {
        var _this = _super.call(this, backend, options) || this;
        _this.authenticationHeaderName = "Authorization";
        _this.authenticationHeaderBearer = "Bearer ";
        return _this;
    }
    HTTPService.prototype.request = function (url, options) {
        if (typeof url === 'string') {
            if (!options) {
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]() };
            }
            options.headers.set(this.authenticationHeaderName, this.authenticationHeaderBearer + this.authenticationToken);
        }
        else {
            url.headers.set(this.authenticationHeaderName, this.authenticationHeaderBearer + this.authenticationToken);
        }
        return this.intercept(_super.prototype.request.call(this, url, options));
    };
    HTTPService.prototype.get = function (url, options, skipInterceptor) {
        if (skipInterceptor) {
            return _super.prototype.get.call(this, url, options);
        }
        return this.intercept(_super.prototype.get.call(this, url, options));
    };
    HTTPService.prototype.post = function (url, body, options, skipInterceptor) {
        if (skipInterceptor) {
            return _super.prototype.post.call(this, url, body, options);
        }
        return this.intercept(_super.prototype.post.call(this, url, body, options));
    };
    HTTPService.prototype.saveToken = function (token) {
        this.authenticationToken = token;
    };
    HTTPService.prototype.intercept = function (observable) {
        return observable.catch(function (res) {
            if (res.status === 401 || res.status === 403) {
                console.log(res.status + ' ' + res.statusText);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res);
        });
    };
    return HTTPService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]));
HTTPService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _b || Object])
], HTTPService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ })

},[542]);
//# sourceMappingURL=main.bundle.js.map