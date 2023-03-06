import { isEven } from ".";

it("should return true for even numbers",()=>{
    expect(isEven(4)).not.toBeTruthy();
})

it("should return false for odd numbers",()=>{
    expect(isEven(5)).toBeFalsy();
})
