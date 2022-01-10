interface IContact {
    readonly id: string;
    name?: boolean;
    about: {
        width: number
        height: number
    }
}

// ===== how to use Interface =====
const cont: IContact = {
    id: '123',
    about: {
        width: 11,
        height: 22
    },
}
cont.name = true;
//cont.id = '12345' //err coz read-only property

const cont2 = {
    id: '123',
    about: {
        width: 11,
        height: 22
    },
} as IContact

const cont3 = <IContact>{
    id: '123',
    about: {
        width: 11,
        height: 22
    },
}

// ===== how to use extends =====
interface IConArea extends IContact {
    getSome: () => number;
}

const cont4: IConArea = {
    id: '123',
    about: { width: 5, height: 10 },
    getSome: (): number => this.about.height * this.about.width
}

// ===== implements =====
interface IClock {
    time: Date,
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date
    }
}

// =====   =====
interface IStyles {
    [key: string]: string
}
const styles: IStyles = {
    border: '1px',
    margin: '2px',
    radius: '3px',
    //padding: true  //err coz do not fit for Interface
}


