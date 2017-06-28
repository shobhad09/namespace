///<reference path="validation.ts"/>
var validation;
(function (validation) {
    var numbergexp = /^[0-9]+$/;
    var numbervalidator = (function () {
        function numbervalidator() {
        }
        numbervalidator.prototype.isacceptable = function (s) {
            return s.length === 5 && numbergexp.test(s);
        };
        return numbervalidator;
    }());
    validation.numbervalidator = numbervalidator;
})(validation || (validation = {}));
