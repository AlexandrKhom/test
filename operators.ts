interface IPerson {
    name: string;
    age: number;
}

type PersonKeys = keyof IPerson // 'name' | 'age'
let key: PersonKeys = 'name'
key = 'age'
//key = 'something' //err, only 'name' | 'age'

type User = {
    _id: string;
    name: string;
    email: string,
    createdAt: Date;
}

type UserKeys1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeys2 = Pick<User, 'name' | 'email'>   // 'name' | 'email'

let user1: UserKeys1 = 'name'
user1 = 'email'
//user = '_id' //err, only 'name' | 'email'
let user2: UserKeys1 = 'name'
user2 = 'email'
//user2 = '_id' //err, only 'name' | 'email'