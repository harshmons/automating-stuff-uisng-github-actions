export const isEven = (x:number):boolean => {
    return x%2 ===0;
}
const test:boolean = true;

export const isOdd = (x:number):boolean =>{
    console.log(test);
    return !isEven(x);
}
