const PI = 3.14;
const nums = [1, 2, 3];

const double = arr => arr.map(num => num * 2);

const squareAndFindEvens = numbers =>
    numbers.map(num => num ** 2).filter(square => square % 2 === 0);

const filterOutOdds = (...args) => args.filter(v => v% 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

const removeRandom = items => {
    const idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key,  val) => ({ ...obj, [key]: val });

const removeKey = (obj, key) => {
    const { [key]: removeRandom, ...rest } = obj;
    return rest;
};

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

const update = (obj, key, val) => ({ ...obj, [key]: val });