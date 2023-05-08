import crypto from "crypto";

interface BlockShape {
    hash: string;
    preveHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public preveHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(preveHash, height, data);
    }
    static calculateHash(preveHash: string, height: number, data: string) {
        const toHash = `${preveHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}
