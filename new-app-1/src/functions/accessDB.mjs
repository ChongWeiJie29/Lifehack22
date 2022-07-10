import userLogin from '../database/users.json';


export function checkUserName(username) {
    for (let i of userLogin) {
        if (i.username == username)
            return true;
    }
    return false;    
}

export function checkPassword(username) {
    for (let i of userLogin) {
        if (i.password == username)
            return true;
    }
    return false;    
}

