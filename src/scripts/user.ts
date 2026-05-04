class User {
    user: string;
    pass: string;

    constructor(user: string, pass: string) {
        this.pass = pass;
        this.user = user;
    }
}

let userlist: Array<User> = [new User("admin","admin"), new User("member","member")];
if(localStorage.getItem("userlist") === null){
    localStorage.setItem("userlist", JSON.stringify(userlist));
}
else {
    userlist = JSON.parse(localStorage.getItem("userlist")!);
}

export function login(username: string, password: string) {
    let idx = userlist.findIndex(x => x.user === username);
    if(idx === -1) {
        return;
    }
    if(userlist[idx].pass === password) {
        localStorage.setItem("TOKOHAPPY_USERNAME", userlist[idx].user);
    }
}

export function register(username: string, password: string){
    userlist.push(new User(username, password));
}
