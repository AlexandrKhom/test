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

// =========

class Animal {
    public color: string = 'black'
    protected voice: string = ''
    constructor() {
        console.log('go-go-go')
    }
    private  go() {
        console.log('GO')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.color = 'red'
cat.setVoice('ko-ko')
//cat.voice  //err

//===== abstract class =====

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('void log')
    }
    info(): string {
        return 'this is info'
    }
}


