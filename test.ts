/// <reference path="validation.ts"/>
/// <reference path="lettersvalidator.ts"/>
///<reference path="numbervalidator.ts"/>

let strings=["shobha","56003","108"];

let validators:{[s:string]:validation.stringvalidator; }={};
validators["zipcode"]=new validation.numbervalidator();
validators["names"]=new validation.lettersonlyvalidator();

for(let s of strings)

{
    for (let name in validators)
    {
console.log( s+ (validators[name].isacceptable(s) ? " matches " : " does not match ") + name);
    }
}