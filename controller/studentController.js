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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
var students_1 = require("../model/students");
var controller = /** @class */ (function () {
    function controller() {
    }
    controller.prototype.getHome = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                res.render("index", { data: false });
                return [2 /*return*/];
            });
        });
    };
    controller.prototype.getAllStudents = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var allStudents, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('klfdsjldkfjlsdjflsdjflskjflsjflsdkjflsdjflksdjflksjdflksfjk');
                        return [4 /*yield*/, students_1.default.find({}).sort({ _id: -1 })];
                    case 1:
                        allStudents = _a.sent();
                        console.log(allStudents, 'fksdfljsjdlkj');
                        // let data = true;
                        res.render("index", { data: true, allStudents: allStudents });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log("To get all studetns:", err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    controller.prototype.addStudent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, place, standard, medium, newUser, newstd, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_1 = _a.name, place = _a.place, standard = _a.standard, medium = _a.medium;
                        newUser = new students_1.default({
                            name: name_1,
                            place: place,
                            standard: standard,
                            medium: medium,
                        });
                        return [4 /*yield*/, newUser.save()];
                    case 1:
                        newstd = _b.sent();
                        res.redirect("/");
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        console.log("Adding new studetn:", err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    controller.prototype.deleteStudent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deletedData, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.id;
                        return [4 /*yield*/, students_1.default.deleteOne({ _id: id })];
                    case 1:
                        deletedData = _a.sent();
                        // res.render("index", { data: false });
                        res.redirect('/');
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.log("delete student:", err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    controller.prototype.getUpdateFile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, studentToUpdate, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.id;
                        return [4 /*yield*/, students_1.default.findOne({ _id: id })];
                    case 1:
                        studentToUpdate = _a.sent();
                        res.render("update", { studentToUpdate: studentToUpdate });
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.log("get Update function:", err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    controller.prototype.makeUpdate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_2, place, standard, medium, id, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_2 = _a.name, place = _a.place, standard = _a.standard, medium = _a.medium, id = _a.id;
                        return [4 /*yield*/, students_1.default.updateOne({ _id: id }, {
                                $set: {
                                    name: name_2,
                                    place: place,
                                    standard: standard,
                                    medium: medium,
                                },
                            })];
                    case 1:
                        _b.sent();
                        res.redirect("/");
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _b.sent();
                        console.log("make updation:", err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return controller;
}());
exports.controller = controller;
