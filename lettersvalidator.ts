///<reference path="validation.ts" />
namespace validation{
    const regularexp=/^[A-Za-z]+$/;
    export class lettersonlyvalidator implements stringvalidator
    {
        isacceptable(s:string)
        {
         return regularexp.test(s);
        }
    }
}