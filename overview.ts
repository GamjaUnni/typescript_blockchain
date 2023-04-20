/*
    Type Checker
    :(콜론) 타입 
*/

// 명시적 정의
let a: boolean = false;
// 명시적 정의보다 타입 추론하도록 하는게 더 좋음
let b = false;

let c: number[] = [1, 2, 3];
let d = [1, 2, 3];

/*
 * optional 타입
 */

// Alias(별칭) 타입
type Player = {
    readonly name: string; // 읽기 전용
    age?: number;
};

const shinwoo: Player = {
    name: "shinwoo",
};

// if (player.age && player.age < 10) {}

const yuna: Player = {
    name: "yuna",
    age: 12,
};

// function playerMaker(name: string): Player {
//     return {
//         name,
//     };
// }

const playerMaker = (name: string): Player => ({ name });

const yunas = playerMaker("yuna");
yunas.age = 12;

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1); // 'push' does not exist on type 'readonly

/* 
    Tuple : array를 생성할 수 있게 한다.
    최소한의 길이를 가져야 하며, 
    특정 위치에 특정 타입이 있어야 한다.
*/
const people: readonly [string, number, boolean] = ["nico", 12, false];

/* 
    any : 타입스트립트로부터 빠져나오고 싶을 때 쓰는 타입
    좋지 않지만 가끔 써야 할때가 있음.
*/
