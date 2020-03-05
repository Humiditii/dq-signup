const db = require('./data.json');
const fs = require('fs');

const UserModel = db.Users
//console.log(UserModel);

const signup = (userinfo) => {
    const userName = userinfo.userName;
    const email = userinfo.email;
    const password = userinfo.password;

    if(!userName || !email || !password){
        return {
            error: 'Empty Username or email or password'
        }
    }else{
        if( userName.length < 6 || email.length < 6) {
            //console.log('less then 6')
            return {
                error: 'Username and Email must be more than 6'
            }
        } else {
           const findUser = UserModel.find( user => user.email === email);
            if(findUser){
                return {
                    error: 'User exist try another email'
                }
                //console.log('existed')
            }else{
                const pattern = /^[^a-zA-Z]+@[a-zA-Z0-9]/;
                if(pattern.test(email)){
                    return {
                        statusCode: 401,
                        error: 'Wrong email format'
                    }
                }
                const p = 'data.json';
                fs.readFile(p, (err, fileContent) => {
                    let users = { "Users": [] }
                    if(!err){
                        users = JSON.parse(fileContent);
                        //console.log(UserModel)
                    }
                    const update = users.Users[{...UserModel}, {...userinfo}]
                    users.Users = [{...userinfo}, {...UserModel}];
                    fs.writeFile(p, JSON.stringify(users), err => {
                        console.log(err);
                      })
                })
            }
        }
    }
}


signup({
    email: 'kunle$@gmail.com',
    userName: 'kkekekkkf',
    password: 'sddddddd'
});

                    