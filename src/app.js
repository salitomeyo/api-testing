"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define("src/booker/getAuth", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getToken = void 0;
    var axios = require('axios').default;
    var getToken = function (username, password) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.post('https://restful-booker.herokuapp.com/auth', {
                        username: username,
                        password: password
                    })];
                case 1: return [2, _a.sent()];
            }
        });
    }); };
    exports.getToken = getToken;
});
define("src/booker/getHealth", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkApiHealth = void 0;
    var axios = require('axios').default;
    var checkApiHealth = function () {
        return axios.get('https://restful-booker.herokuapp.com/ping');
    };
    exports.checkApiHealth = checkApiHealth;
});
(function () {
    var axios = require('axios').default;
    var getAuth = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, axios.post('https://restful-booker.herokuapp.com/auth', {
                            username: 'admin',
                            password: 'password123'
                        })];
                case 1: return [2, _a.sent()];
                case 2:
                    error_1 = _a.sent();
                    console.warn(error_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); };
    var header = {
        'content-type': 'application/json',
        'Accept': 'application/json'
    };
    var creatBooking = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, axios.post('https://restful-booker.herokuapp.com/booking', { headers: header }, {
                            firstname: "Jim",
                            lastname: "Brown",
                            totalprice: 111,
                            depositpaid: true,
                            bookingdates: {
                                checkin: "2018-01-01",
                                checkout: "2019-01-01"
                            },
                            additionalneeds: "Breakfast"
                        })];
                case 1: return [2, _a.sent()];
                case 2:
                    error_2 = _a.sent();
                    console.warn(error_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); };
    creatBooking()
        .then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
        console.warn(error);
    });
})();
(function () {
    var axios = require('axios').default;
    var getPokemon = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, axios.get('https://pokeapi.co/api/v2/pokemon/ditto')];
                case 1: return [2, _a.sent()];
                case 2:
                    error_3 = _a.sent();
                    console.warn(error_3);
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); };
})();
var expect = require('chai').expect;
var axios = require('axios').default;
describe('Testing restful-booker API', function () {
    var _this = this;
    it('Check api health', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.get('https://restful-booker.herokuapp.com/ping')];
                case 1:
                    response = _a.sent();
                    expect(response.status).to.equal(201);
                    return [2];
            }
        });
    }); });
    it('get Auth token', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.post('https://restful-booker.herokuapp.com/auth', { headers: {
                            accept: 'application/json'
                        } }, {
                        username: 'admin',
                        password: 'password123'
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).to.equal(200);
                    expect(response.data.token).to.not.equal(null);
                    return [2];
            }
        });
    }); });
    it('get Bookings id', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.get('https://restful-booker.herokuapp.com/booking')];
                case 1:
                    response = _a.sent();
                    expect(response.status).to.equal(200);
                    expect(response.data.token).to.not.equal(null);
                    return [2];
            }
        });
    }); });
    it('get Booking', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.get("https://restful-booker.herokuapp.com/booking/1", { headers: {
                            'Accept': 'application/json'
                        } })];
                case 1:
                    response = _a.sent();
                    expect(response.status).to.equal(200);
                    return [2];
            }
        });
    }); });
    it('create booking', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.post('https://restful-booker.herokuapp.com/booking', { headers: {
                            'Content-Type': 'application/json'
                        } }, {
                        "firstname": "Jim",
                        "lastname": "Brown",
                        "totalprice": 111,
                        "depositpaid": true,
                        "bookingdates": {
                            "checkin": "2018-01-01",
                            "checkout": "2019-01-01"
                        },
                        "additionalneeds": "Breakfast"
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).to.equal(200);
                    expect(response.data.firstname).to.equal("Jim");
                    return [2];
            }
        });
    }); });
    it('partial update booking', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.post('https://restful-booker.herokuapp.com/booking/1518', { headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Cookie': 'token=eb7353b4d213992'
                        } }, {
                        firstname: 'Pepe',
                        lastname: 'Joe'
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).to.equal(200);
                    expect(response.data.firstname).to.equal("Pepe");
                    return [2];
            }
        });
    }); });
    it.only('delete Booking by id', function () { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, axios.delete('https://restful-booker.herokuapp.com/booking/415', { headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Cookie': 'token=eb7353b4d213992'
                        } })];
                case 1:
                    response = _a.sent();
                    expect(response.status).to.equal(201);
                    return [2];
            }
        });
    }); });
});
