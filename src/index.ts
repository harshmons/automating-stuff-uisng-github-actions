export const isEven = (x:number):boolean => {
    return x%2 ===0;
}

export const isOdd = (x:number):boolean =>{
    return !isEven(x);
}
