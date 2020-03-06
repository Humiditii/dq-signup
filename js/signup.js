const UserModel = Users.User
let response;
const signup = (userinfo) => {
    const userName = userinfo.userName;
    const email = userinfo.email;
    const password = userinfo.password;

    if(!userName || !email || !password){
        response = {
            error: 'Empty Username or email or password'
        }
        console.log(response);
    }else{
        if( userName.length < 6 || email.length < 6) {
            //console.log('less then 6')
            response = {
                error: 'Username and Email must be more than 6'
            }
            console.log(response);
        } else {
           const findUser = UserModel.find( user => user.email === email);
            if(findUser){
                response = {
                    error: 'User exist try another email'
                }
                console.log(response);
            }else{
                const pattern = /^[^a-zA-Z]+@[a-zA-Z0-9]/;
                if(pattern.test(email)){
                    return {
                        statusCode: 401,
                        error: 'Wrong email format'
                    }
                }

                const UpdateUser = UserModel.push(userinfo);
                console.log(UserModel)
                
            }
        }
    }
}


signup({
    id: UserModel.length + 1,
    email: 'tea@example.com',
    userName: 'kkekekkkf',
    password: 'sddddddd'
});

                    