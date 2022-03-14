
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
(function () {
    var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.global === global && global || this;
    var CPF = function CPF() { };
    if (typeof exports !== 'undefined' && !exports.nodeType) {
        if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = CPF;
        }
        exports.CPF = CPF;
    } else {
        root.CPF = CPF;
    }
    var calcChecker1 = function calcChecker1(firstNineDigits) {
        var sum = null;
        for (var j = 0; j < 9; ++j) {
            sum += firstNineDigits.toString().charAt(j) * (10 - j);
        }
        var lastSumChecker1 = sum % 11;
        var checker1 = lastSumChecker1 < 2 ? 0 : 11 - lastSumChecker1;
        return checker1;
    };
    var calcChecker2 = function calcChecker2(cpfWithChecker1) {
        var sum = null;
        for (var k = 0; k < 10; ++k) {
            sum += cpfWithChecker1.toString().charAt(k) * (11 - k);
        }
        var lastSumChecker2 = sum % 11;
        var checker2 = lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
        return checker2;
    };
    CPF.validate = function (value) {
        if (!value || value === true) {
            return;
        }
        if (typeof value === 'number') {
            value = String(value);
        }
        var cleanCPF = value.replace(/[^d]/g, '');
        var firstNineDigits = cleanCPF.substring(0, 9);
        var checker = cleanCPF.substring(9, 11);
        if (cleanCPF.length !== 11) {
            return false;
        }
        // Checking if all digits are equal
        for (var i = 0; i < 10; i++) {
            if ('' + firstNineDigits + checker === Array(12).join(i)) {
                return false;
            }
        }
        var checker1 = calcChecker1(firstNineDigits);
        var checker2 = calcChecker2('' + firstNineDigits + checker1);
        if (checker.toString() === checker1.toString() + checker2.toString()) {
            return true;
        } else {
            return false;
        }
    };
    return CPF;
})();