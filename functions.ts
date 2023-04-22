/* Call Signatures */
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
console.log(add(1, 2));

/* Overloading - 함수가 서로 다른 여러개의 call signiture를 가지고 있을 때 발생시킨다. */
type Add2 = {
    (a: number, b: number): number;
    (a: number, b: string): number;
};

const add2: Add2 = (a, b) => {
    if (typeof b === "string") return a;
    return a + b;
};

/////////////////////////////////////////

type Config = {
    path: string;
    state: object;
};

type Push = {
    (path: string): void;
    (config: Config): void;
};

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path);
    }
};

/////////////////////////////////////////

type Add3 = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
};

// c는 추가 파라미터 옵션이므로 추가적으로 타입을 줘야하고,
// 이 파라미터는 선택사항이라는 것을 알려줘야 한다.
const add3: Add3 = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
};
console.log(add3(1, 2));
console.log(add3(1, 2, 3));
