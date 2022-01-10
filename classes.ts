class Typescript {
    version: string;
    constructor(version: string) {
        this.version = version;
    }
    info(name: string) {
        return `[${name}]: TS version is ${this.version}`
    }
}

class Car {
    readonly model: string;
    readonly wheels: number = 4;
    constructor(theModel: string) {
        this.model = theModel
    }
}
// laconic version
class Car1 {
    readonly wheels: number = 4;
    constructor(readonly model: string) {}
}












