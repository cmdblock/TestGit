class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) {
        return new Vector(this.x + v.x, this.y + this.y);
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
