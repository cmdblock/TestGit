class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) {
        return new Vector(this.x + v.x, this.y + this.y);
    }
    sub(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }
}
