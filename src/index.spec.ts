import { isEven, isOdd } from ".";

describe("For IsEven function",()=>{
    it("should return true for even numbers",()=>{
        expect(isEven(4)).toBeTruthy();
    })
    
    it("should return false for odd numbers",()=>{
        expect(isEven(5)).toBeFalsy();
    })
})

xdescribe("For IsOdd function",()=>{
    it("should return true for odd numbers",()=>{
        expect(isOdd(5)).toBeTruthy();
    })
    
    it("should return false for even numbers",()=>{
        expect(isOdd(4)).toBeFalsy();
    })

})
