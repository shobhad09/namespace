///<reference path="validation.ts" />
var validation;
(function (validation) {
    var regularexp = /^[A-Za-z]+$/;
    var lettersonlyvalidator = (function () {
        function lettersonlyvalidator() {
        }
        lettersonlyvalidator.prototype.isacceptable = function (s) {
            return regularexp.test(s);
        };
        return lettersonlyvalidator;
    }());
    validation.lettersonlyvalidator = lettersonlyvalidator;
})(validation || (validation = {}));
