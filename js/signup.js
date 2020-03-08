const UserModel = Users.User
let response;
const signup = (userinfo) => {
    const username = userinfo.username;
    const email = userinfo.email;
    const password = userinfo.password;

    if(!username || !email || !password){
        response = {
            error: 'Empty Username or email or password'
        }
        console.log(response);
    }else{
        if( username.length < 6 || email.length < 6) {
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
                const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                //console.log(pattern.test(email))
                if(pattern.test(email) == false){
                    response =  {
                        statusCode: 401,
                        error: 'Wrong email format'
                    }
                    console.log(response);
                }else{
                    const UpdateUser = UserModel.push(userinfo);
                    response = {
                    statusCode : 201,
                    message : userinfo.username + ' successfully signup'
                }
                console.log(response);
                console.log(UserModel);
                }
 
            }
        }
    }
}


signup({
    id: UserModel.length + 1,
    username: 'Kunleboy',
    email: 'te3ayuyycom',
    password: 'sddddddd'
});

                    