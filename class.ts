/* Classes */
// 추상클래스 : 다른 클래스가 상속받을 수 있는 클래스, 오직 다른 곳에서 상속 받을 수만 있는 클래스
abstract class User {
    constructor(
        // private firstName: string,
        // private lastName: string,
        // public nickname: string
        protected firstName: string,
        protected lastName: string,
        protected nickname: string
    ) {}
    abstract getNickName(): void;

    // 메소드 : 클래스안에 존재하는 함수
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// 상속
class Players extends User {
    getNickName() {
        console.log(this.nickname);
    }
}

const shinwooPark = new Players("shinwoo", "park", "bbong");
// shinwooPark.nickname;
shinwooPark.getFullName();
