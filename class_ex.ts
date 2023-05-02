type Words = {
    [key: string]: string; // property의 이름은 모르지만, 타입만을 알때 사용
};

// let dict: Words = {
//     potato: "food",
// };

class Dict {
    private words: Words;
    constructor() {
        // 초기화
        this.words = {};
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        return this.words[term];
    }
    static hello() {
        return "hello";
    }
}

class Word {
    constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");

Dict.hello();
