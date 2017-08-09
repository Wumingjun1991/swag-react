
const USERS_KEY = 'users';
const LOGIN = "login";

export default {
    // 保存用户
    saveUser (user) {
        user.id = Date.now();
        let userStr = localStorage.getItem(USERS_KEY);
        let users = userStr ? JSON.parse(userStr) : [];
        users.push(user);
        console.log(users);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    },

    // 读取用户
    readUser () {
        let userStr = localStorage.getItem(USERS_KEY);
        console.log(JSON.parse(userStr));
        return userStr ? JSON.parse(userStr) : [] ;
    },

    // 修改用户
    amend (user) {
        let userStr = localStorage.getItem(USERS_KEY);
        let users = userStr ? JSON.parse(userStr) : [];
        for (let i = 0; i < users.length; i++) {
            if (users.id === user.id) {
                users[i] = user;
            }
        }
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }



}