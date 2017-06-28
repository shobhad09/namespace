/// <reference path="validation.ts"/>
/// <reference path="lettersvalidator.ts"/>
///<reference path="numbervalidator.ts"/>
var strings = ["shobha", "56003", "108"];
var validators = {};
validators["zipcode"] = new validation.numbervalidator();
validators["names"] = new validation.lettersonlyvalidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log(s + (validators[name_1].isacceptable(s) ? " matches " : " does not match ") + name_1);
    }
}
