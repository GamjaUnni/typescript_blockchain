/* Interfaces */
type Team = "red" | "blue" | "green";
type Health = 1 | 5 | 10;

// 타입과 다르게 단 한가지, 오브젝트의 모양을 특정해주기 위함
interface People {
    nickname: string;
    team: Team;
    health: Health;
}

const mina: People = {
    nickname: "mini",
    team: "red",
    health: 5,
};

/////////////////////////////////////////////////////////////

interface Users {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
}

interface Human {
    health: number;
}

class Peoples implements Users, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`;
    }
}
