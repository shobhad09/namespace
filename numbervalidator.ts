///<reference path="validation.ts"/>

namespace validation{
 const numbergexp=/^[0-9]+$/;
    export class numbervalidator implements stringvalidator
    {
    isacceptable(s:string)
    {
        return s.length=== 5 && numbergexp.test(s);
    }

    }
}

